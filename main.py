from flask import Flask, render_template, request, redirect, url_for
from endpoints import api_bp
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager, UserMixin, login_user, logout_user, login_required, current_user
from werkzeug.security import generate_password_hash, check_password_hash
import time


# Setup Flask App
app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///db.sqlite"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config["SECRET_KEY"] = "gtAFXlPeORZqnusLCxrMSjoWpiQKGYyb"

# Initialize database with login manager
db = SQLAlchemy(app)
login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = "login"

app.register_blueprint(api_bp)

# Stores {user: time} everytime they finish module
update_log = {}

# User model
class Users(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(250), unique=True, nullable=False)
    password = db.Column(db.String(250), nullable=False)
    correct = db.Column(db.Integer, nullable=False)
    incorrect = db.Column(db.Integer, nullable=False)
    xp = db.Column(db.Integer, nullable=False)

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

        if Users.query.filter_by(username=username).first():
            return render_template("sign_up.html", error="Username already taken!")

        hashed_password = generate_password_hash(password, method="pbkdf2:sha256")

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

        user = Users.query.filter_by(username=username).first()

        if user and check_password_hash(user.password, password):
            login_user(user)
            return redirect("/")
        else:
            return render_template("login.html", error="Invalid username or password")

    return render_template("login.html")

@app.route("/logout")
@login_required
def logout():
    logout_user()
    return redirect(url_for("login"))

@app.route("/update", methods=["POST"])
def update():
    data = request.get_json() 
    # Ensure proper data structure
    if isinstance(data, dict) and len(data.keys()) == 2 and all(x in data.keys() for x in ['correct', 'incorrect']):
        
        user = current_user.username or "Guest" if not current_user.is_anonymous else "Guest"
        if user == 'Guest':
            return "Login to save data"
        
        if user not in update_log or update_log[user]-time.time() > 45000:
            current_user.correct += data['correct']
            current_user.incorrect += data['incorrect']
            db.session.commit()
            update_log[user] = time.time()
            if (current_user.incorrect == 0):
                return current_user.correct
            return round(current_user.correct / current_user.incorrect, 3)
        else:
            return "Please no cheating"        

    return "Improper data"
        


@app.get("/")
def read_root():
    user = current_user.username or "Guest" if not current_user.is_anonymous else "Guest"
    print(user)
    if user != "Guest":
        print(f"Using user: {user} (correct: {current_user.correct}, incorrect: {current_user.incorrect}, xp: {current_user.xp})")
    return render_template('index.html', username=user)


if __name__ == "__main__":
    app.run('0.0.0.0', 8080, True)