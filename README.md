# Raushan Kumar — Frontend Developer Portfolio

A production-quality personal portfolio built with Next.js (App Router),
TypeScript, Tailwind CSS, shadcn/ui-style components, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Before you deploy

1. **Replace placeholders** in `src/data/navigation.ts`:
   - `GITHUB_URL`
   - `LINKEDIN_URL`
   - `EMAIL`
2. **Wire up the contact form.** `src/components/contact/contact-form.tsx`
   currently uses a mock submit handler (a simulated delay, no network
   call). Replace the body of `handleSubmit` with a call to your own API
   route (e.g. `/api/contact`) or an email service such as Resend,
   Formspree, or SendGrid.
3. **Update `metadataBase`** in `src/app/layout.tsx` and the base URL in
   `src/app/sitemap.ts` / `src/app/robots.ts` to your real production
   domain.
4. **Add real project screenshots.** Case-study pages currently rely on
   text and the sample ticket-board UI — drop real screenshots into
   `public/` and reference them where useful.

## Project structure

```
src/
├── app/                  Routes (App Router)
├── components/
│   ├── layout/           Navbar, footer
│   ├── home/              Homepage sections
│   ├── projects/          Project card, details, badges, status chip
│   ├── contact/           Contact form
│   └── ui/                 shadcn/ui-style primitives
├── data/                  Typed content: projects, experience, skills, nav
└── lib/                   Shared utilities
```

Content lives in `src/data/*.ts`, fully typed — adding a new project means
adding one object to `src/data/projects.ts` and creating a matching page
under `src/app/projects/<slug>/page.tsx` that renders the shared
`<ProjectDetails />` component.

## Notes

- Dark mode is the default theme; toggle from the navbar (persisted via
  `next-themes`).
- Server Components are used by default; `"use client"` is only applied to
  interactive pieces (navbar, theme toggle, hero animation, contact form).
- Animations respect `prefers-reduced-motion`.
- No fabricated metrics, clients, or testimonials are included — only the
  experience and projects actually provided.
