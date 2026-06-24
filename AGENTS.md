# AGENTS

- **Project layout** – two top‑level folders: `frontend/` (Next.js app using App Router) and `backend/` (stand‑alone Express server with SQLite). An agent must know the separation; code in one folder does not affect the other.

- **Common commands**
  - `cd frontend && npm install && npm run dev` – start the Next.js dev server (http://localhost:3000).
  - `cd backend && npm install && npm run dev` – start the Express dev server (default port 5000/3001).
  - `npm run build` (run inside `frontend`) – production build of the Next.js app.
  - `npm run lint` (if ESLint is configured) – lint the codebase.
  - **Test shortcuts**:
    - `npm run test` (root) – runs all tests (frontend + backend).
    - `cd frontend && npm run test` – only frontend tests.
    - `cd backend && npm run test` – only backend tests.
    - `npm run test:ci` – single‑run test suite for CI.

- **Environment variables** – use `NEXT_PUBLIC_API_URL` in the frontend to point at the backend; ensure ports do not clash (frontend 3000, backend 5000/3001).

- **Database** – SQLite file is created automatically; migrations are plain SQL scripts under `backend/database/`.

- **Testing stack**
  - Frontend: Jest + React Testing Library; optional `next-router-mock` for Server Components.
  - Backend: Jest + SuperTest; tests run against an in‑memory SQLite instance.
  - E2E: Cypress (or Playwright) launched with `npx cypress open`.

- **CI behaviour** – on each push the CI runs ESLint/Prettier, all tests, and generates a coverage report (`coverage/lcov-report`).

- **Contribution flow** – fork, create a branch `feature/<name>`, commit, push, and open a PR.
