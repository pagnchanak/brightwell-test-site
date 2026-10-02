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
    footer: { en: "Free education for everyone.", km: "ការអប់រំឥតគិតថ្លៃសម្រាប់ទាំងអស់គ្នា។" }
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
      '<section class="hero"><h1>' + t(UI.heroTitle) + '</h1><p>' + t(UI.heroText) + '</p>' +
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

  // ---------- Router ----------
  function route() {
    var parts = (location.hash || "#/").slice(2).split("/");
    if (parts[0] === "" ) renderHome();
    else if (parts[0] === "courses") renderCourses();
    else if (parts[0] === "course") renderCourse(parts[1]);
    else if (parts[0] === "lesson") renderLesson(parts[1], parts[2]);
    else renderNotFound();
  }

  function applyChrome() {
    document.documentElement.lang = lang;
    document.title = t(UI.siteName);
    document.getElementById("brand").textContent = "🎓 " + t(UI.siteName);
    document.getElementById("nav-home").textContent = t(UI.home);
    document.getElementById("nav-courses").textContent = t(UI.courses);
    document.getElementById("lang-toggle").textContent = t(UI.otherLang);
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
