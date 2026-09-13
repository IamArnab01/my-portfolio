# Portfolio Website — PRD (dev-ready)

**Owner:** Arnab Das · **Stack:** Next.js 15 (App Router), TypeScript, Tailwind, shadcn/ui, Framer Motion + GSAP · no backend, static export, Vercel.

This version replaces the earlier draft. Content below is real (pulled from the resume/KRA material already reviewed) and is meant to go straight into components — it is not placeholder copy. The two Claude Design mockups (see `Design-Prompt-A-Signal.md` / `Design-Prompt-B-Dispatch.md` + `Portfolio-Design-Directions.pdf`) may use dummy content since they're for visual layout only; this file is the one used at build time.

## 1. Sitemap

Single scrolling page, anchor nav: `#work` `#about` `#skills` `#contact`.

1. Hero
2. Impact strip
3. About + specialization pillars
4. Featured projects (5, expandable case studies)
5. Experience timeline
6. Skills
7. Contact / footer

No blog, no CMS, no light/dark toggle, no multi-page routing — cut deliberately (see original PRD rationale if needed; not restating here).

## 2. Exact content, by section

### Hero
- Name: `Arnab Das`
- Headline: `Building real-time Voice AI & AI-native platforms.`
- Subhead: `Software Engineer, 3.5+ years — currently sole technical owner of a 17-repo enterprise voice-AI platform. IIT Roorkee.`
- Status chip: `OPEN TO OPPORTUNITIES`
- Primary CTA: `View Work` → scrolls to `#work`
- Secondary CTA: `Download Résumé` → links to `/resume.pdf`
- No headshot photo — identity is built from typography/data/system motifs, not a portrait (applies to both design directions).

### Impact strip (6 stats — real, verifiable)
| Number | Label |
|---|---|
| 164× | Face-match speedup — IndiaAI govt. challenge |
| 97% | Transcript accuracy, 3 languages — Saudia Voice AI |
| 17 | Repos owned solo — UniWeave |
| 13 | Security vulnerabilities closed — RBAC hardening sprint |
| 9 | Computer-vision analysis types shipped — IntelliVision |
| 95%+ | Face-ID accuracy — IntelliVideo |

### About
> I'm a Software Engineer at AionOS with 3.5+ years shipping production AI/ML systems, enterprise SaaS platforms, and real-time voice infrastructure. I currently own UniWeave — a 17-repo, multi-tenant voice-AI platform — end to end: architecture, security, and telephony. IIT Roorkee, Integrated M.Tech.

**Specialization pillars** (4 cards):
1. **Voice AI & Telephony** — Root-caused a LiveKit/SIP bug across 8 upstream releases; built real-time audio bridges for Twilio, CZentrix, and Genesys.
2. **Security Engineering** — Closed 13 vulnerabilities in a platform-wide RBAC hardening sprint; migrated JWT signing with zero downtime.
3. **Computer Vision** — Architected a 9-analysis-type CV platform and a dual-pipeline face-ID system at 95%+ accuracy.
4. **Full-Stack & Infra** — FastAPI, Node, React/Next.js, Azure & GCP — ships 15,000+ lines of production code a month.

### Featured projects (5 — problem / approach / stack / outcome)

**1. UniWeave** — Enterprise voice-AI SaaS platform
- Problem: 17-repo multi-tenant platform, zero handoff documentation, cross-org data isolation not guaranteed.
- Approach: Became primary owner in 2 weeks; ran an RBAC hardening sprint; led a 4-service backend consolidation and an RS512→HS256 JWT migration with zero downtime.
- Stack: `LiveKit` `Node/TS` `PostgreSQL` `Redis` `Docker` `Azure`
- Outcome: 13 security vulnerabilities closed, full tenant isolation, 245+ files consolidated verified byte-for-byte.

**2. Saudia Voice AI** — Enterprise airline voice assistant (Microsoft-sponsored)
- Problem: Airline customer service needed a real-time, multilingual voice assistant with production-grade latency.
- Approach: Integrated Azure OpenAI Realtime API with Twilio telephony and LiveKit transport; built persistent conversation continuity.
- Stack: `Python` `FastAPI` `Azure OpenAI Realtime` `Twilio` `Redis` `Pinecone`
- Outcome: <400ms latency, 97% transcript accuracy across English/Arabic/French, 52% fewer support tickets.

**3. IntelliVision** — Enterprise computer vision platform
- Problem: No unified platform existed for 9 distinct visual-analysis use cases (people counting, PPE compliance, plate recognition, etc.).
- Approach: Architected one job-queue abstraction spanning in-process models, sibling microservices, and paid external APIs; built a 5-provider BYOK LLM layer.
- Stack: `FastAPI` `Celery` `YOLOv8` `DeepFace` `PostgreSQL` `React`
- Outcome: 9 shipped analysis types, deployed to production on Azure VM with 3 isolated ML environments.

**4. IntelliVideo** — Video intelligence / person identification
- Problem: Needed multimodal video search and reliable person identification for investigative workflows.
- Approach: Built a dual face-recognition pipeline (DeepFace ArcFace + InsightFace), 31 REST APIs, FAISS vector search.
- Stack: `FastAPI` `Whisper` `CLIP` `YOLOv8` `FAISS` `GCP GPU`
- Outcome: 95%+ face-ID accuracy, 40% memory optimization, full MVP in a single sprint.

**5. IndiaAI Face Authentication** — Government of India challenge
- Problem: Sequential face-matching took 90s/submission — unusable at scale (5,000+ records, 125-hour projected Stage 2 timeline).
- Approach: Replaced O(n) sequential comparison with vectorized NumPy cosine similarity on precomputed FaceNet embeddings.
- Stack: `Python` `FaceNet` `NumPy` `FastAPI` `React`
- Outcome: 164× speedup (90s → <1s per submission), 95% database size reduction.

*(Swappable 6th slot if wanted: NHCX FHIR R4 converter, or IntelliAvatar. Not included by default to keep the section scannable — 5 deep case studies beat 6 shallow ones.)*

### Experience timeline
- **AionOS** — Software Engineer — Feb 2025–Present — Sole owner of UniWeave; also shipped Saudia Voice AI, IntelliVision, IntelliVideo.
- **ARThink AI** — Software Engineer — Jan 2024–Jan 2025 — QuadzAI chatbot platform, OnFit AI healthcare PWA.
- **SRM Software Inc** — Junior Software Engineer — Jan–Sep 2023 — HR workflow automation, Angular frontend.
- **Earlier internships** — 2020–2022 — Full-stack across e-commerce, fintech, healthcare, EdTech (Zixwer, Bechho, Tradebuilder, and others).

### Skills (grouped by pillar, not a flat list)
- **Voice AI & Telephony:** LiveKit, Twilio, WebRTC, Azure OpenAI Realtime, SIP, Genesys, CZentrix
- **Security:** JWT, RBAC, OAuth2, Webhook HMAC
- **Computer Vision:** YOLOv8, DeepFace, InsightFace, OpenCV
- **Full-Stack & Infra:** Python, TypeScript, FastAPI, Next.js, React, PostgreSQL, Redis, Docker, Azure, GCP

### Contact / footer
- Email: `arnab.das@aionos.ai` (confirm whether to use this or a personal email for a job-search-facing site — recommend a personal address instead, since this one is tied to the current employer)
- LinkedIn: `https://www.linkedin.com/in/arnab-das-2a5039182/`
- GitHub: not provided — omit the link until you have one, don't leave a dead icon
- Résumé: `/resume.pdf` (repeated from hero)

## 3. Component inventory

| Section | Components |
|---|---|
| Nav | `Nav.tsx` — logo/name, anchor links, mobile: shadcn `Sheet` |
| Hero | `Hero.tsx`, `StatusChip.tsx`, motif component (waveform bars *or* ticker, per chosen design) |
| Impact | `ImpactStrip.tsx`, `StatCounter.tsx` (GSAP count-up on scroll) |
| About | `About.tsx`, `PillarCard.tsx` (shadcn `Card` base) |
| Projects | `Projects.tsx`, `ProjectCard.tsx`, `CaseStudyDialog.tsx` (shadcn `Dialog` desktop / `Sheet` mobile) |
| Timeline | `Timeline.tsx`, `TimelineItem.tsx` |
| Skills | `Skills.tsx`, `SkillGroup.tsx`, `Tag.tsx` (shadcn `Badge` base) |
| Footer | `Footer.tsx` |

## 4. Action items (do these in order)

### Phase 0 — Design
- [ ] Paste `Design-Prompt-A-Signal.md` into Claude Design with `Portfolio-Design-Directions.pdf` attached
- [ ] Paste `Design-Prompt-B-Dispatch.md` into Claude Design (separate generation) with the same PDF attached
- [ ] Compare both, pick one direction (or call out specific elements to merge)
- [ ] Paste the resulting Claude Design canvas link back here — implementation starts from that

### Phase 1 — Scaffold
- [ ] `npx create-next-app@latest . --typescript --tailwind --app`
- [ ] `npx shadcn@latest init`, then `npx shadcn@latest add button card badge sheet dialog tabs`
- [ ] `npm i framer-motion gsap lucide-react`
- [ ] Set up fonts via `next/font/google` for the chosen design's typefaces
- [ ] Add the chosen design's palette as CSS variables in `globals.css` + reference from `tailwind.config.ts`

### Phase 2 — Build sections (one component at a time, in this order)
- [ ] `Nav.tsx` → `Hero.tsx` → `ImpactStrip.tsx` → `About.tsx` → `Projects.tsx` → `Timeline.tsx` → `Skills.tsx` → `Footer.tsx`
- [ ] Assemble all in `app/page.tsx`
- [ ] Drop in real copy from §2 above as each component is built — not after

### Phase 3 — Animation
- [ ] Framer Motion: card entrance/stagger, button/tag hover states, page-load fade
- [ ] GSAP + ScrollTrigger: `StatCounter` count-up, timeline reveal, (Dispatch only) ticker `gsap.to({xPercent: -50}, {repeat:-1, duration:...})` loop
- [ ] Wrap all motion behind `prefers-reduced-motion` checks (`useReducedMotion()` in Framer, `gsap.matchMedia()` guard in GSAP) — not optional

### Phase 4 — Responsive
- [ ] Mobile nav via shadcn `Sheet`
- [ ] Case-study detail: `Dialog` on desktop → full-screen `Sheet` on mobile
- [ ] Timeline: horizontal/pinned on desktop → simple vertical stack on mobile

### Phase 5 — Content & assets
- [ ] Add `/public/resume.pdf`
- [ ] Add OG image + favicon
- [ ] Confirm/replace contact email (see §2 note)

### Phase 6 — Perf / SEO / a11y
- [ ] `next/image` for any images
- [ ] `generateMetadata`/metadata API — title, description, OG tags
- [ ] Run Lighthouse, fix findings (target: Perf 90+, A11y 95+, SEO 100)
- [ ] Verify visible keyboard focus states throughout

### Phase 7 — Deploy
- [ ] Push to GitHub, import into Vercel
- [ ] Confirm live on `<name>.vercel.app`
- [ ] Optional: connect a paid custom domain later (non-blocking, ~5 min DNS change whenever)
