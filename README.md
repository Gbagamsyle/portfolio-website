# Ogaba Silas — React + Tailwind Portfolio

This folder contains a Vite + React + Tailwind project that reproduces the provided HTML portfolio exactly using React components and Tailwind-compatible CSS.

Quick start:

1. cd react-portfolio
2. npm install
3. npm run dev

Notes:
- The original CSS from your HTML was ported into `src/index.css` and preserved.
- All interactivity (custom cursor, reveal, counters, testimonials) lives in `src/App.jsx` using React hooks.

Contact form setup:
- Create a Resend account and add a verified sending domain, then update the `from` address in `api/contact.js`.
- Add `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, and `CONTACT_EMAIL` to the Vercel project environment variables.
- Redeploy after adding the variables. Local development can use the same variables in a `.env.local` file.
