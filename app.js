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

const evaluationCategories = [
  {
    title: "Knowledge of Subject Matter",
    indicators: [
      "My teacher explains the lesson clearly and answers our questions accurately.",
      "My teacher shows a deep understanding of the subject being taught.",
      "My teacher relates the lesson to real-life situations and practical examples.",
      "My teacher uses updated, correct, and helpful learning materials."
    ]
  },
  {
    title: "Teaching Techniques",
    indicators: [
      "My teacher uses a variety of fun and engaging activities to help us learn.",
      "My teacher explains difficult concepts in a way that is easy to understand.",
      "My teacher gives clear instructions before starting individual or group work.",
      "My teacher checks if we understand the lesson before moving to a new topic."
    ]
  },
  {
    title: "Communication Skills",
    indicators: [
      "My teacher speaks clearly, audibly, and uses appropriate language.",
      "My teacher encourages students to ask questions and express their ideas freely.",
      "My teacher provides constructive feedback on our quizzes, tasks, and projects.",
      "My teacher listens carefully when students are talking or sharing thoughts."
    ]
  },
  {
    title: "Classroom Management",
    indicators: [
      "My teacher starts and ends the class on time and uses class time wisely.",
      "My teacher maintains order and discipline without being overly harsh.",
      "My teacher treats all students fairly, equitably, and without favoritism.",
      "My teacher ensures that the classroom environment is safe and conducive to learning."
    ]
  },
  {
    title: "Teacher's Personality",
    indicators: [
      "My teacher is approachable, patient, and willing to help students after or during class.",
      "My teacher is respectful, polite, and treats students with kindness.",
      "My teacher comes to class with enthusiasm and a positive attitude.",
      "My teacher serves as a good role model in character, appearance, and behavior."
    ]
  }
];

const criteria = evaluationCategories.flatMap(
  category =>
    category.indicators.map(
      indicator => `${category.title}: ${indicator}`
    )
);

/* =========================================================
   INDIVIDUAL ACCOUNT CREDENTIALS
   MANAGEMENT ACCOUNT REMOVED
   ========================================================= */

const credentials = {

  /* =======================================================
     TEACHERS
     ======================================================= */

  dean: {
    role: "teacher",
    teacherId: "dean",
    user: "Jara@youngji.com",
    pass: "teacher123"
  },

  mazy: {
    role: "teacher",
    teacherId: "mazy",
    user: "Reyes@youngji.com",
    pass: "teacher123"
  },

  rian: {
    role: "teacher",
    teacherId: "rian",
    user: "Magro@youngji.com",
    pass: "teacher123"
  },

  herlyn: {
    role: "teacher",
    teacherId: "herlyn",
    user: "Arao@youngji.com",
    pass: "teacher123"
  },

  shanley: {
    role: "teacher",
    teacherId: "shanley",
    user: "Marquez@youngji.com",
    pass: "teacher123"
  },

  mia: {
    role: "teacher",
    teacherId: "mia",
    user: "Dellomas@youngji.com",
    pass: "teacher123"
  },

  jamea: {
    role: "teacher",
    teacherId: "jamea",
    user: "Andaya@youngji.com",
    pass: "teacher123"
  },

  zhyra: {
    role: "teacher",
    teacherId: "zhyra",
    user: "Penus@youngji.com",
    pass: "teacher123"
  },

  andrew: {
    role: "teacher",
    teacherId: "andrew",
    user: "Cantero@youngji.com",
    pass: "teacher123"
  },

  kim: {
    role: "teacher",
    teacherId: "kim",
    user: "K.Fombuena@youngji.com",
    pass: "teacher123"
  },

  carl: {
    role: "teacher",
    teacherId: "carl",
    user: "Bello@youngji.com",
    pass: "teacher123"
  },

  luiza: {
    role: "teacher",
    teacherId: "luiza",
    user: "Ferrer@youngji.com",
    pass: "teacher123"
  },

  angel: {
    role: "teacher",
    teacherId: "angel",
    user: "A.Fombuena@youngji.com",
    pass: "teacher123"
  },


  /* =======================================================
     ADMIN
     ======================================================= */

  admin: {
    role: "admin",
    user: "admin",
    pass: "admin123"
  }

};


/* =========================================================
   APPLICATION STATE
   ========================================================= */

const STORAGE_KEY =
  "youngji_teacher_evaluations_v7";

let session = null;

let loginRole = "teacher";

const app =
  document.getElementById("app");

const modal =
  document.getElementById("loginModal");

const loginForm =
  document.getElementById("loginForm");

const loginError =
  document.getElementById("loginError");


/* =========================================================
   CUSTOM STYLES
   ========================================================= */

function addCustomStyles() {

  if (
    document.getElementById(
      "youngjiCustomStyles"
    )
  ) {
    return;
  }


  const style =
    document.createElement("style");

  style.id =
    "youngjiCustomStyles";


  style.textContent = `

    /* =========================================
       GREEN BACK BUTTON
       ========================================= */

    .back-green-btn {

      background: #198754 !important;
      color: #ffffff !important;

      border: none !important;

      padding: 8px 15px !important;

      font-size: 13px !important;

      border-radius: 7px !important;

      cursor: pointer;

      margin-bottom: 18px;

    }

    .back-green-btn:hover {

      background: #146c43 !important;

    }


    /* =========================================
       LEAVE COMMENT BUTTON
       ========================================= */

    .leave-comment-btn {

      background: #198754 !important;
      color: white !important;

      border: none !important;

      padding: 9px 14px !important;

      border-radius: 7px !important;

      cursor: pointer;

      margin-left: 6px;

    }

    .leave-comment-btn:hover {

      background: #146c43 !important;

    }


    /* =========================================
       MANAGEMENT COMMENT BOX
       ========================================= */

    .management-comment-form {

      margin: 25px 0;

      padding: 22px;

      border: 1px solid #d9d9d9;

      border-radius: 12px;

      background: #ffffff;

    }


    .management-comment-form textarea {

      display: block;

      width: 100% !important;

      min-width: 100% !important;

      max-width: 100% !important;

      box-sizing: border-box;

      resize: vertical;

      min-height: 120px;

      padding: 12px;

      margin-top: 8px;

      border: 1px solid #ccc;

      border-radius: 8px;

      font-family: inherit;

      font-size: 14px;

    }


    /* =========================================
       GREEN FILE BUTTON
       ========================================= */

    .green-file-label {

      display: inline-block;

      background: #198754;

      color: white;

      padding: 9px 14px;

      border-radius: 7px;

      cursor: pointer;

      font-weight: 600;

      margin-top: 8px;

    }


    .green-file-label:hover {

      background: #146c43;

    }


    .green-file-input {

      display: none;

    }


    .selected-file-name {

      display: inline-block;

      margin-left: 10px;

      color: #555;

      font-size: 13px;

    }


    /* =========================================
       MANAGEMENT COMMENT SECTIONS
       ========================================= */

    .management-comment-title {

      margin-top: 28px;

      margin-bottom: 10px;

    }


    /* =========================================
       ADMIN ACTION BUTTONS
       ========================================= */

    .admin-action-buttons {

      display: flex;

      flex-wrap: wrap;

      gap: 7px;

      align-items: center;

    }


    /* =========================================
       COMMENT BOX
       ========================================= */

    .comment textarea {

      width: 100%;

      box-sizing: border-box;

    }


    /* =========================================
       ATTACHMENT
       ========================================= */

    .comment-attachment {

      margin-top: 12px;

      padding: 10px;

      border: 1px solid #ddd;

      border-radius: 8px;

      background: #fafafa;

    }


    .comment-attachment a {

      color: #198754;

      font-weight: 600;

      text-decoration: none;

    }


    .comment-attachment a:hover {

      text-decoration: underline;

    }

  `;


  document.head.appendChild(style);

}


/* =========================================================
   STORAGE
   ========================================================= */

function seed() {

  if (
    localStorage.getItem(
      STORAGE_KEY
    ) !== null
  ) {

    return;

  }


  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({})
  );

}


function getData() {

  seed();


  try {

    return JSON.parse(
      localStorage.getItem(
        STORAGE_KEY
      )
    ) || {};

  }

  catch {

    return {};

  }

}


function saveData(data) {

  try {

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(data)
    );

    return true;

  }

  catch (error) {

    console.error(
      "Unable to save data:",
      error
    );


    alert(
      "Unable to save the information. Your browser storage may be full."
    );


    return false;

  }

}


function evaluations(id) {

  return getData()[id] || [];

}


/* =========================================================
   RATING FUNCTIONS
   ========================================================= */

function ratedEvaluations(id) {

  return evaluations(id).filter(

    e =>

      Array.isArray(
        e.ratings
      )

      &&

      e.ratings.length ===
      criteria.length

      &&

      e.ratings.every(

        r =>

          Number(r) >= 1 &&
          Number(r) <= 4

      )

  );

}


function average(id) {

  const list =
    ratedEvaluations(id);


  if (!list.length) {

    return "0.0";

  }


  const all =
    list.flatMap(
      x => x.ratings || []
    );


  if (!all.length) {

    return "0.0";

  }


  return (

    all.reduce(

      (a, b) =>
        a + Number(b),

      0

    ) / all.length

  ).toFixed(1);

}


function criterionAverage(
  id,
  i
) {

  const list =
    ratedEvaluations(id);


  if (!list.length) {

    return "0.0";

  }


  const values =
    list

      .map(

        e =>

          Number(
            e.ratings?.[i] || 0
          )

      )

      .filter(

        x =>
          x >= 1 &&
          x <= 4

      );


  if (!values.length) {

    return "0.0";

  }


  return (

    values.reduce(
      (a, b) => a + b,
      0
    ) / values.length

  ).toFixed(1);

}


/* =========================================================
   HELPERS
   ========================================================= */

function getInitials(name) {

  return name

    .split(" ")

    .map(
      w => w[0]
    )

    .filter(Boolean)

    .join("")

    .substring(0, 2)

    .toUpperCase();

}


function avatar(
  t,
  cls = "avatar"
) {

  return t.photo

    ?

    `

      <div class="${cls}">

        <img
          src="${encodeURI(t.photo)}"
          alt="${escapeHtml(t.name)}"
        >

      </div>

    `

    :

    `

      <div class="${cls}">

        ${getInitials(t.name)}

      </div>

    `;

}


function footer() {

  return `

    <div class="footer">

      © 2026 Youngji International School.
      All rights reserved.

    </div>

  `;

}


function setActive(view) {

  document

    .querySelectorAll(
      ".side-link"
    )

    .forEach(
      b => {

        b.classList.toggle(
          "active",
          b.dataset.view === view
        );

      }
    );

}


function escapeHtml(value) {

  return String(
    value ?? ""
  )

    .replace(
      /&/g,
      "&amp;"
    )

    .replace(
      /</g,
      "&lt;"
    )

    .replace(
      />/g,
      "&gt;"
    )

    .replace(
      /"/g,
      "&quot;"
    )

    .replace(
      /'/g,
      "&#039;"
    );

}


/* =========================================================
   ATTACHMENT HTML
   ========================================================= */

function attachmentHTML(
  attachment
) {

  if (

    !attachment ||

    !attachment.name ||

    !attachment.data

  ) {

    return "";

  }


  return `

    <div class="comment-attachment">

      <strong>

        📎 Attached File / Document

      </strong>

      <br><br>

      <a
        href="${attachment.data}"
        download="${escapeHtml(
          attachment.name
        )}"
        target="_blank"
        rel="noopener"
      >

        ${escapeHtml(
          attachment.name
        )}

      </a>

    </div>

  `;

}


/* =========================================================
   TEACHER CARD
   ========================================================= */

function renderCard(t) {

  const count =
    ratedEvaluations(t.id).length;


  return `

    <article class="teacher-card">

      ${avatar(t)}


      <div>

        <div class="teacher-name">

          ${escapeHtml(t.name)}

        </div>


        <div class="teacher-meta">

          ${escapeHtml(t.subject)}

          <br>

          Department:

          <strong>

            ${escapeHtml(
              t.department
            )}

          </strong>

        </div>


        <div class="rating">

          ★
          ${average(t.id)}
          / 4

          &nbsp; • &nbsp;

          ${count}

          evaluation${count !== 1 ? "s" : ""}

        </div>

      </div>


      <button
        class="view-btn"
        onclick="openProfile('${t.id}')"
      >

        View Profile

      </button>

    </article>

  `;

}


/* =========================================================
   HOME
   ========================================================= */

function renderHome() {

  setActive("home");


  /*
    Hide public evaluation button
    when ADMIN is logged in.
  */

  const canEvaluate =
    !session ||
    session.role !== "admin";


  app.innerHTML = `

    <div class="container">

      <section class="hero">

        <div class="hero-copy">

          <div class="eyebrow">

            YOUNGJI INTERNATIONAL SCHOOL

          </div>


          <h1>

            Welcome to the<br>
            Evaluation System

          </h1>


          <div class="underline"></div>


          <p>

            Your feedback helps us maintain
            excellence in education.

          </p>


          <p>

            Please select a teacher to view
            their profile and evaluations.

          </p>

        </div>

      </section>


      <h2 class="section-title">

        Teachers Portal

      </h2>


      <section class="teacher-grid">

        ${teachers
          .map(renderCard)
          .join("")}

      </section>


      ${
        canEvaluate

          ?

          `

            <div class="evaluate-area">

              <button
                class="evaluate-btn"
                onclick="startEvaluation()"
              >

                ★ Evaluate a Teacher

              </button>


              <p class="evaluate-note">

                Students and parents can submit
                an evaluation without creating
                an account.

              </p>

            </div>

          `

          :

          ""

      }


      <div class="info">

        <div class="info-icon">
          i
        </div>


        <div>

          Your evaluation is anonymous to
          teachers.

          The administrator can review
          submitted comments and ratings.

        </div>

      </div>


      ${footer()}

    </div>

  `;

}


/* =========================================================
   PUBLIC TEACHER PROFILE
   ========================================================= */

function openProfile(id) {

  const t =
    teachers.find(
      x => x.id === id
    );


  if (!t) return;


  setActive(null);


  app.innerHTML = `

    <div class="container">

      <div class="page-card">


        <button
          class="back-green-btn"
          onclick="renderHome()"
        >

          ← Back

        </button>


        <div class="profile-head">

          ${avatar(t)}


          <div>

            <div class="eyebrow">

              TEACHER PROFILE

            </div>


            <h1>

              ${escapeHtml(t.name)}

            </h1>


            <div class="teacher-meta">

              ${escapeHtml(t.subject)}

              <br>

              Department:

              <strong>

                ${escapeHtml(
                  t.department
                )}

              </strong>

            </div>


            <div class="rating">

              ★
              ${average(t.id)}
              / 4

            </div>

          </div>

        </div>


        <div class="stats">


          <div class="stat">

            <b>
              ${average(t.id)}
            </b>

            <span>
              Average rating
            </span>

          </div>


          <div class="stat">

            <b>
              ${ratedEvaluations(t.id).length}
            </b>

            <span>
              Rated Evaluations
            </span>

          </div>


        </div>


        <div class="login-note">

          Student, parent, and management
          names and contact details are not
          shown on public teacher profiles.

        </div>

      </div>


      ${footer()}

    </div>

  `;

}


/* =========================================================
   EVALUATION FORM
   ========================================================= */

function startEvaluation(
  selectedTeacherId = ""
) {

  /*
    ADMIN CANNOT SUBMIT
    NORMAL EVALUATIONS.
  */

  if (
    session &&
    session.role === "admin"
  ) {

    alert(
      "Admin accounts can only view and manage evaluations."
    );

    renderAdmin();

    return;

  }


  setActive(null);


  app.innerHTML = `

    <div class="container">

      <div class="page-card evaluation-card">


        <button
          class="back-green-btn"
          onclick="renderHome()"
        >

          ← Back

        </button>


        <div class="eyebrow">

          EVALUATION

        </div>


        <h1>

          Evaluate a Teacher

        </h1>


        <p>

          Please provide evaluation details
          and ratings below.

        </p>


        <form
          id="evaluationForm"
          class="evaluation-form"
        >


          <!-- EVALUATOR INFORMATION -->

          <div class="student-details">

            <h2>

              Evaluator Information

            </h2>


            <p class="field-note">

              These details are collected with
              the evaluation.

            </p>


            <div class="student-fields">


              <label>

                Evaluator Type


                <select
                  id="evaluatorType"
                  required
                >

                  <option value="">

                    Select evaluator type

                  </option>


                  <option value="Student">

                    Student

                  </option>


                  <option value="Parent">

                    Parent

                  </option>

                </select>

              </label>


              <label>

                Name


                <input
                  id="studentName"
                  required
                  maxlength="100"
                  placeholder="Your full name"
                >

              </label>


              <label>

                Section / Department


                <input
                  id="studentSection"
                  required
                  maxlength="60"
                  placeholder="e.g. BSCS-1A"
                >

              </label>


              <label>

                Email


                <input
                  id="studentEmail"
                  type="email"
                  required
                  maxlength="120"
                  placeholder="you@example.com"
                >

              </label>


            </div>

          </div>


          <!-- TEACHER -->

          <label>

            Teacher


            <select
              id="teacherSelect"
              required
            >

              <option value="">

                Select a teacher

              </option>


              ${teachers

                .map(

                  t => `

                    <option
                      value="${t.id}"
                      ${
                        t.id ===
                        selectedTeacherId
                          ? "selected"
                          : ""
                      }
                    >

                      ${escapeHtml(
                        t.name
                      )}

                      —

                      ${escapeHtml(
                        t.subject
                      )}

                    </option>

                  `

                )

                .join("")}

            </select>

          </label>


          <!-- RATINGS -->

          <div class="student-details">

            <h2>

              Rating

            </h2>


            ${criteria

              .map(

                (c, i) => `

                  <div class="evaluation-row">


                    <div>

                      <strong>

                        ${i + 1}. ${escapeHtml(c)}

                      </strong>


                      <small>

                        4 = Strongly Agree,
                        3 = Agree,
                        2 = Disagree,
                        1 = Strongly Disagree

                      </small>

                    </div>


                    <div
                      class="rating-choices"
                      role="radiogroup"
                      aria-label="Rating for indicator ${i + 1}"
                    >

                      ${[
                        [4, "Strongly Agree"],
                        [3, "Agree"],
                        [2, "Disagree"],
                        [1, "Strongly Disagree"]
                      ]

                        .map(

                          ([value, label]) => `

                            <label class="rating-choice">

                              <input
                                type="radio"
                                class="criterion-input"
                                name="criterion-${i}"
                                value="${value}"
                                required
                              >

                              <span>
                                ${value} - ${label}
                              </span>

                            </label>

                          `

                        )

                        .join("")}

                    </div>

                  </div>

                `

              )

              .join("")}

          </div>


          <!-- COMMENT -->

          <label>

            Comment


            <textarea
              id="studentComment"
              rows="5"
              maxlength="1000"
              placeholder="Write your feedback..."
              required
            ></textarea>

          </label>


          <button
            class="primary-btn"
            type="submit"
          >

            Submit Evaluation

          </button>


          <div class="danger-note">

            Your evaluation is visible to the
            administrator.

            Teacher-facing views do not display
            evaluator personal information.

          </div>


        </form>

      </div>


      ${footer()}

    </div>

  `;


  document

    .getElementById(
      "evaluationForm"
    )

    .addEventListener(
      "submit",
      submitEvaluation
    );

}


/* =========================================================
   SUBMIT EVALUATION
   ========================================================= */

function submitEvaluation(e) {

  e.preventDefault();


  if (
    session &&
    session.role === "admin"
  ) {

    alert(
      "Admin accounts cannot submit evaluations."
    );

    renderAdmin();

    return;

  }


  const teacherId =
    document.getElementById(
      "teacherSelect"
    ).value;


  const evaluatorType =
    document.getElementById(
      "evaluatorType"
    ).value;


  const ratings =
    criteria.map(

      (_, i) => {

        const selected =
          document.querySelector(
            `input[name="criterion-${i}"]:checked`
          );


        return selected
          ? Number(selected.value)
          : 0;

      }

    );


  if (!evaluatorType) {

    alert(
      "Please select the evaluator type."
    );

    return;

  }


  if (

    !teacherId ||

    ratings.length !==
    criteria.length ||

    ratings.some(
      x =>
        x < 1 ||
        x > 4
    )

  ) {

    alert(
      "Please complete all rating fields."
    );

    return;

  }


  const name =
    document
      .getElementById(
        "studentName"
      )
      .value
      .trim();


  const section =
    document
      .getElementById(
        "studentSection"
      )
      .value
      .trim();


  const email =
    document
      .getElementById(
        "studentEmail"
      )
      .value
      .trim();


  const comment =
    document
      .getElementById(
        "studentComment"
      )
      .value
      .trim();


  if (
    !name ||
    !section ||
    !email ||
    !comment
  ) {

    alert(
      "Please complete all evaluator information and the comment."
    );

    return;

  }


  const data =
    getData();


  data[teacherId] =
    data[teacherId] || [];


  data[teacherId].push({

    evaluatorType:
      evaluatorType,

    name:
      name,

    section:
      section,

    email:
      email,

    ratings:
      ratings,

    comment:
      comment,

    date:
      new Date()
        .toISOString()
        .slice(0, 10),

    attachment:
      null

  });


  if (
    !saveData(data)
  ) {

    return;

  }


  app.innerHTML = `

    <div class="container">

      <div class="page-card">

        <div class="success">

          <strong>

            Evaluation submitted successfully.

          </strong>


          <br>


          Thank you for helping improve
          teaching and learning.

        </div>


        <button
          class="primary-btn"
          onclick="renderHome()"
        >

          Return

        </button>

      </div>


      ${footer()}

    </div>

  `;

}


/* =========================================================
   TEACHER COMMENTS
   ========================================================= */

function renderTeacherComments(
  list,
  type
) {

  if (!list.length) {

    return `

      <div class="comment">

        <p>

          No
          ${escapeHtml(
            type.toLowerCase()
          )}
          comments yet.

        </p>

      </div>

    `;

  }


  return list

    .map(

      e => {

        const label =

          type === "Management"

            ? "Management Comment"

            : type + " Comment";


        return `

          <div class="comment">


            <div>

              <strong>

                ${escapeHtml(label)}

              </strong>

            </div>


            <small>

              ${escapeHtml(
                e.date || ""
              )}

            </small>


            <div class="comment-actions">


              <div>

                ${escapeHtml(
                  e.comment || ""
                )}

              </div>


              ${
                type ===
                "Management"

                  ? attachmentHTML(
                      e.attachment
                    )

                  : ""

              }


            </div>


          </div>

        `;

      }

    )

    .join("");

}


/* =========================================================
   TEACHER PORTAL
   ONLY LOGGED-IN TEACHER DATA
   ========================================================= */

function renderTeacherPortal() {

  if (

    !session ||

    session.role !== "teacher" ||

    !session.teacherId

  ) {

    openLogin("teacher");

    return;

  }


  const teacherId =
    session.teacherId;


  const t =
    teachers.find(
      x =>
        x.id === teacherId
    );


  if (!t) {

    alert(
      "Teacher account is not connected to a teacher profile."
    );

    logout();

    return;

  }


  setActive(null);


  const list =
    evaluations(teacherId);


  const students =
    list.filter(

      e =>

        (
          e.evaluatorType ||
          "Student"
        ) === "Student"

    );


  const parents =
    list.filter(

      e =>
        e.evaluatorType ===
        "Parent"

    );


  const management =
    list.filter(

      e =>
        e.evaluatorType ===
        "Management"

    );


  app.innerHTML = `

    <div class="container">

      <div class="page-card">


        <button
          class="view-btn logout"
          onclick="logout()"
        >

          Log out

        </button>


        <div class="eyebrow">

          TEACHER PORTAL

        </div>


        <div class="profile-head">

          ${avatar(t)}


          <div>

            <h1>

              ${escapeHtml(t.name)}

            </h1>


            <div class="teacher-meta">

              ${escapeHtml(t.subject)}

              <br>

              Department:

              <strong>

                ${escapeHtml(
                  t.department
                )}

              </strong>

            </div>

          </div>

        </div>


        <div class="stats">


          <div class="stat">

            <b>

              ${average(teacherId)}

            </b>


            <span>

              Average Rating

            </span>

          </div>


          <div class="stat">

            <b>

              ${ratedEvaluations(
                teacherId
              ).length}

            </b>


            <span>

              Rated Evaluations

            </span>

          </div>


          <div class="stat">

            <b>

              ${students.length}

            </b>


            <span>

              Student

            </span>

          </div>


          <div class="stat">

            <b>

              ${parents.length}

            </b>


            <span>

              Parent

            </span>

          </div>


          <div class="stat">

            <b>

              ${management.length}

            </b>


            <span>

              Management

            </span>

          </div>


        </div>


        <!-- STUDENT COMMENTS -->

        <h2>

          Student Comments

        </h2>


        ${renderTeacherComments(
          students,
          "Student"
        )}


        <!-- PARENT COMMENTS -->

        <h2>

          Parent Comments

        </h2>


        ${renderTeacherComments(
          parents,
          "Parent"
        )}


        <!-- MANAGEMENT COMMENTS -->

        <h2>

          Management Comments

        </h2>


        ${renderTeacherComments(
          management,
          "Management"
        )}


        <div class="login-note">

          <strong>
            Privacy Notice
          </strong>

          <br><br>

          Student and parent names,
          sections/departments, and email
          addresses are hidden from the
          Teacher Portal.

          <br><br>

          You can only see evaluations and
          comments connected to your own
          teacher account.

        </div>


      </div>


      ${footer()}

    </div>

  `;

}


/* =========================================================
   ADMIN PORTAL
   ========================================================= */

function renderAdmin() {

  if (

    !session ||

    session.role !== "admin"

  ) {

    openLogin("admin");

    return;

  }


  setActive(null);


  app.innerHTML = `

    <div class="container">

      <div class="page-card">


        <button
          class="view-btn logout"
          onclick="logout()"
        >

          Log out

        </button>


        <div class="eyebrow">

          ADMIN PORTAL

        </div>


        <h1>

          Evaluation Administration

        </h1>


        <p>

          Admin can view teacher ratings,
          student and parent information,
          comments, management comments,
          and attached documents.

        </p>


        <!-- CLEAR HISTORY -->

        <div
          style="margin-bottom:20px;"
        >

          <button
            class="view-btn"
            style="
              background-color:#dc3545;
              color:white;
            "
            onclick="clearAllEvaluations()"
          >

            🗑 Clear All Evaluation History

          </button>

        </div>


        <table class="admin-table">

          <thead>

            <tr>

              <th>
                Teacher
              </th>

              <th>
                Department
              </th>

              <th>
                Average
              </th>

              <th>
                Evaluations
              </th>

              <th>
                Action
              </th>

            </tr>

          </thead>


          <tbody>

            ${teachers

              .map(

                t => `

                  <tr>


                    <td>

                      <strong>

                        ${escapeHtml(
                          t.name
                        )}

                      </strong>

                    </td>


                    <td>

                      ${escapeHtml(
                        t.department
                      )}

                    </td>


                    <td>

                      ★
                      ${average(t.id)}
                      / 4

                    </td>


                    <td>

                      ${ratedEvaluations(
                        t.id
                      ).length}

                    </td>


                    <td>

                      <div class="admin-action-buttons">


                        <!-- VIEW DETAILS -->

                        <button
                          class="view-btn"
                          onclick="
                            adminDetail(
                              '${t.id}'
                            )
                          "
                        >

                          View details

                        </button>


                        <!-- LEAVE COMMENT -->

                        <button
                          class="leave-comment-btn"
                          onclick="
                            adminDetail(
                              '${t.id}',
                              true
                            )
                          "
                        >

                          Leave a comment

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


/* =========================================================
   ADMIN TEACHER DETAILS
   ========================================================= */

function adminDetail(
  id,
  showCommentForm = false
) {

  if (

    !session ||

    session.role !== "admin"

  ) {

    openLogin("admin");

    return;

  }


  const t =
    teachers.find(
      x =>
        x.id === id
    );


  if (!t) return;


  const list =
    evaluations(id);


  const students =
    list.filter(

      e =>

        (
          e.evaluatorType ||
          "Student"
        ) === "Student"

    );


  const parents =
    list.filter(

      e =>
        e.evaluatorType ===
        "Parent"

    );


  const management =
    list.filter(

      e =>
        e.evaluatorType ===
        "Management"

    );


  setActive(null);


  app.innerHTML = `

    <div class="container">

      <div class="page-card">


        <!-- GREEN SMALL BACK BUTTON -->

        <button
          class="back-green-btn"
          onclick="renderAdmin()"
        >

          ← Back

        </button>


        <div class="eyebrow">

          ADMIN • TEACHER DETAILS

        </div>


        <div class="profile-head">

          ${avatar(t)}


          <div>

            <h1>

              ${escapeHtml(
                t.name
              )}

            </h1>


            <div class="teacher-meta">

              ${escapeHtml(
                t.subject
              )}

              <br>

              Department:

              <strong>

                ${escapeHtml(
                  t.department
                )}

              </strong>

            </div>

          </div>

        </div>


        <div class="stats">


          <div class="stat">

            <b>

              ${average(id)}

            </b>


            <span>

              Average rating

            </span>

          </div>


          <div class="stat">

            <b>

              ${ratedEvaluations(
                id
              ).length}

            </b>


            <span>

              Rated Evaluations

            </span>

          </div>


          <div class="stat">

            <b>

              ${list.length}

            </b>


            <span>

              Total Records

            </span>

          </div>


        </div>


        <!-- ======================================
             MANAGEMENT COMMENT FORM
             ====================================== -->

        ${
          showCommentForm

            ?

            adminManagementCommentForm(id)

            :

            `

              <div
                style="
                  margin:25px 0;
                  padding:15px;
                  border:1px solid #ddd;
                  border-radius:10px;
                "
              >

                <button
                  class="leave-comment-btn"
                  onclick="
                    adminDetail(
                      '${id}',
                      true
                    )
                  "
                >

                  Leave a comment

                </button>

              </div>

            `

        }


        <!-- STUDENT -->

        ${renderAdminSection(
          "Student Evaluations",
          students,
          id
        )}


        <!-- PARENT -->

        ${renderAdminSection(
          "Parent Evaluations",
          parents,
          id
        )}


        <!-- MANAGEMENT -->

        <h2 class="management-comment-title">

          Management Comments

        </h2>


        ${renderAdminSection(
          "",
          management,
          id,
          true
        )}


      </div>


      ${footer()}

    </div>

  `;


  /*
    Automatically move the user
    toward the comment section.
  */

  if (showCommentForm) {

    setTimeout(

      () => {

        const form =
          document.getElementById(
            "adminManagementCommentForm"
          );

        if (form) {

          form.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });

        }

      },

      100

    );

  }

}


/* =========================================================
   ADMIN MANAGEMENT COMMENT FORM
   ========================================================= */

function adminManagementCommentForm(
  teacherId
) {

  return `

    <div
      class="management-comment-form"
      id="adminManagementCommentForm"
    >


      <h2>

        Management Comment

      </h2>


      <p class="field-note">

        Add a management comment regarding
        this teacher's performance.

        The teacher will see this as
        <strong>
          Management Comment
        </strong>.

      </p>


      <form
        onsubmit="
          submitAdminManagementComment(
            event,
            '${teacherId}'
          )
        "
      >


        <!-- ==================================
             FILE ABOVE COMMENT BOX
             ================================== -->

        <label>

          <strong>
            Attach File / Document
          </strong>


          <br>


          <label
            class="green-file-label"
            for="adminManagementAttachment"
          >

            📎 Choose File

          </label>


          <input
            class="green-file-input"
            type="file"
            id="adminManagementAttachment"
            accept="
              .pdf,
              .doc,
              .docx,
              .xls,
              .xlsx,
              .ppt,
              .pptx,
              .txt,
              .jpg,
              .jpeg,
              .png
            "
            onchange="
              showSelectedFile(
                this
              )
            "
          >


          <span
            class="selected-file-name"
            id="selectedFileName"
          >

            No file chosen

          </span>


          <small
            style="
              display:block;
              margin-top:8px;
            "
          >

            Optional. Maximum file size:
            2 MB.

          </small>

        </label>


        <!-- ==================================
             COMMENT BOX
             ================================== -->

        <label
          style="
            display:block;
            margin-top:20px;
          "
        >

          <strong>

            Management Comment

          </strong>


          <textarea
            id="adminManagementComment"
            rows="6"
            maxlength="2000"
            required
            placeholder="Write a comment regarding the teacher's performance..."
          ></textarea>

        </label>


        <button
          type="submit"
          class="primary-btn"
          style="margin-top:15px;"
        >

          Post Management Comment

        </button>


        <button
          type="button"
          class="view-btn"
          style="margin-left:8px;"
          onclick="
            adminDetail(
              '${teacherId}',
              false
            )
          "
        >

          Cancel

        </button>


      </form>

    </div>

  `;

}


/* =========================================================
   SHOW SELECTED FILE
   ========================================================= */

function showSelectedFile(
  input
) {

  const output =
    document.getElementById(
      "selectedFileName"
    );


  if (!output) return;


  if (
    input &&
    input.files &&
    input.files.length
  ) {

    output.textContent =
      input.files[0].name;

  }

  else {

    output.textContent =
      "No file chosen";

  }

}


/* =========================================================
   SUBMIT ADMIN MANAGEMENT COMMENT
   ========================================================= */

function submitAdminManagementComment(
  e,
  teacherId
) {

  e.preventDefault();


  /*
    ADMIN ONLY
  */

  if (

    !session ||

    session.role !== "admin"

  ) {

    alert(
      "Admin access required."
    );

    return;

  }


  const teacher =
    teachers.find(
      t =>
        t.id === teacherId
    );


  if (!teacher) {

    alert(
      "Teacher not found."
    );

    return;

  }


  const commentElement =
    document.getElementById(
      "adminManagementComment"
    );


  const comment =
    commentElement
      ? commentElement.value.trim()
      : "";


  if (!comment) {

    alert(
      "Please enter a management comment."
    );

    return;

  }


  const fileInput =
    document.getElementById(
      "adminManagementAttachment"
    );


  const file =
    fileInput &&
    fileInput.files &&
    fileInput.files.length

      ? fileInput.files[0]

      : null;


  /*
    FUNCTION TO SAVE COMMENT
  */

  function saveComment(
    attachment = null
  ) {

    const data =
      getData();


    data[teacherId] =
      data[teacherId] || [];


    data[teacherId].push({

      evaluatorType:
        "Management",

      name:
        "Management",

      section:
        "Management",

      email:
        "",

      ratings:
        [],

      comment:
        comment,

      date:
        new Date()
          .toISOString()
          .slice(0, 10),

      attachment:
        attachment

    });


    if (
      saveData(data)
    ) {

      alert(
        "Management comment posted successfully."
      );


      adminDetail(
        teacherId,
        false
      );

    }

  }


  /*
    NO FILE
  */

  if (!file) {

    saveComment();

    return;

  }


  /*
    FILE SIZE
  */

  const maxSize =
    2 * 1024 * 1024;


  if (
    file.size > maxSize
  ) {

    alert(
      "The attached file is too large. Please choose a file smaller than 2 MB."
    );

    return;

  }


  /*
    ALLOWED FILE TYPES
  */

  const allowedExtensions = [

    "pdf",
    "doc",
    "docx",
    "xls",
    "xlsx",
    "ppt",
    "pptx",
    "txt",
    "jpg",
    "jpeg",
    "png"

  ];


  const fileName =
    file.name.toLowerCase();


  const extension =
    fileName.includes(".")
      ? fileName
          .split(".")
          .pop()
      : "";


  if (
    !allowedExtensions.includes(
      extension
    )
  ) {

    alert(
      "This file type is not allowed."
    );

    return;

  }


  /*
    READ FILE
  */

  const reader =
    new FileReader();


  reader.onload =
    function() {

      saveComment({

        name:
          file.name,

        type:
          file.type,

        size:
          file.size,

        data:
          reader.result

      });

    };


  reader.onerror =
    function() {

      alert(
        "Unable to read the attached file."
      );

    };


  reader.readAsDataURL(
    file
  );

}


/* =========================================================
   ADMIN EVALUATION SECTION
   ========================================================= */

function renderAdminSection(
  title,
  list,
  teacherId,
  managementSection = false
) {

  return `

    ${
      title

        ?

        `

          <h2>

            ${escapeHtml(title)}

          </h2>

        `

        :

        ""

    }


    ${
      list.length

        ?

        list

          .map(

            e => {

              const all =
                evaluations(
                  teacherId
                );


              const originalIndex =
                all.indexOf(e);


              const ratingAvg =

                Array.isArray(e.ratings) &&
                e.ratings.length ===
                criteria.length &&
                e.ratings.every(
                  rating =>
                    Number(rating) >= 1 &&
                    Number(rating) <= 4
                )

                  ?

                    (

                      e.ratings.reduce(

                        (a, b) =>
                          a +
                          Number(b),

                        0

                      ) /
                      e.ratings.length

                    ).toFixed(1)

                  :

                    "N/A";


              const displayType =

                e.evaluatorType ===
                "Management"

                  ?

                    "Management Comment"

                  :

                    (
                      e.evaluatorType ||
                      "Student"
                    );


              return `

                <div class="comment">


                  <!-- TYPE -->

                  <div>

                    <strong>

                      ${escapeHtml(
                        displayType
                      )}

                    </strong>

                  </div>


                  <!-- IDENTITY -->

                  <div>

                    <strong>
                      Name:
                    </strong>

                    ${escapeHtml(
                      e.name || ""
                    )}


                    &nbsp;


                    <strong>
                      Section / Department:
                    </strong>

                    ${escapeHtml(
                      e.section || ""
                    )}


                    &nbsp;


                    <strong>
                      Email:
                    </strong>

                    ${escapeHtml(
                      e.email || ""
                    )}

                  </div>


                  <!-- DATE / RATING -->

                  <small>

                    ${escapeHtml(
                      e.date || ""
                    )}

                    •


                    ${
                      e.evaluatorType ===
                      "Management"

                        ?

                        "Management Comment"

                        :

                        `

                          Rating:
                          ${ratingAvg}${
                            ratingAvg !==
                            "N/A"

                              ? "/ 4"

                              : ""
                          }

                        `

                    }

                  </small>


                  <!-- COMMENT -->

                  <div
                    class="comment-actions"
                  >


                    <div>

                      ${escapeHtml(
                        e.comment || ""
                      )}

                    </div>


                    <!-- ATTACHMENT -->

                    ${attachmentHTML(
                      e.attachment
                    )}


                    <!-- DELETE -->

                    <button
                      class="delete-comment-btn"
                      onclick="
                        deleteEvaluation(
                          '${teacherId}',
                          ${originalIndex}
                        )
                      "
                    >

                      Delete

                    </button>


                  </div>


                </div>

              `;

            }

          )

          .join("")


        :

        `

          <p>

            No evaluations or comments.

          </p>

        `

    }

  `;

}


/* =========================================================
   DELETE EVALUATION
   ========================================================= */

function deleteEvaluation(
  id,
  index
) {

  if (

    !session ||

    session.role !== "admin"

  ) {

    alert(
      "Admin access required."
    );

    return;

  }


  if (

    !confirm(
      "Delete this evaluation/comment permanently from this browser?"
    )

  ) {

    return;

  }


  const data =
    getData();


  if (

    data[id] &&

    index >= 0 &&

    index < data[id].length

  ) {

    data[id].splice(
      index,
      1
    );


    saveData(data);

  }


  adminDetail(id);

}


/* =========================================================
   CLEAR ALL EVALUATIONS
   ========================================================= */

function clearAllEvaluations() {

  if (

    !session ||

    session.role !== "admin"

  ) {

    alert(
      "Admin access required."
    );

    return;

  }


  if (

    confirm(
      "Are you sure you want to permanently clear ALL evaluation history?"
    )

  ) {

    saveData({});

    renderAdmin();

  }

}


/* =========================================================
   LOGIN
   MANAGEMENT LOGIN REMOVED
   ========================================================= */

function openLogin(
  role
) {

  /*
    MANAGEMENT NO LONGER EXISTS.
  */

  if (
    role === "management"
  ) {

    role = "admin";

  }


  loginRole =
    role;


  const eyebrow =
    document.getElementById(
      "loginEyebrow"
    );


  const title =
    document.getElementById(
      "loginTitle"
    );


  const description =
    document.getElementById(
      "loginDescription"
    );


  const demo =
    document.getElementById(
      "demoCredentials"
    );


  if (
    role === "admin"
  ) {

    eyebrow.textContent =
      "ADMIN PORTAL";


    title.textContent =
      "Admin Login";


    description.textContent =
      "Sign in to view student information, ratings, comments, management comments, and manage evaluations.";


    demo.innerHTML = `

      Demo account:

      <strong>
        admin
      </strong>

      /

      <strong>
        admin123
      </strong>

    `;

  }


  else {

    eyebrow.textContent =
      "TEACHERS PORTAL";


    title.textContent =
      "Teacher Login";


    description.textContent =
      "Use your individual teacher account to access your own teacher portal.";


    demo.innerHTML = `

      Each teacher has their own
      username and password.

    `;

  }


  loginError.textContent =
    "";


  loginForm.reset();


  modal.classList.remove(
    "hidden"
  );


  document
    .getElementById(
      "username"
    )
    .focus();

}


/* =========================================================
   CLOSE LOGIN
   ========================================================= */

function closeLogin() {

  modal.classList.add(
    "hidden"
  );

}


/* =========================================================
   LOGOUT
   ========================================================= */

function logout() {

  session =
    null;


  renderHome();

}


/* =========================================================
   LOGIN PROCESS
   ========================================================= */

loginForm.addEventListener(
  "submit",
  e => {

    e.preventDefault();


    const username =
      document
        .getElementById(
          "username"
        )
        .value
        .trim();


    const password =
      document
        .getElementById(
          "password"
        )
        .value;


    const account =
      Object.values(
        credentials
      ).find(

        c =>

          String(
            c.user
          ).toLowerCase() ===
          username.toLowerCase()

          &&

          c.pass ===
          password

      );


    if (!account) {

      loginError.textContent =
        "Invalid username or password.";

      return;

    }


    /*
      ROLE PROTECTION
    */

    if (

      loginRole === "teacher" &&

      account.role !== "teacher"

    ) {

      loginError.textContent =
        "This account is not a teacher account.";

      return;

    }


    if (

      loginRole === "admin" &&

      account.role !== "admin"

    ) {

      loginError.textContent =
        "This account is not an administrator account.";

      return;

    }


    /*
      CREATE SESSION
    */

    session = {

      role:
        account.role,

      teacherId:
        account.teacherId ||
        null,

      username:
        account.user

    };


    closeLogin();


    /*
      REDIRECT
    */

    if (
      account.role === "teacher"
    ) {

      renderTeacherPortal();

    }


    else if (
      account.role === "admin"
    ) {

      renderAdmin();

    }

  }
);


/* =========================================================
   LOGIN MODAL EVENTS
   ========================================================= */

document

  .getElementById(
    "closeModal"
  )

  .addEventListener(
    "click",
    closeLogin
  );


modal.addEventListener(
  "click",
  e => {

    if (
      e.target === modal
    ) {

      closeLogin();

    }

  }
);


/* =========================================================
   NAVIGATION BUTTONS
   ========================================================= */

document

  .getElementById(
    "teacherPortalBtn"
  )

  .addEventListener(
    "click",
    () =>
      openLogin(
        "teacher"
      )
  );


document

  .getElementById(
    "adminBtn"
  )

  .addEventListener(
    "click",
    () =>
      openLogin(
        "admin"
      )
  );


/* =========================================================
   REMOVE MANAGEMENT BUTTON
   =========================================================

   This removes the Management button if it
   still exists in index.html.
   ========================================================= */

function removeManagementButton() {

  const managementBtn =
    document.getElementById(
      "managementBtn"
    );


  if (managementBtn) {

    managementBtn.remove();

  }


  /*
    Extra protection in case the button
    exists without the expected ID.
  */

  document

    .querySelectorAll(
      "button"
    )

    .forEach(
      button => {

        const text =
          button.textContent
            .trim()
            .toLowerCase();


        if (
          text === "management"
        ) {

          button.remove();

        }

      }
    );

}


/* =========================================================
   HOME BUTTON
   ========================================================= */

const homeBtn =
  document.querySelector(
    ".home-btn"
  );


if (homeBtn) {

  homeBtn.addEventListener(
    "click",
    renderHome
  );

}


/* =========================================================
   SIDE NAVIGATION
   ========================================================= */

document

  .querySelectorAll(
    ".side-link"
  )

  .forEach(
    b => {

      b.addEventListener(
        "click",
        () => {

          if (
            b.dataset.view ===
            "home"
          ) {

            renderHome();

          }

          else {

            setActive(
              "contact"
            );


            app.innerHTML = `

              <div class="container">

                <div class="page-card">


                  <div class="eyebrow">

                    CONTACT US

                  </div>


                  <h1>

                    School Administration

                  </h1>


                  <p>

                    For questions about
                    the evaluation system,
                    please contact the
                    school administration.

                  </p>


                  <p>

                    <strong>
                      Email:
                    </strong>

                    schoolyoungji@gmail.com

                  </p>


                </div>


                ${footer()}

              </div>

            `;

          }

        }

      );

    }

  );


/* =========================================================
   START APPLICATION
   ========================================================= */

seed();


/*
  Add custom CSS.
*/

addCustomStyles();


/*
  Remove old Management button.
*/

removeManagementButton();


/*
  Start Home.
*/

renderHome();


/* =========================================================
   END OF SCRIPT
   ============================== */
