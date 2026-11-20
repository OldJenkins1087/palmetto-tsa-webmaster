from flask import Flask, render_template, request, redirect, url_for, jsonify
from endpoints import api_bp
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import case, cast, Float, func
from sqlalchemy.exc import IntegrityError
from flask_login import LoginManager, UserMixin, login_user, logout_user, login_required, current_user
from werkzeug.security import generate_password_hash, check_password_hash
import datetime
import time
import os

# Setup database uri
db_url = os.environ.get("DATABASE_URL", "sqlite:///db.sqlite")
if db_url.startswith("postgres://"):
    db_url = db_url.replace("postgres://", "postgresql://", 1)

# Setup Flask App
app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = db_url
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config["SQLALCHEMY_ENGINE_OPTIONS"] = {"pool_pre_ping": True}
app.config["SECRET_KEY"] = "gtAFXlPeORZqnusLCxrMSjoWpiQKGYyb"

# Initialize database with login manager
db = SQLAlchemy(app)
login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = "login"

# app.register_blueprint(api_bp)

# Stores {user: time} everytime they finish module
update_log = {}

# Constants
MODULES = ["foundations", "prompting", "responsibility", "deepfakes", "coding"]
# {'correct': 3, 'incorrect': 0, 'module': 0}
CORRECT_UPDATE_KEYS = ['correct', 'incorrect', 'module']
LEADERBOARD_LIMIT = 25
MIN_ANSWERS_FOR_RATIO = 1 

# User model
class Users(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(250), unique=True, nullable=False)
    password = db.Column(db.String(250), nullable=False)
    correct = db.Column(db.Integer, nullable=False)
    incorrect = db.Column(db.Integer, nullable=False)
    xp = db.Column(db.Integer, nullable=False)
    completions = db.relationship("ModuleCompletion", back_populates="users", cascade="all, delete-orphan")

# Completed Modules model
class ModuleCompletion(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False, index=True)
    module_slug = db.Column(db.String(64), nullable=False)
    completed_at = db.Column(db.DateTime, default=datetime.datetime.now(datetime.UTC), nullable=False)

    users = db.relationship("Users", back_populates="completions")

    __table_args__ = (
        db.UniqueConstraint("user_id", "module_slug", name="uq_user_module"),
    )

# Create database
with app.app_context():
    db.create_all()

# Load user for Flask-Login
@login_manager.user_loader
def load_user(user_id):
    return Users.query.get(int(user_id))

@app.route('/register', methods=["GET", "POST"])
def register():
    if request.method == "POST":
        username = request.form.get("username")
        password = request.form.get("password")

        if Users.query.filter_by(username=username).first(): # No duplicates
            return render_template("sign_up.html", error="Username already taken!")

        # Hash provided password
        hashed_password = generate_password_hash(password, method="pbkdf2:sha256")

        # Update Users database
        new_user = Users(username=username, password=hashed_password, correct=0, incorrect=0, xp=0)
        db.session.add(new_user)
        db.session.commit()

        return redirect(url_for("login"))
    
    return render_template("sign_up.html")

@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        username = request.form.get("username")
        password = request.form.get("password")

        # Grab user database item
        user = Users.query.filter_by(username=username).first()

        # Validate user password
        if user and check_password_hash(user.password, password): # Correct
            login_user(user)
            return redirect("/")
        else: # Incorrect
            return render_template("login.html", error="Invalid username or password")

    return render_template("login.html")

@app.route("/logout")
@login_required
def logout():
    logout_user()
    return redirect("/")

@app.post("/api/module/complete")
def complete_module():
    if current_user.is_anonymous:
        return {"error": "not logged in"}, 401

    data = request.get_json() or {}
    # Validate data format
    if not (isinstance(data, dict) and len(list(data.keys())) == len(CORRECT_UPDATE_KEYS) and all(x in data.keys() for x in CORRECT_UPDATE_KEYS)):
        return {"error": "unknown data structure"}, 400
    module_slug = MODULES[data["module"]]

    # Grab user database item
    user = db.session.get(Users, current_user.id)
    if user is None:
        return {"error": "user not found"}, 404

    # Check if user completed module
    already = db.session.query(
        ModuleCompletion.query.filter_by(
            user_id=user.id, module_slug=module_slug
        ).exists()
    ).scalar()

    # Update user statistics
    user.xp += 100 if not already else 25
    user.correct += int(data.get("correct", 0))
    user.incorrect += int(data.get("incorrect", 0))
    update_log[user.id] = time.time()

    if not already:
        db.session.add(ModuleCompletion(user_id=user.id, module_slug=module_slug))

    # Save database
    try:
        db.session.commit()
    except IntegrityError:
        db.session.rollback()   # only path that discards; nothing else is pending here
        print("Failed to save database!")
        return {"error": "could not save progress"}, 500

    # Return win/loss ratio
    if user.incorrect == 0:
        return {"average": user.correct}
    return {"average": round(user.correct / user.incorrect, 3)}
def _user_row(u, rank):
    return {
        "rank": rank,
        "username": u.username,
        "xp": u.xp,
        "correct": u.correct,
        "incorrect": u.incorrect,
    }


@app.get("/api/leaderboard")
def leaderboard():
    # ---------- Top N by XP ----------
    xp_users = (
        db.session.query(Users)
        .order_by(Users.xp.desc(), Users.username.asc())
        .limit(LEADERBOARD_LIMIT)
        .all()
    )
    by_xp = [_user_row(u, i + 1) for i, u in enumerate(xp_users)]

    # ---------- Top N by correct / incorrect ratio ----------
    # nullif(incorrect, 0) → NULL when incorrect = 0, so a perfect score yields NULL
    # instead of a ZeroDivisionError / integer-division surprise. NULL sorts last
    # in DESC, but we push the "perfect" group to the top explicitly below.
    ratio = cast(Users.correct, Float) / func.nullif(Users.incorrect, 0)
    perfect_first = case((Users.incorrect == 0, 0), else_=1)

    ratio_rows = (
        db.session.query(Users, ratio.label("ratio"))
        .filter((Users.correct + Users.incorrect) >= MIN_ANSWERS_FOR_RATIO)
        .order_by(
            perfect_first.asc(),      # 0 = perfect score → top of the list
            ratio.desc(),             # then highest finite ratio
            Users.correct.desc(),      # tiebreak: more correct answers wins
            Users.username.asc(),
        )
        .limit(LEADERBOARD_LIMIT)
        .all()
    )

    by_ratio = []
    for i, (u, r) in enumerate(ratio_rows):
        row = _user_row(u, i + 1)
        row["ratio"] = None if r is None else round(float(r), 3)
        row["perfect"] = (u.incorrect == 0)
        by_ratio.append(row)

    # ---------- Caller's own stats (handy for a "you" row) ----------
    you = {"username": "Guest", "xp": 0, "correct": 0, "incorrect": 0}
    if not current_user.is_anonymous:
        me = db.session.get(Users, current_user.id)
        you = {
            "username": me.username,
            "xp": me.xp,
            "correct": me.correct,
            "incorrect": me.incorrect,
        }

    return jsonify({
        "by_xp": by_xp,
        "by_ratio": by_ratio,
        "you": you,
    })

@app.get("/")
def read_root():
    user = current_user.username or "Guest" if not current_user.is_anonymous else "Guest"
    xp = 0
    finished_modules = []
    if user != "Guest":
        xp = current_user.xp
        finished_modules = ModuleCompletion.query.filter_by(user_id=current_user.id).all()
        print(f"Using user: {user} (correct: {current_user.correct}, incorrect: {current_user.incorrect}, xp: {current_user.xp})")
    return render_template('index.html', username=user, xp=xp, modules=jsonify([MODULES.index(mod.module_slug) for mod in finished_modules]).json)


if __name__ == "__main__":
    app.run('0.0.0.0', 8080, True)