const teachers = [
  {
    id: "dean",
    name: "Dean Daniel Jara",
    subject: "Computer Science Teacher",
    department: "Science Club/ SSG Adviser",
    photo: "assets/images/tr-dean.jpg"
  },
  {
    id: "mazy",
    name: "Mazelyn Reyes",
    subject: "HELE/ TLE/ Computer",
    department: "Teacher Guidance",
    photo: "assets/images/tr-mazy.jpg"
  },
  {
    id: "rian",
    name: "Rian Air Magro",
    subject: "MAPEH/ LCS",
    department: "Performance Arts Club (Sing/Dance)",
    photo: "assets/images/tr-rian-air.png"
  },
  {
    id: "herlyn",
    name: "Herlyn Arao",
    subject: "Kindergarten",
    department: "Sports Coordinator",
    photo: "assets/images/tr-herlyn.jpg"
  },
  {
    id: "shanley",
    name: "Shanley Marquez",
    subject: "Grade 1 (Self-Contained)",
    department: "Performance Arts Club (Acting)",
    photo: "assets/images/tr-shanley.jpg"
  },
  {
    id: "mia",
    name: "Mia Dellomas",
    subject: "Grade 2 (Self-Contained)",
    department: "School Publication",
    photo: "assets/images/tr-mia.png"
  },
  {
    id: "jamea",
    name: "Jamea Lou Andaya",
    subject: "Grade 3 (Self-Contained)",
    department: "Teacher Librarian",
    photo: "assets/images/tr-jamea.png"
  },
  {
    id: "zhyra",
    name: "Zhyra Marie M. Penus",
    subject: "Social Studies",
    department: "Utility Housekeeping",
    photo: "assets/images/tr-zhyra.jpg"
  },
  {
    id: "andrew",
    name: "Andrew M. Cantero",
    subject: "English/ Values Education",
    department: "English Club",
    photo: "assets/images/tr-andrew.jpg"
  },
  {
    id: "kim",
    name: "Kim Raphaelle",
    subject: "Filipino",
    department: "Music Club",
    photo: "assets/images/tr-kim.jpg"
  },
  {
    id: "carl",
    name: "Kevin Bello",
    subject: "Mathematics",
    department: "Safety and Security",
    photo: "assets/images/tr-carl.jpg"
  },
  {
    id: "luiza",
    name: "Luiza Zandra Ferrer",
    subject: "English",
    department: "Teacher Libararian",
    photo: "assets/images/tr-luiza.jpg"
  },
  {
    id: "angel",
    name: "Angel Fombeuna",
    subject: "Mathematics/ Science/ Pag-aaral ng Kasaysayan",
    department: "Mathematics Club",
    photo: "assets/images/tr-angel.png"
  }
];

const criteria = [
  "How well does the teacher explain the lessons?",
  "How clearly does the teacher communicate instructions and ideas?",
  "How effectively does the teacher encourage students to participate?",
  "How helpful is the teacher when students have questions or need assistance?",
  "How satisfied are you with your overall learning experience with this teacher?"
];

const credentials = {
  teacher: { user: "teachers", pass: "teacher123" },
  admin: { user: "admin", pass: "admin123" }
};

const STORAGE_KEY = "youngji_teacher_evaluations_v5";
let session = null;
let loginRole = "teacher";

const app = document.getElementById("app");
const modal = document.getElementById("loginModal");
const loginForm = document.getElementById("loginForm");
const loginError = document.getElementById("loginError");

function seed() {
  if (localStorage.getItem(STORAGE_KEY) !== null) return;
  // Initialize with empty evaluations object (no seed inputs)
  localStorage.setItem(STORAGE_KEY, JSON.stringify({}));
}

function getData() {
  seed();
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

function saveData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function evaluations(id) {
  return getData()[id] || [];
}

function average(id) {
  const list = evaluations(id);
  if (!list.length) return "0.0";

  const all = list.flatMap(x => x.ratings || []);
  if (!all.length) return "0.0";

  return (all.reduce((a, b) => a + Number(b), 0) / all.length).toFixed(1);
}

function criterionAverage(id, i) {
  const list = evaluations(id);
  if (!list.length) return "0.0";

  return (
    list.reduce((s, e) => s + Number(e.ratings?.[i] || 0), 0) / list.length
  ).toFixed(1);
}

function getInitials(name) {
  return name
    .split(" ")
    .map(w => w[0])
    .filter(Boolean)
    .join("")
    .substring(0, 2)
    .toUpperCase();
}

function avatar(t, cls = "avatar") {
  return t.photo
    ? `<div class="${cls}">
        <img src="${encodeURI(t.photo)}" alt="${escapeHtml(t.name)}">
      </div>`
    : `<div class="${cls}">
        ${getInitials(t.name)}
      </div>`;
}

function footer() {
  return `
    <div class="footer">
      © 2026 Youngji International School. All rights reserved.
    </div>
  `;
}

function setActive(view) {
  document.querySelectorAll(".side-link").forEach(b => {
    b.classList.toggle("active", b.dataset.view === view);
  });
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function renderCard(t) {
  const count = evaluations(t.id).length;
  return `
    <article class="teacher-card">
      ${avatar(t)}
      <div>
        <div class="teacher-name">${escapeHtml(t.name)}</div>
        <div class="teacher-meta">
          ${escapeHtml(t.subject)}<br>
          Department: <strong>${escapeHtml(t.department)}</strong>
        </div>
        <div class="rating">
          ★ ${average(t.id)} / 5 &nbsp; • &nbsp; ${count} evaluation${count !== 1 ? "s" : ""}
        </div>
      </div>
      <button class="view-btn" onclick="openProfile('${t.id}')">
        View Profile
      </button>
    </article>
  `;
}

function renderHome() {
  setActive("home");

  app.innerHTML = `
    <div class="container">
      <section class="hero">
        <div class="hero-copy">
          <div class="eyebrow">YOUNGJI INTERNATIONAL SCHOOL</div>
          <h1>Welcome to the<br>Evaluation System</h1>
          <div class="underline"></div>
          <p>Your feedback helps us maintain excellence in education.</p>
          <p>Please select a teacher to view their profile and evaluations.</p>
        </div>
      </section>

      <h2 class="section-title">Teachers Portal</h2>

      <section class="teacher-grid">
        ${teachers.map(renderCard).join("")}
      </section>

      <div class="evaluate-area">
        <button class="evaluate-btn" onclick="startEvaluation()">
          ★ Evaluate a Teacher
        </button>
        <p class="evaluate-note">
          Students can submit an evaluation without creating a student account.
        </p>
      </div>

      <div class="info">
        <div class="info-icon">i</div>
        <div>
          Your evaluation is anonymous to teachers.
          The administrator can review submitted comments and ratings.
        </div>
      </div>

      ${footer()}
    </div>
  `;
}

function openProfile(id) {
  const t = teachers.find(x => x.id === id);
  if (!t) return;

  setActive(null);

  app.innerHTML = `
    <div class="container">
      <div class="page-card">
        <button class="view-btn" onclick="renderHome()">← Back</button>

        <div class="profile-head">
          ${avatar(t)}
          <div>
            <div class="eyebrow">TEACHER PROFILE</div>
            <h1>${escapeHtml(t.name)}</h1>
            <div class="teacher-meta">
              ${escapeHtml(t.subject)}<br>
              Department: <strong>${escapeHtml(t.department)}</strong>
            </div>
            <div class="rating">★ ${average(t.id)} / 5</div>
          </div>
        </div>

        <div class="stats">
          <div class="stat">
            <b>${average(t.id)}</b>
            <span>Average rating</span>
          </div>
          <div class="stat">
            <b>${evaluations(t.id).length}</b>
            <span>Evaluations</span>
          </div>
        </div>

        <h2>Rating Summary</h2>

        <div class="criteria">
          ${criteria
            .map(
              (c, i) => `
            <div class="criterion">
              <strong>${escapeHtml(c)}</strong>
              <span>★ ${criterionAverage(t.id, i)} / 5</span>
            </div>
          `
            )
            .join("")}
        </div>

        <div class="login-note">
          Student names, sections and email addresses are not shown on public teacher profiles.
        </div>
      </div>

      ${footer()}
    </div>
  `;
}

function startEvaluation(selectedTeacherId = "") {
  setActive(null);

  const backAction = session === "admin" ? "renderAdmin()" : "renderHome()";
  const defaultName = session === "admin" ? "Administrator" : "";
  const defaultSection = session === "admin" ? "Admin Office" : "";
  const defaultEmail = session === "admin" ? "admin@youngji.edu" : "";

  app.innerHTML = `
    <div class="container">
      <div class="page-card evaluation-card">
        <button class="view-btn" onclick="${backAction}">← Back</button>

        <div class="eyebrow">${session === "admin" ? "ADMIN EVALUATION" : "STUDENT EVALUATION"}</div>
        <h1>Evaluate a Teacher</h1>
        <p>
          Please provide evaluation details and ratings below.
        </p>

        <form id="evaluationForm" class="evaluation-form">
          <div class="student-details">
            <h2>Evaluator Information</h2>
            <p class="field-note">
              These details are collected with the evaluation.
            </p>

            <div class="student-fields">
              <label>
                Name
                <input id="studentName" required maxlength="100" value="${escapeHtml(defaultName)}" placeholder="Your full name">
              </label>

              <label>
                Section / Department
                <input id="studentSection" required maxlength="60" value="${escapeHtml(defaultSection)}" placeholder="e.g. BSCS-1A or Admin">
              </label>

              <label>
                Email
                <input id="studentEmail" type="email" required maxlength="120" value="${escapeHtml(defaultEmail)}" placeholder="you@example.com">
              </label>
            </div>
          </div>

          <label>
            Teacher
            <select id="teacherSelect" required>
              <option value="">Select a teacher</option>
              ${teachers
                .map(
                  t => `
                <option value="${t.id}" ${t.id === selectedTeacherId ? "selected" : ""}>
                  ${escapeHtml(t.name)} — ${escapeHtml(t.subject)}
                </option>
              `
                )
                .join("")}
            </select>
          </label>

          <div class="student-details">
            <h2>Rating</h2>
            ${criteria
              .map(
                (c, i) => `
              <div class="evaluation-row">
                <div>
                  <strong>${escapeHtml(c)}</strong>
                  <small>1 = lowest, 5 = highest</small>
                </div>
                <select class="rating-select criterion-input" data-index="${i}" required>
                  <option value="">Choose</option>
                  <option value="1">1 - Poor</option>
                  <option value="2">2 - Fair</option>
                  <option value="3">3 - Good</option>
                  <option value="4">4 - Very Good</option>
                  <option value="5">5 - Excellent</option>
                </select>
              </div>
            `
              )
              .join("")}
          </div>

          <label>
            Comment
            <textarea id="studentComment" rows="5" maxlength="1000" placeholder="Write your feedback..." required></textarea>
          </label>

          <button class="primary-btn" type="submit">Submit Evaluation</button>

          <div class="danger-note">
            Your submission is visible to the administrator for evaluation management.
            Teacher-facing/public views show only anonymous feedback.
          </div>
        </form>
      </div>

      ${footer()}
    </div>
  `;

  document.getElementById("evaluationForm").addEventListener("submit", submitEvaluation);
}

function submitEvaluation(e) {
  e.preventDefault();

  const teacherId = document.getElementById("teacherSelect").value;
  const ratings = [...document.querySelectorAll(".criterion-input")].map(x => Number(x.value));

  if (!teacherId || ratings.some(x => !x)) {
    alert("Please complete all rating fields.");
    return;
  }

  const data = getData();
  data[teacherId] = data[teacherId] || [];

  data[teacherId].push({
    name: document.getElementById("studentName").value.trim(),
    section: document.getElementById("studentSection").value.trim(),
    email: document.getElementById("studentEmail").value.trim(),
    ratings,
    comment: document.getElementById("studentComment").value.trim(),
    date: new Date().toISOString().slice(0, 10)
  });

  saveData(data);

  const returnTarget = session === "admin" ? "renderAdmin()" : "renderHome()";

  app.innerHTML = `
    <div class="container">
      <div class="page-card">
        <div class="success">
          <strong>Evaluation submitted successfully.</strong><br>
          Thank you for helping improve teaching and learning.
        </div>
        <button class="primary-btn" onclick="${returnTarget}">Return</button>
      </div>
      ${footer()}
    </div>
  `;
}

function renderTeacherPortal() {
  if (session !== "teacher") {
    openLogin("teacher");
    return;
  }

  setActive(null);

  app.innerHTML = `
    <div class="container">
      <div class="page-card">
        <button class="view-btn logout" onclick="logout()">Log out</button>

        <div class="eyebrow">TEACHERS PORTAL</div>
        <h1>Teachers Portal</h1>
        <p>
          All teachers use one shared portal account.
          Teachers can view profiles and summarized ratings.
        </p>

        <div class="login-note">
          <strong>Shared teacher account:</strong> teachers / teacher123
        </div>

        <h2>Teacher Profiles</h2>

        <section class="teacher-grid">
          ${teachers.map(renderCard).join("")}
        </section>
      </div>

      ${footer()}
    </div>
  `;
}

function renderAdmin() {
  if (session !== "admin") {
    openLogin("admin");
    return;
  }

  setActive(null);

  app.innerHTML = `
    <div class="container">
      <div class="page-card">
        <button class="view-btn logout" onclick="logout()">Log out</button>

        <div class="eyebrow">ADMIN PORTAL</div>
        <h1>Evaluation Administration</h1>
        <p>
          Admin can see teacher ratings, student information,
          comments, and delete individual comments/evaluations.
        </p>

        <div style="margin-bottom: 20px;">
          <button class="view-btn" style="background-color: #dc3545; color: white;" onclick="clearAllEvaluations()">
            🗑 Clear All Evaluation History
          </button>
        </div>

        <table class="admin-table">
          <thead>
            <tr>
              <th>Teacher</th>
              <th>Department</th>
              <th>Average</th>
              <th>Evaluations</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            ${teachers
              .map(
                t => `
              <tr>
                <td><strong>${escapeHtml(t.name)}</strong></td>
                <td>${escapeHtml(t.department)}</td>
                <td>★ ${average(t.id)} / 5</td>
                <td>${evaluations(t.id).length}</td>
                <td>
                  <div style="display: flex; gap: 8px;">
                    <button class="view-btn" onclick="adminDetail('${t.id}')">
                      View details
                    </button>
                    <button class="view-btn" style="background-color: #28a745; color: white;" onclick="startEvaluation('${t.id}')">
                      Evaluate
                    </button>
                  </div>
                </td>
              </tr>
            `
              )
              .join("")}
          </tbody>
        </table>
      </div>

      ${footer()}
    </div>
  `;
}

function adminDetail(id) {
  if (session !== "admin") {
    openLogin("admin");
    return;
  }

  const t = teachers.find(x => x.id === id);
  if (!t) return;

  const list = evaluations(id);

  setActive(null);

  app.innerHTML = `
    <div class="container">
      <div class="page-card">
        <button class="view-btn" onclick="renderAdmin()">← Back</button>

        <div class="eyebrow">ADMIN • TEACHER DETAILS</div>
        <h1>${escapeHtml(t.name)}</h1>

        <div class="stats">
          <div class="stat">
            <b>${average(id)}</b>
            <span>Average rating</span>
          </div>
          <div class="stat">
            <b>${list.length}</b>
            <span>Evaluations</span>
          </div>
        </div>

        <h2>Student Evaluations</h2>

        ${
          list.length
            ? list
                .map((e, i) => {
                  const ratingAvg =
                    e.ratings && e.ratings.length
                      ? (e.ratings.reduce((a, b) => a + Number(b), 0) / e.ratings.length).toFixed(1)
                      : "0.0";

                  return `
            <div class="comment">
              <div>
                <strong>Student:</strong> ${escapeHtml(e.name)} &nbsp;
                <strong>Section:</strong> ${escapeHtml(e.section)} &nbsp;
                <strong>Email:</strong> ${escapeHtml(e.email)}
              </div>
              <small>
                ${escapeHtml(e.date)} • Rating ${ratingAvg} / 5
              </small>
              <div class="comment-actions">
                <div>${escapeHtml(e.comment)}</div>
                <button class="delete-comment-btn" onclick="deleteEvaluation('${id}',${i})">
                  Delete
                </button>
              </div>
            </div>
          `;
                })
                .join("")
            : `<p>No evaluations.</p>`
        }
      </div>

      ${footer()}
    </div>
  `;
}

function deleteEvaluation(id, index) {
  if (session !== "admin") {
    alert("Admin access required.");
    return;
  }

  if (!confirm("Delete this evaluation/comment permanently from this browser?")) {
    return;
  }

  const data = getData();
  if (data[id]) {
    data[id].splice(index, 1);
    saveData(data);
  }

  adminDetail(id);
}

function clearAllEvaluations() {
  if (session !== "admin") {
    alert("Admin access required.");
    return;
  }

  if (confirm("Are you sure you want to permanently clear ALL evaluation history?")) {
    saveData({});
    renderAdmin();
  }
}

function openLogin(role) {
  loginRole = role;

  document.getElementById("loginEyebrow").textContent =
    role === "admin" ? "ADMIN PORTAL" : "TEACHERS PORTAL";

  document.getElementById("loginTitle").textContent =
    role === "admin" ? "Admin Login" : "Teachers Portal Login";

  document.getElementById("loginDescription").textContent =
    role === "admin"
      ? "Sign in to view student details, ratings, comments, and manage evaluations."
      : "Use the shared teacher account to access the Teachers Portal.";

  document.getElementById("demoCredentials").innerHTML = `Demo account:
    <strong>${credentials[role].user}</strong> /
    <strong>${credentials[role].pass}</strong>`;

  loginError.textContent = "";
  loginForm.reset();
  modal.classList.remove("hidden");
  document.getElementById("username").focus();
}

function closeLogin() {
  modal.classList.add("hidden");
}

function logout() {
  session = null;
  renderHome();
}

loginForm.addEventListener("submit", e => {
  e.preventDefault();

  const c = credentials[loginRole];

  if (
    document.getElementById("username").value === c.user &&
    document.getElementById("password").value === c.pass
  ) {
    session = loginRole;
    closeLogin();
    loginRole === "admin" ? renderAdmin() : renderTeacherPortal();
  } else {
    loginError.textContent = "Invalid username or password.";
  }
});

document.getElementById("closeModal").addEventListener("click", closeLogin);

modal.addEventListener("click", e => {
  if (e.target === modal) {
    closeLogin();
  }
});

document.getElementById("teacherPortalBtn").addEventListener("click", () => openLogin("teacher"));

document.getElementById("adminBtn").addEventListener("click", () => openLogin("admin"));

document.querySelector(".home-btn").addEventListener("click", renderHome);

document.querySelectorAll(".side-link").forEach(b => {
  b.addEventListener("click", () => {
    if (b.dataset.view === "home") {
      renderHome();
    } else {
      setActive("contact");
      app.innerHTML = `
        <div class="container">
          <div class="page-card">
            <div class="eyebrow">CONTACT US</div>
            <h1>School Administration</h1>
            <p>
              For questions about the evaluation system,
              please contact the school administration.
            </p>
            <p>
              <strong>Email:</strong> schoolyoungji@gmail.com
            </p>
          </div>
          ${footer()}
        </div>
      `;
    }
  });
});

seed();
renderHome();