const modulesData = [
    {
        id: 0,
        title: "Foundations of Artificial Intelligence",
        description: "Explore AI history, Machine Learning, Neural Networks, and how algorithms learn from data.",
        chapters: [
            { 
                title: "1. What is Artificial Intelligence?", 
                content: "Artificial Intelligence (AI) refers to computer systems capable of performing tasks that typically require human intelligence, such as recognizing speech, identifying patterns, and making predictions. Unlike traditional software that follows rigid 'if-then' rules written by programmers, modern AI learns patterns directly from examples." 
            },
            { 
                title: "2. Machine Learning vs. Deep Learning", 
                content: "Machine Learning (ML) is a branch of AI where algorithms improve at a task as they process more training data. Deep Learning is a specialized subset of ML that uses multi-layered Neural Networks—inspired by neurons in the human brain—to process complex inputs like images, video, and natural human language." 
            },
            { 
                title: "3. Real-World AI in Action", 
                content: "High school students interact with AI daily. Recommendation algorithms suggest videos on streaming apps, computer vision powers autonomous vehicle sensors, and medical AI models help doctors detect diseases early from X-ray scans." 
            }
        ],
        quizzes: [
            {
                question: "How does Machine Learning differ from traditional computer programming?",
                options: ["It requires no electricity to run", "It learns patterns from training data instead of following only hard-coded rules", "It only works on physical robots", "It cannot process numbers"],
                correct: 1
            },
            {
                question: "Which layer inside a Neural Network processes intermediate feature patterns between input and output?",
                options: ["Hidden Layer", "Firewall Layer", "Browser Cache", "External Storage Layer"],
                correct: 0
            },
            {
                question: "Which AI field enables self-driving cars to recognize stop signs and pedestrians?",
                options: ["Spreadsheet Automation", "Computer Vision", "Audio Compression", "Word Processing"],
                correct: 1
            }
        ]
    },
    {
        id: 1,
        title: "Practical AI Tools & Prompt Engineering",
        description: "Master Large Language Models (LLMs), Transformer mechanics, and ethical study workflows.",
        chapters: [
            { 
                title: "1. How Large Language Models Work", 
                content: "Large Language Models (LLMs) use a deep learning design called the Transformer architecture. Rather than 'thinking' or 'knowing' facts like a person, an LLM predicts the most statistically likely next word (or token) in a sequence based on patterns learned during training." 
            },
            { 
                title: "2. The R-T-C-B Prompting Framework", 
                content: "To get helpful study assistance from AI, structure prompts using four parts: Role (who the AI should act as), Task (what you need help understanding), Context (your grade level or topic), and Boundaries (rules like 'quiz me instead of writing the essay')." 
            },
            { 
                title: "3. Hallucinations & Fact Verification", 
                content: "Because LLMs predict probable text rather than querying a verified database, they can confidently invent fake quotes, dates, or citations—a flaw called 'hallucination.' Always verify AI-generated facts against primary academic sources." 
            }
        ],
        quizzes: [
            {
                question: "What core neural network architecture powers modern generative Large Language Models?",
                options: ["The Transformer Architecture", "Linear Punch Cards", "Static HTML Tables", "Manual Decision Trees"],
                correct: 0
            },
            {
                question: "What is an AI 'hallucination'?",
                options: ["When a computer screen flickers", "When an AI confidently generates false or fabricated information", "When an AI refuses to answer a question", "A type of computer virus"],
                correct: 1
            },
            {
                question: "Which prompt is best for ethically studying for a history exam?",
                options: ["Write my 5-page essay on World War II.", "Act as a history tutor and quiz me with 5 practice questions on the causes of World War II.", "Give me the answers to worksheet #4.", "Summarize everything ever written."],
                correct: 1
            }
        ]
    },
    {
        id: 2,
        title: "Ethics, Bias & Academic Integrity",
        description: "Evaluate algorithmic bias, data privacy, copyright, and responsible AI use in grades 9–12.",
        chapters: [
            { 
                title: "1. Algorithmic Bias & Training Data", 
                content: "AI models reflect the data they are trained on. If historical training datasets contain human prejudices or lack diverse representation, the AI system will repeat and amplify those biases in hiring, facial recognition, or grading tools." 
            },
            { 
                title: "2. AI & You: Academic Integrity Rules", 
                content: "Using AI to brainstorm ideas, explain tough concepts, or generate practice quizzes supports learning. Submitting AI-generated writing or code as your own original work violates academic honesty policies and prevents skill development." 
            },
            { 
                title: "3. Data Privacy & Digital Footprints", 
                content: "Never paste personal information, passwords, private school records, or unpublished creative work into public AI chatbots, as prompts may be logged or used to train future models." 
            }
        ],
        quizzes: [
            {
                question: "Where does systemic bias in an AI model usually originate?",
                options: ["From skewed or biased human-created training datasets", "From monitor brightness settings", "From internet download speeds", "From keyboard layouts"],
                correct: 0
            },
            {
                question: "Which action is an ethical use of AI for high school coursework?",
                options: ["Copying an AI-written essay and putting your name on it", "Asking AI to explain a confusing math step and then solving practice problems yourself", "Pasting classmates' private personal info into a chatbot", "Using AI to fabricate lab experiment data"],
                correct: 1
            },
            {
                question: "Why should you avoid entering sensitive personal data into public AI tools?",
                options: ["It slows down the Wi-Fi", "Prompts may be stored or used to train future models", "AI cannot read personal names", "It deletes your browser history"],
                correct: 1
            }
        ]
    }
];

const careersData = [
    {
        title: "Machine Learning Engineer",
        icon: "🤖",
        tagline: "Builds and trains predictive algorithms and neural networks.",
        hsClasses: ["AP Computer Science A", "AP Calculus AB/BC", "AP Statistics"],
        skills: ["Python", "Linear Algebra", "Data Modeling", "PyTorch / TensorFlow"],
        dailyWork: "Designs training pipelines, cleans massive datasets, and optimizes AI models so they run fast and accurately in real-world apps."
    },
    {
        title: "AI Ethics & Policy Specialist",
        icon: "⚖️",
        tagline: "Audits AI systems for fairness, safety, privacy, and legal compliance.",
        hsClasses: ["AP Government & Politics", "AP English Language", "Computer Science Principles"],
        skills: ["Critical Writing", "Bias Auditing", "Privacy Law", "Public Speaking"],
        dailyWork: "Tests AI tools for demographic bias, writes responsible-use guidelines for schools and companies, and advises lawmakers on AI safety."
    },
    {
        title: "Data Scientist",
        icon: "📊",
        tagline: "Extracts actionable insights from complex datasets to guide decisions.",
        hsClasses: ["AP Statistics", "Algebra II / Pre-Calculus", "Economics"],
        skills: ["SQL", "Data Visualization", "Statistical Inference", "R / Python"],
        dailyWork: "Analyzes patterns in healthcare, climate science, or sports analytics and builds predictive dashboards for organizations."
    },
    {
        title: "Computer Vision Engineer",
        icon: "👁️",
        tagline: "Teaches machines to interpret images, video, and 3D environments.",
        hsClasses: ["AP Physics", "AP Computer Science", "Geometry & Trigonometry"],
        skills: ["Image Processing", "C++ / Python", "Sensor Fusion", "Neural Networks"],
        dailyWork: "Develops visual recognition software for medical imaging diagnostics, autonomous vehicles, and agricultural robotics."
    },
    {
        title: "NLP & Conversational AI Designer",
        icon: "💬",
        tagline: "Shapes how AI understands and generates human language safely.",
        hsClasses: ["AP Literature", "World Languages", "Psychology", "CS Principles"],
        skills: ["Prompt Architecture", "Linguistics", "UX Writing", "Evaluation Testing"],
        dailyWork: "Designs educational tutoring assistants, translation engines, and safety guardrails for large language models."
    },
    {
        title: "AI Hardware & Robotics Architect",
        icon: "🔌",
        tagline: "Designs specialized chips and physical robots powered by edge AI.",
        hsClasses: ["AP Physics C", "Robotics / Engineering", "Digital Electronics"],
        skills: ["Circuit Design", "Embedded Systems", "CAD", "C / Rust"],
        dailyWork: "Creates energy-efficient processors (GPUs/NPUs) and autonomous robotic systems for manufacturing and space exploration."
    }
];

let userProgress = {
    username: "Guest Student",
    xp: 0,
    level: 0,
    completedModules: [],
    bonuses: { sentiment: false, prompt: false, integrity: false, career: false }
};

let currentActiveModuleIndex = null;
let currentQuizStep = 0;
let selectedQuizOptionIdx = null;

function initMainInterface() {
    document.querySelectorAll('.student-name').forEach(el => el.textContent = userProgress.username);
    document.getElementById('user-display-name').textContent = userProgress.username;
    renderModulesOverview();
    renderCareersGrid();
    updateDashboardMetrics();
}

window.addEventListener('DOMContentLoaded', initMainInterface);

function updateStudentName(val) {
    const clean = val.trim() || "Guest Student";
    userProgress.username = clean;
    document.querySelectorAll('.student-name').forEach(el => el.textContent = clean);
    document.getElementById('user-display-name').textContent = clean;
}

function switchView(target) {
    document.querySelectorAll('.view-section').forEach(sec => sec.classList.remove('active-view'));
    document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));

    const map = {
        dashboard: ['view-dashboard', 'nav-dash'],
        modules: ['view-modules', 'nav-modules'],
        playground: ['view-playground', 'nav-playground'],
        integrity: ['view-integrity', 'nav-integrity'],
        careers: ['view-careers', 'nav-careers'],
        references: ['view-references', 'nav-ref']
    };

    if (map[target]) {
        document.getElementById(map[target][0]).classList.add('active-view');
        document.getElementById(map[target][1]).classList.add('active');
    }
}

function renderModulesOverview() {
    const mainContainer = document.getElementById('modules-main-list');
    mainContainer.innerHTML = '';
    
    modulesData.forEach((mod, idx) => {
        const isDone = userProgress.completedModules.includes(mod.id);
        const row = document.createElement('div');
        row.className = 'module-row';
        row.innerHTML = `
            <div class="module-meta-box">
                <h3>Module ${idx + 1}</h3>
                <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:0.5rem;">Status:</p>
                <span style="color: ${isDone ? 'var(--success)' : 'var(--warning)'}; font-weight:bold;">
                    ${isDone ? '✓ Completed' : '○ Ready to Start'}
                </span>
            </div>
            <div class="module-content-box">
                <h2>${mod.title}</h2>
                <p style="color: var(--text-muted); margin-bottom:1rem;">${mod.description}</p>
                <button class="btn" style="width:auto;" onclick="launchModuleWorkspace(${idx})">
                    ${isDone ? 'Review Learning Materials' : 'Launch Learning Track'}
                </button>
            </div>
        `;
        mainContainer.appendChild(row);
    });
}

function launchModuleWorkspace(modIdx) {
    currentActiveModuleIndex = modIdx;
    document.getElementById('modules-main-list').style.display = 'none';
    document.getElementById('active-lesson-panel').style.display = 'block';

    const mod = modulesData[modIdx];
    const navBox = document.getElementById('lesson-chapters-list');
    navBox.innerHTML = '';

    mod.chapters.forEach((chap, cIdx) => {
        const lnk = document.createElement('a');
        lnk.className = 'chapter-link' + (cIdx === 0 ? ' active-chapter' : '');
        lnk.textContent = chap.title;
        lnk.onclick = () => selectChapter(cIdx);
        navBox.appendChild(lnk);
    });

    const quizLnk = document.createElement('a');
    quizLnk.className = 'chapter-link';
    quizLnk.style.color = 'var(--warning)';
    quizLnk.textContent = '🏆 Module Mastery Quiz (3 Questions)';
    quizLnk.id = 'quiz-nav-trigger-btn';
    quizLnk.onclick = () => {
        currentQuizStep = 0;
        launchQuizSection();
    };
    navBox.appendChild(quizLnk);

    selectChapter(0);
}

function selectChapter(cIdx) {
    document.getElementById('quiz-block').style.display = 'none';
    document.getElementById('lesson-text-display').style.display = 'block';
    
    const links = document.querySelectorAll('.chapter-link');
    links.forEach((l, idx) => {
        if (idx === cIdx) l.classList.add('active-chapter');
        else l.classList.remove('active-chapter');
    });

    const mod = modulesData[currentActiveModuleIndex];
    const chapterData = mod.chapters[cIdx];
    const isLastChapter = cIdx === mod.chapters.length - 1;

    const actionButton = !isLastChapter
        ? `<button class="btn" style="width:auto;" onclick="selectChapter(${cIdx + 1})">Next Chapter &rarr;</button>`
        : `<button class="btn" style="width:auto; background-color: var(--success);" onclick="currentQuizStep = 0; launchQuizSection();">Start Module Quiz &rarr;</button>`;

    const display = document.getElementById('lesson-text-display');
    display.innerHTML = `
        <h2>${chapterData.title}</h2>
        <p>${chapterData.content}</p>
        <div style="margin-top: 2rem; display: flex; justify-content: flex-end;">
            ${actionButton}
        </div>
    `;
}

function launchQuizSection() {
    document.getElementById('lesson-text-display').style.display = 'none';
    document.getElementById('quiz-block').style.display = 'block';
    
    const links = document.querySelectorAll('.chapter-link');
    links.forEach(l => l.classList.remove('active-chapter'));
    document.getElementById('quiz-nav-trigger-btn').classList.add('active-chapter');

    const mod = modulesData[currentActiveModuleIndex];
    const currentQ = mod.quizzes[currentQuizStep];

    document.getElementById('quiz-question-text').textContent = 'Question ' + (currentQuizStep + 1) + ' of ' + mod.quizzes.length + ': ' + currentQ.question;
    
    const optBox = document.getElementById('quiz-options-box');
    optBox.innerHTML = '';
    selectedQuizOptionIdx = null;

    currentQ.options.forEach((opt, oIdx) => {
        const div = document.createElement('div');
        div.className = 'quiz-option';
        div.textContent = opt;
        div.onclick = () => {
            document.querySelectorAll('.quiz-option').forEach(el => el.classList.remove('selected'));
            div.classList.add('selected');
            selectedQuizOptionIdx = oIdx;
        };
        optBox.appendChild(div);
    });
}

function submitQuizAnswer() {
    if (selectedQuizOptionIdx === null) {
        alert("Please select an answer before submitting!");
        return;
    }

    const mod = modulesData[currentActiveModuleIndex];
    const currentQ = mod.quizzes[currentQuizStep];

    if (selectedQuizOptionIdx === currentQ.correct) {
        if (currentQuizStep < mod.quizzes.length - 1) {
            currentQuizStep++;
            launchQuizSection();
        } else {
            alert("Module Complete! You earned +100 XP and unlocked your badge.");
            if (!userProgress.completedModules.includes(mod.id)) {
                userProgress.completedModules.push(mod.id);
                userProgress.xp += 100;
            }
            updateDashboardMetrics();
            exitLessonWorkspace();
        }
    } else {
        alert("Not quite! Review the chapter text and try that question again.");
    }
}

function exitLessonWorkspace() {
    document.getElementById('active-lesson-panel').style.display = 'none';
    document.getElementById('modules-main-list').style.display = 'flex';
    renderModulesOverview();
}

function updateDashboardMetrics() {
    userProgress.level = Math.floor(userProgress.xp / 100);
    document.getElementById('global-xp-display').textContent = userProgress.xp + ' XP';
    document.getElementById('stat-level').textContent = userProgress.level;
    document.getElementById('stat-xp').textContent = userProgress.xp;
    document.getElementById('stat-completed').textContent = userProgress.completedModules.length + '/3';

    const percentage = (userProgress.completedModules.length / 3) * 100;
    document.getElementById('portal-progress-bar').style.width = percentage + '%';

    userProgress.completedModules.forEach(id => {
        const bEl = document.getElementById('badge-mod-' + id);
        if (bEl) bEl.classList.add('unlocked');
    });

    if (userProgress.bonuses.career && userProgress.bonuses.integrity) {
        const expBadge = document.getElementById('badge-explorer');
        if (expBadge) expBadge.classList.add('unlocked');
    }
}

function runSentimentAnalyzer() {
    const text = document.getElementById('sentiment-input').value.trim();
    const outBox = document.getElementById('sentiment-output');
    if (!text) {
        alert("Enter a sentence first to analyze its sentiment.");
        return;
    }

    const positiveWords = ["good", "great", "awesome", "excited", "love", "happy", "helpful", "amazing", "smart", "clear", "best", "fun", "cool"];
    const negativeWords = ["bad", "terrible", "hate", "sad", "confusing", "hard", "wrong", "worst", "boring", "fake", "biased", "scary", "error"];

    const tokens = text.toLowerCase().replace(/[^a-z\s]/g, "").split(/\s+/);
    let score = 0;
    let matched = [];

    tokens.forEach(word => {
        if (positiveWords.includes(word)) { score++; matched.push('+' + word); }
        if (negativeWords.includes(word)) { score--; matched.push('-' + word); }
    });

    let label = "Neutral 😐";
    let color = "var(--text-main)";
    if (score > 0) { label = "Positive 😊"; color = "var(--success)"; }
    if (score < 0) { label = "Negative 😟"; color = "var(--warning)"; }

    if (!userProgress.bonuses.sentiment) {
        userProgress.bonuses.sentiment = true;
        userProgress.xp += 10;
        updateDashboardMetrics();
    }

    outBox.style.display = "block";
    outBox.innerHTML = `
        <div style="font-size: 1.1rem; font-weight: bold; color: ${color}; margin-bottom: 0.5rem;">Detected Tone: ${label} (Net Score: ${score})</div>
        <div style="font-size: 0.85rem; color: var(--text-muted);"><strong>Tokens Scanned:</strong> ${tokens.length} words | <strong>Signal Keywords:</strong> ${matched.length ? matched.join(", ") : "None detected"}</div>
    `;
}

function runPromptTester() {
    const text = document.getElementById('prompt-input').value.trim();
    const outBox = document.getElementById('prompt-output');
    if (!text) {
        alert("Enter a prompt to test its structure.");
        return;
    }

    const lower = text.toLowerCase();
    const hasRole = /act as|you are|tutor|teacher|expert|coach/.test(lower);
    const hasTask = /explain|quiz|summarize|compare|help me understand|outline/.test(lower);
    const hasBounds = /without|do not|don't|grade|bullet|short|analogy|step/.test(lower);

    const criteriaMet = [hasRole, hasTask, hasBounds].filter(Boolean).length;
    let rating = "Needs Detail (1/3)";
    let color = "var(--warning)";
    if (criteriaMet === 2) { rating = "Good Structure (2/3)"; color = "var(--accent)"; }
    if (criteriaMet === 3) { rating = "Master Prompt (3/3)"; color = "var(--success)"; }

    if (!userProgress.bonuses.prompt) {
        userProgress.bonuses.prompt = true;
        userProgress.xp += 10;
        updateDashboardMetrics();
    }

    outBox.style.display = "block";
    outBox.innerHTML = `
        <div style="font-size: 1.1rem; font-weight: bold; color: ${color}; margin-bottom: 0.5rem;">Prompt Rating: ${rating}</div>
        <ul style="list-style: none; font-size: 0.85rem; color: var(--text-muted);">
            <li>${hasRole ? "✅" : "❌"} <strong>Role Assigned</strong> (e.g., "Act as a tutor...")</li>
            <li>${hasTask ? "✅" : "❌"} <strong>Clear Learning Task</strong> (e.g., "Explain..." or "Quiz me...")</li>
            <li>${hasBounds ? "✅" : "❌"} <strong>Ethical Boundaries / Format</strong> (e.g., "without giving me answers to copy")</li>
        </ul>
    `;
}

function checkIntegrityScenario(choice) {
    const fb = document.getElementById('integrity-feedback');
    fb.style.display = 'block';
    if (choice === 1) {
        fb.style.backgroundColor = 'rgba(16, 185, 129, 0.15)';
        fb.style.border = '1px solid var(--success)';
        fb.innerHTML = '<strong style="color:var(--success);">✅ Correct!</strong> LLMs frequently hallucinate quotes and page numbers. Verifying against a primary source protects your academic integrity.';
        if (!userProgress.bonuses.integrity) {
            userProgress.bonuses.integrity = true;
            userProgress.xp += 15;
            updateDashboardMetrics();
        }
    } else {
        fb.style.backgroundColor = 'rgba(239, 68, 68, 0.15)';
        fb.style.border = '1px solid var(--danger)';
        fb.innerHTML = '<strong style="color:var(--danger);">❌ Risky Choice:</strong> Never trust AI-generated quotes or page numbers without verifying them in an original historical source.';
    }
}

function renderCareersGrid() {
    const grid = document.getElementById('career-cards-grid');
    grid.innerHTML = '';
    careersData.forEach((c, idx) => {
        const card = document.createElement('div');
        card.className = 'career-card';
        card.id = 'career-card-' + idx;
        card.onclick = () => selectCareer(idx);
        card.innerHTML = `
            <div style="font-size: 2rem; margin-bottom: 0.5rem;">${c.icon}</div>
            <h3 style="color: var(--accent); margin-bottom: 0.35rem;">${c.title}</h3>
            <p style="font-size: 0.9rem; color: var(--text-muted);">${c.tagline}</p>
        `;
        grid.appendChild(card);
    });
}

function selectCareer(idx) {
    document.querySelectorAll('.career-card').forEach(el => el.classList.remove('active-career'));
    document.getElementById('career-card-' + idx).classList.add('active-career');

    const c = careersData[idx];
    const panel = document.getElementById('career-detail-panel');
    panel.style.display = 'block';
    panel.innerHTML = `
        <h3 style="color: var(--accent); font-size: 1.3rem; margin-bottom: 0.5rem;">${c.icon} ${c.title}</h3>
        <p style="margin-bottom: 1rem; color: #cbd5e1;"><strong>What They Do:</strong> ${c.dailyWork}</p>
        <div style="margin-bottom: 0.75rem;">
            <strong>Recommended High School Classes:</strong><br>
            ${c.hsClasses.map(cls => '<span class="tag-pill">' + cls + '</span>').join('')}
        </div>
        <div>
            <strong>Core Technical &amp; Human Skills:</strong><br>
            ${c.skills.map(sk => '<span class="tag-pill" style="border-color: var(--success); color: var(--success);">' + sk + '</span>').join('')}
        </div>
    `;

    if (!userProgress.bonuses.career) {
        userProgress.bonuses.career = true;
        userProgress.xp += 15;
        updateDashboardMetrics();
    }
}