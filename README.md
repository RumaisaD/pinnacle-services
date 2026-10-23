# Pinnacle Handyman Services — Website

A **frontend-only** responsive single-page site (React + TypeScript + Vite). No backend, database, booking system or email sending.

The quote form is a **non-functional demo**: it shows an on-page confirmation only and never sends or stores anything.

## Quick start

```bash
npm install
npm run dev
```

Build for static hosting:

```bash
npm run build
```

The deployable site is created in `dist/`.

## Flat layout

All files live in the project root (no folders) so the project can be uploaded to GitHub through the web uploader as-is. Upload the **files**, not the zip.

## Where to edit

- `site.ts` — business name, **dummy** phone/email/address/hours, services and taglines, **sample** reviews, FAQs, image imports.
- `styles.css` — all styling. Brand colors are CSS variables at the top (`--red`, `--black`). The hero photo is set in the `.hero` rule.
- Images — `hero.jpg`, `workshop.jpg`, `before-after.jpg`, `home-repair.jpg`, `door.jpg`, `painting.jpg`, `deck.jpg`, `logo.png`. Replace a file with the same name to swap a photo.

## Deploy to Vercel

1. Upload all files to the **root** of a GitHub repo.
2. In Vercel choose **Add New → Project** and import the repo.
3. Framework Preset should be **Vite** (also set in `vercel.json`): build command `npm run build`, output directory `dist`. Root Directory stays empty. No environment variables are needed.
4. Click **Deploy**.

## Before launch

- Replace the dummy contact details with real, verified ones.
- Replace the sample reviews with verified customer reviews.
- Connect the form to a real service (email, CRM or form backend) if it should send enquiries.
