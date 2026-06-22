# Nihal Puse — Portfolio

Personal portfolio for **Nihal Puse**, a frontend developer based in Bhopal, India.
Single-page site in an "Engineered Dark" theme, built with the stack it showcases.

🔗 **Live:** _add your Vercel URL here_

## Tech stack

- **Next.js** (App Router) + **TypeScript**
- **Tailwind CSS v4** (CSS-first `@theme` tokens)
- **Framer Motion** (scroll reveals, reduced-motion aware)
- Code-generated Open Graph image via `next/og`

## Develop

```bash
npm install
npm run dev      # http://localhost:3000 (Turbopack)
```

## Build & test

```bash
npm run build    # production build (webpack — see note below)
npm run start    # serve the production build
npm test         # Vitest
```

> **Build note:** `npm run build` uses `next build --webpack`. `next/og` (the
> generated OG image) crashes a Turbopack build worker on Windows, so the build
> runs on webpack; `npm run dev` stays on Turbopack for speed.

## Editing content

All content lives as typed data in [`src/content/`](src/content/) — edit those
files, no JSX changes needed:

- `site.ts` — name, role, tagline, about, links, nav
- `projects.ts` — featured projects (uncomment `image:` after adding a screenshot to `public/projects/`)
- `experience.ts` · `education.ts` · `skills.ts`

The résumé download is served from `public/resume.pdf`.

## Deploy

Hosted on **Vercel**. Pushing to `main` triggers an automatic deployment.
