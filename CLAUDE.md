# Project: Free online learning platform

## Owner and goals
- The owner is NOT a programmer. Explain steps in plain language, do the technical work yourself, and ask only for decisions or actions that need their GitHub login.
- Goal: a free online learning website for **students**, hosted free on **GitHub Pages** (`https://<username>.github.io/<repo>/`).
- Content: **general knowledge**, in **Khmer and English** (Khmer is the default language, with a toggle).

## Technical decisions (already made)
- Plain static site: HTML, CSS and vanilla JavaScript. **No build step, no Node needed**, so GitHub Pages can serve it straight from the `main` branch root.
- Hash routing (`#/course/...`, `#/lesson/...`) so it works on GitHub Pages without server settings.
- Student progress is stored in the browser's localStorage. There is no login yet.
- Course content lives in one file, `data/courses.js`. Every text has `en` and `km` versions. Quizzes are multiple choice, and a lesson counts as done only when all answers are right.
- Fonts: Noto Sans Khmer and Inter (Google Fonts). Layout is mobile-first, with automatic dark mode.

## Files
- `index.html`: page shell
- `style.css`: styling
- `app.js`: router, translations (the `UI` object), progress, quiz logic
- `data/courses.js`: courses, lessons, quizzes (3 starter courses: Science Basics, Discover Cambodia, Study Skills)

## Status
- The first version of all files is written but **has not been viewed in a browser yet**. Open it, test the language toggle, the lessons, the quizzes and the progress bars, then fix any bugs.
- The Khmer text was written by an AI and **needs review by a native speaker**.
- Not yet published. Next step: enable GitHub Pages (Settings → Pages → Deploy from branch → `main` / root) and give the owner the live link.

## Possible later features (do not build unless asked)
- Supabase (free tier) for login and cross-device progress
- More courses and YouTube videos (`video` field per lesson)
- Certificates, a search box, an admin page
- A custom domain
