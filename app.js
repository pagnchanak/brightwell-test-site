(function () {
  "use strict";

  // ---------- Text shown on the site (edit here to change wording) ----------
  var UI = {
    siteName: { en: "Learn Free", km: "រៀនដោយឥតគិតថ្លៃ" },
    home: { en: "Home", km: "ទំព័រដើម" },
    courses: { en: "Courses", km: "មុខវិជ្ជា" },
    otherLang: { en: "ខ្មែរ", km: "English" },
    heroTitle: { en: "Learn anything. Free for every student.", km: "រៀនអ្វីក៏បាន។ ឥតគិតថ្លៃសម្រាប់សិស្សគ្រប់រូប។" },
    heroText: {
      en: "Short lessons and quizzes in Khmer and English. No sign-up needed. Your progress is saved on your device.",
      km: "មេរៀនខ្លីៗ និងសំណួរតេស្តជាភាសាខ្មែរ និងអង់គ្លេស។ មិនបាច់ចុះឈ្មោះទេ។ ការរីកចម្រើនរបស់អ្នកត្រូវបានរក្សាទុកក្នុងឧបករណ៍របស់អ្នក។"
    },
    start: { en: "Start learning", km: "ចាប់ផ្ដើមរៀន" },
    allCourses: { en: "All courses", km: "មុខវិជ្ជាទាំងអស់" },
    lessons: { en: "lessons", km: "មេរៀន" },
    completed: { en: "completed", km: "បានបញ្ចប់" },
    done: { en: "✓ Done", km: "✓ រួចរាល់" },
    quiz: { en: "Quick quiz", km: "សំណួរតេស្តខ្លី" },
    check: { en: "Check answers", km: "ពិនិត្យចម្លើយ" },
    score: { en: "Your score", km: "ពិន្ទុរបស់អ្នក" },
    passed: { en: "Great job! Lesson completed.", km: "ពូកែណាស់! អ្នកបានបញ្ចប់មេរៀន។" },
    retry: { en: "Try again to complete this lesson.", km: "សូមព្យាយាមម្ដងទៀតដើម្បីបញ្ចប់មេរៀននេះ។" },
    prev: { en: "← Previous", km: "← មុន" },
    next: { en: "Next →", km: "បន្ទាប់ →" },
    back: { en: "← Back to course", km: "← ត្រឡប់ទៅមុខវិជ្ជា" },
    notFound: { en: "Page not found.", km: "រកមិនឃើញទំព័រ។" },
    footer: { en: "Free education for everyone.", km: "ការអប់រំឥតគិតថ្លៃសម្រាប់ទាំងអស់គ្នា។" },
    login: { en: "Log in", km: "ចូលគណនី" },
    logout: { en: "Log out", km: "ចាកចេញ" },
    signup: { en: "Sign up", km: "ចុះឈ្មោះ" },
    email: { en: "Email", km: "អ៊ីមែល" },
    password: { en: "Password", km: "ពាក្យសម្ងាត់" },
    password6: { en: "At least 6 characters", km: "យ៉ាងតិច ៦ តួអក្សរ" },
    noAccount: { en: "No account yet?", km: "មិនទាន់មានគណនី?" },
    haveAccount: { en: "Already have an account?", km: "មានគណនីរួចហើយ?" },
    authOff: { en: "Login is not set up yet. Please try again later.", km: "ប្រព័ន្ធចូលគណនីមិនទាន់រួចរាល់ទេ។ សូមព្យាយាមម្ដងទៀតនៅពេលក្រោយ។" },
    wait: { en: "Please wait…", km: "សូមរង់ចាំ…" },
    checkEmail: { en: "Account created! Check your email and click the link to confirm, then log in.", km: "បានបង្កើតគណនី! សូមពិនិត្យអ៊ីមែលរបស់អ្នក ហើយចុចតំណដើម្បីបញ្ជាក់ រួចចូលគណនី។" },
    badLogin: { en: "Wrong email or password, or email not confirmed yet.", km: "អ៊ីមែល ឬពាក្យសម្ងាត់មិនត្រឹមត្រូវ ឬអ៊ីមែលមិនទាន់បានបញ្ជាក់។" },
    authError: { en: "Something went wrong. Please try again.", km: "មានបញ្ហាអ្វីមួយ។ សូមព្យាយាមម្ដងទៀត។" },
    loggedInAs: { en: "You are logged in as", km: "អ្នកបានចូលគណនីជា" },
    welcomeBack: { en: "Welcome back!", km: "សូមស្វាគមន៍ការត្រឡប់មកវិញ!" },
    profile: { en: "My profile", km: "ប្រវត្តិរូបខ្ញុំ" },
    profileInfo: { en: "Personal information", km: "ព័ត៌មានផ្ទាល់ខ្លួន" },
    fullName: { en: "Full name", km: "ឈ្មោះពេញ" },
    gender: { en: "Gender", km: "ភេទ" },
    genderF: { en: "Female", km: "ស្រី" },
    genderM: { en: "Male", km: "ប្រុស" },
    genderNone: { en: "Prefer not to say", km: "មិនចង់បញ្ជាក់" },
    birthDate: { en: "Date of birth", km: "ថ្ងៃខែឆ្នាំកំណើត" },
    school: { en: "School", km: "សាលារៀន" },
    grade: { en: "Grade", km: "ថ្នាក់ទី" },
    province: { en: "Province / city", km: "ខេត្ត / ក្រុង" },
    save: { en: "Save", km: "រក្សាទុក" },
    saved: { en: "Saved!", km: "បានរក្សាទុក!" },
    changePassword: { en: "Change password", km: "ប្ដូរពាក្យសម្ងាត់" },
    newPassword: { en: "New password", km: "ពាក្យសម្ងាត់ថ្មី" },
    passwordChanged: { en: "Password changed!", km: "បានប្ដូរពាក្យសម្ងាត់!" },
    needLogin: { en: "Please log in to see your profile.", km: "សូមចូលគណនីដើម្បីមើលប្រវត្តិរូបរបស់អ្នក។" }
  };

  var app = document.getElementById("app");
  var lang = "km";
  try { lang = localStorage.getItem("lang") || "km"; } catch (e) {}

  function t(obj) { return obj[lang] || obj.en; }

  // ---------- Progress (saved in the visitor's browser) ----------
  function getProgress() {
    try { return JSON.parse(localStorage.getItem("progress") || "{}"); } catch (e) { return {}; }
  }
  function markDone(courseId, lessonId) {
    var p = getProgress();
    p[courseId + "/" + lessonId] = true;
    try { localStorage.setItem("progress", JSON.stringify(p)); } catch (e) {}
  }
  function isDone(courseId, lessonId) { return !!getProgress()[courseId + "/" + lessonId]; }
  function courseDone(c) {
    return c.lessons.filter(function (l) { return isDone(c.id, l.id); }).length;
  }

  function findCourse(id) { return window.COURSES.filter(function (c) { return c.id === id; })[0]; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (m) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[m]; }); }

  // ---------- Pages ----------
  function courseCard(c) {
    var done = courseDone(c), total = c.lessons.length;
    return '<a class="card" href="#/course/' + c.id + '">' +
      '<span class="emoji">' + c.emoji + '</span>' +
      '<h3>' + esc(t(c.title)) + '</h3>' +
      '<p>' + esc(t(c.description)) + '</p>' +
      '<span class="meta">' + total + ' ' + t(UI.lessons) + ' · ' + done + '/' + total + ' ' + t(UI.completed) + '</span>' +
      '<div class="progress"><div style="width:' + (done / total * 100) + '%"></div></div></a>';
  }

  function renderHome() {
    app.innerHTML =
      '<section class="hero"><img class="hero-logo" src="logo.png" alt="Brightwell School" width="140" height="140"><h1>' + t(UI.heroTitle) + '</h1><p>' + t(UI.heroText) + '</p>' +
      '<a class="btn" href="#/courses">' + t(UI.start) + '</a></section>' +
      '<div class="grid">' + window.COURSES.map(courseCard).join("") + '</div>';
  }

  function renderCourses() {
    app.innerHTML = '<h1>' + t(UI.allCourses) + '</h1><div class="grid">' + window.COURSES.map(courseCard).join("") + '</div>';
  }

  function renderCourse(id) {
    var c = findCourse(id);
    if (!c) return renderNotFound();
    app.innerHTML =
      '<div class="crumbs"><a href="#/courses">' + t(UI.courses) + '</a></div>' +
      '<h1>' + c.emoji + ' ' + esc(t(c.title)) + '</h1><p>' + esc(t(c.description)) + '</p>' +
      '<ul class="lessons">' + c.lessons.map(function (l, i) {
        return '<li><a href="#/lesson/' + c.id + '/' + l.id + '"><span>' + (i + 1) + '. ' + esc(t(l.title)) + '</span>' +
          (isDone(c.id, l.id) ? '<span class="done">' + t(UI.done) + '</span>' : '') + '</a></li>';
      }).join("") + '</ul>';
  }

  function renderLesson(cid, lid) {
    var c = findCourse(cid);
    if (!c) return renderNotFound();
    var idx = -1;
    c.lessons.forEach(function (l, i) { if (l.id === lid) idx = i; });
    if (idx < 0) return renderNotFound();
    var l = c.lessons[idx];
    var prev = c.lessons[idx - 1], next = c.lessons[idx + 1];

    var html = '<div class="crumbs"><a href="#/course/' + c.id + '">' + esc(t(c.title)) + '</a></div>' +
      '<article class="lesson-body"><h1>' + esc(t(l.title)) + '</h1>' +
      (l.video ? '<div class="video"><iframe src="https://www.youtube-nocookie.com/embed/' + encodeURIComponent(l.video) + '" allowfullscreen loading="lazy"></iframe></div>' : '') +
      t(l.content) + '</article>';

    if (l.quiz && l.quiz.length) {
      html += '<section class="quiz"><h2>' + t(UI.quiz) + '</h2><form id="quiz">' +
        l.quiz.map(function (q, qi) {
          return '<div class="q"><p>' + (qi + 1) + '. ' + esc(t(q.q)) + '</p>' +
            q.options.map(function (o, oi) {
              return '<label class="opt"><input type="radio" name="q' + qi + '" value="' + oi + '"> ' + esc(t(o)) + '</label>';
            }).join("") + '</div>';
        }).join("") +
        '<button class="btn" type="submit">' + t(UI.check) + '</button><div class="result" id="result"></div></form></section>';
    }

    html += '<div class="nav-row">' +
      (prev ? '<a class="btn secondary" href="#/lesson/' + c.id + '/' + prev.id + '">' + t(UI.prev) + '</a>' : '<a class="btn secondary" href="#/course/' + c.id + '">' + t(UI.back) + '</a>') +
      (next ? '<a class="btn" href="#/lesson/' + c.id + '/' + next.id + '">' + t(UI.next) + '</a>' : '<a class="btn" href="#/course/' + c.id + '">' + t(UI.back) + '</a>') +
      '</div>';
    app.innerHTML = html;

    var form = document.getElementById("quiz");
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var correct = 0;
        l.quiz.forEach(function (q, qi) {
          var opts = form.querySelectorAll('input[name="q' + qi + '"]');
          opts.forEach(function (inp, oi) {
            var label = inp.parentNode;
            label.classList.remove("right", "wrong");
            if (inp.checked && oi === q.answer) label.classList.add("right");
            else if (inp.checked) label.classList.add("wrong");
            if (inp.checked && oi === q.answer) correct++;
          });
        });
        var pass = correct === l.quiz.length;
        if (pass) markDone(c.id, l.id);
        document.getElementById("result").textContent =
          t(UI.score) + ": " + correct + "/" + l.quiz.length + " — " + (pass ? t(UI.passed) : t(UI.retry));
      });
    } else {
      markDone(c.id, l.id);
    }
    window.scrollTo(0, 0);
  }

  function renderNotFound() { app.innerHTML = '<p>' + t(UI.notFound) + '</p>'; }

  // ---------- Login / sign up (Supabase) ----------
  var sb = null, user = null;
  if (window.supabase && window.SUPABASE_URL && window.SUPABASE_ANON_KEY) {
    try { sb = window.supabase.createClient(window.SUPABASE_URL, window.SUPABASE_ANON_KEY); } catch (e) { sb = null; }
  }

  function renderAuth(mode) {
    var isLogin = mode === "login";
    if (user) {
      app.innerHTML = '<section class="auth"><h1>' + t(UI.welcomeBack) + '</h1><p>' + t(UI.loggedInAs) + ' <b>' + esc(user.email) + '</b></p>' +
        '<a class="btn" href="#/courses">' + t(UI.start) + '</a></section>';
      return;
    }
    app.innerHTML = '<section class="auth"><h1>' + t(isLogin ? UI.login : UI.signup) + '</h1>' +
      (sb ? '' : '<p class="msg bad">' + t(UI.authOff) + '</p>') +
      '<form id="auth-form">' +
      '<label>' + t(UI.email) + '<input type="email" name="email" required autocomplete="email"></label>' +
      '<label>' + t(UI.password) + '<input type="password" name="password" required minlength="6" autocomplete="' + (isLogin ? "current-password" : "new-password") + '"' + (isLogin ? '' : ' placeholder="' + t(UI.password6) + '"') + '></label>' +
      '<button class="btn" type="submit"' + (sb ? '' : ' disabled') + '>' + t(isLogin ? UI.login : UI.signup) + '</button>' +
      '<div class="msg" id="auth-msg" role="status"></div></form>' +
      '<p class="switch">' + t(isLogin ? UI.noAccount : UI.haveAccount) + ' <a href="#/' + (isLogin ? "signup" : "login") + '">' + t(isLogin ? UI.signup : UI.login) + '</a></p></section>';
    var form = document.getElementById("auth-form"), msg = document.getElementById("auth-msg");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!sb) return;
      var email = form.email.value.trim(), password = form.password.value;
      msg.className = "msg"; msg.textContent = t(UI.wait);
      var req = isLogin ? sb.auth.signInWithPassword({ email: email, password: password })
                        : sb.auth.signUp({ email: email, password: password });
      req.then(function (r) {
        if (r.error) {
          msg.className = "msg bad";
          msg.textContent = isLogin && /invalid|confirm/i.test(r.error.message) ? t(UI.badLogin) : r.error.message || t(UI.authError);
        } else if (!isLogin && !r.data.session) {
          msg.className = "msg ok"; msg.textContent = t(UI.checkEmail); form.reset();
        } else {
          location.hash = "#/courses";
        }
      }).catch(function () { msg.className = "msg bad"; msg.textContent = t(UI.authError); });
    });
  }

  function renderProfile() {
    if (!user) {
      app.innerHTML = '<section class="auth"><p>' + t(UI.needLogin) + '</p><a class="btn" href="#/login">' + t(UI.login) + '</a></section>';
      return;
    }
    var m = user.user_metadata || {};
    function field(name, label, type, extra) {
      return '<label>' + t(label) + '<input type="' + (type || "text") + '" name="' + name + '" value="' + esc(m[name] || "") + '" maxlength="100"' + (extra || "") + '></label>';
    }
    app.innerHTML = '<section class="auth wide"><h1>' + t(UI.profile) + '</h1>' +
      '<p class="muted">' + esc(user.email) + '</p>' +
      '<form id="profile-form"><h2>' + t(UI.profileInfo) + '</h2>' +
      field("full_name", UI.fullName, "text", ' autocomplete="name"') +
      '<label>' + t(UI.gender) + '<select name="gender">' +
        [["", UI.genderNone], ["female", UI.genderF], ["male", UI.genderM]].map(function (o) {
          return '<option value="' + o[0] + '"' + (m.gender === o[0] ? " selected" : "") + '>' + t(o[1]) + '</option>';
        }).join("") + '</select></label>' +
      field("birth_date", UI.birthDate, "date", ' autocomplete="bday"') +
      field("school", UI.school) + field("grade", UI.grade) + field("province", UI.province) +
      '<button class="btn" type="submit">' + t(UI.save) + '</button><div class="msg" id="profile-msg" role="status"></div></form>' +
      '<form id="pw-form"><h2>' + t(UI.changePassword) + '</h2>' +
      '<label>' + t(UI.newPassword) + '<input type="password" name="password" required minlength="6" autocomplete="new-password" placeholder="' + t(UI.password6) + '"></label>' +
      '<button class="btn" type="submit">' + t(UI.changePassword) + '</button><div class="msg" id="pw-msg" role="status"></div></form></section>';

    function wire(formId, msgId, doneText, build) {
      var f = document.getElementById(formId), msg = document.getElementById(msgId);
      f.addEventListener("submit", function (e) {
        e.preventDefault();
        msg.className = "msg"; msg.textContent = t(UI.wait);
        sb.auth.updateUser(build(f)).then(function (r) {
          if (r.error) { msg.className = "msg bad"; msg.textContent = r.error.message || t(UI.authError); return; }
          if (r.data && r.data.user) user = r.data.user;
          msg.className = "msg ok"; msg.textContent = t(doneText);
          if (formId === "pw-form") f.reset();
        }).catch(function () { msg.className = "msg bad"; msg.textContent = t(UI.authError); });
      });
    }
    wire("profile-form", "profile-msg", UI.saved, function (f) {
      var d = {};
      ["full_name", "gender", "birth_date", "school", "grade", "province"].forEach(function (k) { d[k] = f[k].value.trim(); });
      return { data: d };
    });
    wire("pw-form", "pw-msg", UI.passwordChanged, function (f) { return { password: f.password.value }; });
  }

  function applyAuthNav() {
    var a = document.getElementById("nav-auth");
    a.textContent = t(user ? UI.logout : UI.login);
    a.setAttribute("href", user ? "#/logout" : "#/login");
    var pn = document.getElementById("nav-profile");
    pn.textContent = t(UI.profile);
    pn.hidden = !user;
  }

  if (sb) {
    sb.auth.getSession().then(function (r) { user = r.data.session ? r.data.session.user : null; applyAuthNav(); if (location.hash === "#/profile") route(); });
    sb.auth.onAuthStateChange(function (_e, session) {
      var was = !!user;
      user = session ? session.user : null;
      applyAuthNav();
      if (was !== !!user && /^#\/(login|signup|profile)?$/.test(location.hash || "#/login")) route();
    });
  }

  // ---------- Router ----------
  function route() {
    var parts = (location.hash || "#/").slice(2).split("/");
    if (parts[0] === "" ) renderHome();
    else if (parts[0] === "courses") renderCourses();
    else if (parts[0] === "course") renderCourse(parts[1]);
    else if (parts[0] === "lesson") renderLesson(parts[1], parts[2]);
    else if (parts[0] === "login" || parts[0] === "signup") renderAuth(parts[0]);
    else if (parts[0] === "profile") renderProfile();
    else if (parts[0] === "logout") {
      (sb ? sb.auth.signOut() : Promise.resolve()).then(function () { user = null; applyAuthNav(); location.hash = "#/"; });
    }
    else renderNotFound();
  }

  function applyChrome() {
    document.documentElement.lang = lang;
    document.title = t(UI.siteName);
    document.getElementById("brand").innerHTML = '<img class="logo" src="logo.png" alt="Brightwell School" width="36" height="36"> <span>' + esc(t(UI.siteName)) + '</span>';
    document.getElementById("nav-home").textContent = t(UI.home);
    document.getElementById("nav-courses").textContent = t(UI.courses);
    document.getElementById("lang-toggle").textContent = t(UI.otherLang);
    applyAuthNav();
    document.getElementById("footer-text").textContent = "© " + new Date().getFullYear() + " " + t(UI.siteName) + " · " + t(UI.footer);
  }

  document.getElementById("lang-toggle").addEventListener("click", function () {
    lang = lang === "km" ? "en" : "km";
    try { localStorage.setItem("lang", lang); } catch (e) {}
    applyChrome();
    route();
  });
  window.addEventListener("hashchange", route);
  applyChrome();
  route();
})();
