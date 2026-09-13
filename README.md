# Arnab Das — Portfolio

Personal portfolio site. React 19 + Vite + TypeScript + Tailwind CSS v4 + shadcn/ui, with
Framer Motion for component-level interaction and GSAP/ScrollTrigger for scroll-driven reveals.

Design source of truth: `docs/PRD.md` and `docs/DESIGN-SYSTEM.md`, built to match the approved
Claude Design canvas (glassmorphism, ambient gradient field, per-word hero reveal).

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # type-checks then builds to dist/
npm run preview # serve the production build locally
```

## Deploy

Static output in `dist/` — deploy as-is to Vercel or Netlify (no backend, no env vars required).
