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
- Create a Resend account and add a verified sending domain.
- In Netlify, add `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, and `CONTACT_EMAIL` under Site configuration > Environment variables.
- `RESEND_FROM_EMAIL` must be an email address on the verified Resend domain, for example `hello@your-domain.com`. Do not enter your website URL here.
- `CONTACT_EMAIL` is the inbox that receives inquiries.
- Redeploy after adding the variables. The form submits to the Netlify Function at `/.netlify/functions/contact`.
- For local Netlify development, copy `.env.example` to `.env` and replace the placeholder values, then run `npx netlify dev`.
