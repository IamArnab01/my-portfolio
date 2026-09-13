Attach `Portfolio-Design-Directions.pdf` to Claude Design along with this prompt. Reference only the "DESIGN A — SIGNAL" section of that PDF for the exact visual language (palette, type, motifs, motion notes) — don't ask clarifying questions about content, colors, or which technologies to include; everything needed is below. Use dummy/placeholder imagery only where none is given (there is none needed here) and generate directly.

```
Design a personal portfolio website, as artboards for desktop (1440px) and mobile (390px), single scrolling page with anchor sections. Use the "DESIGN A — SIGNAL" visual system from the attached PDF exactly: near-black background, one teal accent (#2DD4BF) spent only on links/CTAs/active states, a rare red indicator (#E8483A) reserved only for a "LIVE" badge, Instrument Sans for headings/body, JetBrains Mono for labels/stats/tags, a subtle 1px grid texture, animated-looking audio waveform bars in the hero, sharp/near-sharp corners, no glass or soft shadow effects.

No headshot photo anywhere — the identity is built from typography, data, and system motifs only.

SECTIONS AND EXACT CONTENT:

1. NAV: "Arnab Das" left, links "WORK / ABOUT / SKILLS / CONTACT" right, monospace style.

2. HERO:
   - Status chip: "● OPEN TO OPPORTUNITIES"
   - Headline: "Building real-time Voice AI & AI-native platforms."
   - Subhead: "Software Engineer, 3.5+ years — currently sole technical owner of a 17-repo enterprise voice-AI platform. IIT Roorkee."
   - Buttons: "View Work" (filled teal), "Download Résumé" (outlined)
   - Waveform bar motif as background/hero visual

3. IMPACT STRIP — 6 stat blocks, monospace numerals, tabular figures:
   164× / Face-match speedup — IndiaAI govt. challenge
   97% / Transcript accuracy, 3 languages — Saudia Voice AI
   17 / Repos owned solo — UniWeave
   13 / Security vulnerabilities closed — RBAC hardening sprint
   9 / Computer-vision analysis types shipped — IntelliVision
   95%+ / Face-ID accuracy — IntelliVideo

4. ABOUT: "I'm a Software Engineer at AionOS with 3.5+ years shipping production AI/ML systems, enterprise SaaS platforms, and real-time voice infrastructure. I currently own UniWeave — a 17-repo, multi-tenant voice-AI platform — end to end: architecture, security, and telephony. IIT Roorkee, Integrated M.Tech."
   Below it, 4 pillar cards:
   - Voice AI & Telephony — "Root-caused a LiveKit/SIP bug across 8 upstream releases; built real-time audio bridges for Twilio, CZentrix, and Genesys."
   - Security Engineering — "Closed 13 vulnerabilities in a platform-wide RBAC hardening sprint; migrated JWT signing with zero downtime."
   - Computer Vision — "Architected a 9-analysis-type CV platform and a dual-pipeline face-ID system at 95%+ accuracy."
   - Full-Stack & Infra — "FastAPI, Node, React/Next.js, Azure & GCP — ships 15,000+ lines of production code a month."

5. FEATURED PROJECTS — 5 cards, each with name, one-liner, 3 tech tags, 2 stats, "View case study":
   - UniWeave — "17-repo enterprise voice-AI SaaS platform, sole technical owner." Tags: LIVEKIT, RBAC, JWT. Stats: 13 vulns closed / 245+ files consolidated.
   - Saudia Voice AI — "Enterprise multilingual voice assistant for an airline, Microsoft-sponsored." Tags: AZURE OPENAI, TWILIO, PINECONE. Stats: <400ms latency / 97% accuracy.
   - IntelliVision — "9-analysis-type computer vision platform, solo-architected." Tags: FASTAPI, YOLOV8, CELERY. Stats: 9 analysis types / 5 LLM providers (BYOK).
   - IntelliVideo — "Video intelligence and person-identification MVP." Tags: DEEPFACE, FAISS, GCP GPU. Stats: 95%+ accuracy / 31 REST APIs.
   - IndiaAI Face Authentication — "Government of India duplicate-detection challenge." Tags: FACENET, NUMPY, FASTAPI. Stats: 164× speedup / <1s per submission.
   Design one card in its expanded "case study" state showing Problem / Approach / Stack / Outcome, same visual language.

6. EXPERIENCE TIMELINE (vertical on mobile, horizontal/scroll-anchored on desktop):
   AionOS — Software Engineer — Feb 2025–Present — "Sole owner of UniWeave; also shipped Saudia Voice AI, IntelliVision, IntelliVideo."
   ARThink AI — Software Engineer — Jan 2024–Jan 2025 — "QuadzAI chatbot platform, OnFit AI healthcare PWA."
   SRM Software Inc — Junior Software Engineer — Jan–Sep 2023 — "HR workflow automation, Angular frontend."
   Earlier internships — 2020–2022 — "Full-stack across e-commerce, fintech, healthcare, EdTech."

7. SKILLS — grouped tag clusters under the same 4 pillar names as About:
   Voice AI & Telephony: LiveKit, Twilio, WebRTC, Azure OpenAI Realtime, SIP, Genesys, CZentrix
   Security: JWT, RBAC, OAuth2, Webhook HMAC
   Computer Vision: YOLOv8, DeepFace, InsightFace, OpenCV
   Full-Stack & Infra: Python, TypeScript, FastAPI, Next.js, React, PostgreSQL, Redis, Docker, Azure, GCP

8. CONTACT/FOOTER: Email icon+label, LinkedIn icon+label ("linkedin.com/in/arnab-das-2a5039182"), "Download Résumé" repeated.

DELIVERABLES: desktop artboard(s), mobile artboard(s), one additional artboard of the expanded project case-study state. Favor layouts that read as ready for entrance/reveal animation (staggered cards, count-up-ready numerals) since this will be built with Framer Motion and GSAP ScrollTrigger afterward.
```
