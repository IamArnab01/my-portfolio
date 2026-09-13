Attach `Portfolio-Design-Directions.pdf` to Claude Design along with this prompt. Reference only the "DESIGN B — DISPATCH" section of that PDF for the exact visual language (palette, type, motifs, motion notes) — don't ask clarifying questions about content, colors, or which technologies to include; everything needed is below. Use dummy/placeholder imagery only where none is given (there is none needed here) and generate directly.

```
Design a personal portfolio website, as artboards for desktop (1440px) and mobile (390px), single scrolling page with anchor sections. Use the "DESIGN B — DISPATCH" visual system from the attached PDF exactly: bright paper background (#F7F6F2), near-black ink (#0E0E10), one electric "dispatch blue" accent (#3346FF) used boldly as flat fill blocks (never a gradient), Archivo Black for big display headlines, Work Sans for body copy, IBM Plex Mono for tags/ticker/labels, thick black rule lines, a Swiss/brutalist grid, sharp corners, hover states that invert a block's fill/text color rather than adding shadow or glow.

No headshot photo anywhere — the identity is built from bold typography, data, and a scrolling tech-stack ticker only.

SECTIONS AND EXACT CONTENT:

1. NAV: "ARNAB DAS" left in bold caps, links "WORK / ABOUT / SKILLS / CONTACT" right, monospace.

2. HERO:
   - Status chip: "● OPEN TO OPPORTUNITIES"
   - Huge display headline (Archivo Black): "Building real-time Voice AI & AI-native platforms."
   - Subhead: "Software Engineer, 3.5+ years — currently sole technical owner of a 17-repo enterprise voice-AI platform. IIT Roorkee."
   - Buttons: "View Work" (solid ink block, inverts to blue on hover), "Download Résumé" (outlined)
   - A horizontal scrolling ticker strip beneath the hero reading: "LIVEKIT · TWILIO · WEBRTC · SIP · AZURE OPENAI · FASTAPI · REACT · POSTGRESQL · REDIS · DOCKER ·" (repeating), monospace caps

3. IMPACT STRIP — 6 stat blocks as huge full-bleed block-color numerals (alternating ink-block and blue-block backgrounds), tabular figures:
   164× / Face-match speedup — IndiaAI govt. challenge
   97% / Transcript accuracy, 3 languages — Saudia Voice AI
   17 / Repos owned solo — UniWeave
   13 / Security vulnerabilities closed — RBAC hardening sprint
   9 / Computer-vision analysis types shipped — IntelliVision
   95%+ / Face-ID accuracy — IntelliVideo

4. ABOUT: "I'm a Software Engineer at AionOS with 3.5+ years shipping production AI/ML systems, enterprise SaaS platforms, and real-time voice infrastructure. I currently own UniWeave — a 17-repo, multi-tenant voice-AI platform — end to end: architecture, security, and telephony. IIT Roorkee, Integrated M.Tech."
   Below it, 4 pillar blocks (bold numbered 01–04, not soft cards):
   01 Voice AI & Telephony — "Root-caused a LiveKit/SIP bug across 8 upstream releases; built real-time audio bridges for Twilio, CZentrix, and Genesys."
   02 Security Engineering — "Closed 13 vulnerabilities in a platform-wide RBAC hardening sprint; migrated JWT signing with zero downtime."
   03 Computer Vision — "Architected a 9-analysis-type CV platform and a dual-pipeline face-ID system at 95%+ accuracy."
   04 Full-Stack & Infra — "FastAPI, Node, React/Next.js, Azure & GCP — ships 15,000+ lines of production code a month."

5. FEATURED PROJECTS — as a bold stacked/indexed list (not a card grid), each row with a big index number, name, one-liner, tags, 2 stats, row inverts color on hover:
   01 UniWeave — "17-repo enterprise voice-AI SaaS platform, sole technical owner." Tags: LIVEKIT, RBAC, JWT. Stats: 13 vulns closed / 245+ files consolidated.
   02 Saudia Voice AI — "Enterprise multilingual voice assistant for an airline, Microsoft-sponsored." Tags: AZURE OPENAI, TWILIO, PINECONE. Stats: <400ms latency / 97% accuracy.
   03 IntelliVision — "9-analysis-type computer vision platform, solo-architected." Tags: FASTAPI, YOLOV8, CELERY. Stats: 9 analysis types / 5 LLM providers (BYOK).
   04 IntelliVideo — "Video intelligence and person-identification MVP." Tags: DEEPFACE, FAISS, GCP GPU. Stats: 95%+ accuracy / 31 REST APIs.
   05 IndiaAI Face Authentication — "Government of India duplicate-detection challenge." Tags: FACENET, NUMPY, FASTAPI. Stats: 164× speedup / <1s per submission.
   Design one row in its expanded "case study" state showing Problem / Approach / Stack / Outcome, same bold visual language, full-bleed blue or ink block.

6. EXPERIENCE TIMELINE — bold vertical stack (mobile) / horizontal rule-divided row (desktop):
   AionOS — Software Engineer — Feb 2025–Present — "Sole owner of UniWeave; also shipped Saudia Voice AI, IntelliVision, IntelliVideo."
   ARThink AI — Software Engineer — Jan 2024–Jan 2025 — "QuadzAI chatbot platform, OnFit AI healthcare PWA."
   SRM Software Inc — Junior Software Engineer — Jan–Sep 2023 — "HR workflow automation, Angular frontend."
   Earlier internships — 2020–2022 — "Full-stack across e-commerce, fintech, healthcare, EdTech."

7. SKILLS — grouped tag clusters (monospace, bordered) under the same 4 pillar names as About:
   Voice AI & Telephony: LiveKit, Twilio, WebRTC, Azure OpenAI Realtime, SIP, Genesys, CZentrix
   Security: JWT, RBAC, OAuth2, Webhook HMAC
   Computer Vision: YOLOv8, DeepFace, InsightFace, OpenCV
   Full-Stack & Infra: Python, TypeScript, FastAPI, Next.js, React, PostgreSQL, Redis, Docker, Azure, GCP

8. CONTACT/FOOTER: bold block footer, Email icon+label, LinkedIn icon+label ("linkedin.com/in/arnab-das-2a5039182"), "Download Résumé" repeated, ticker strip repeated at the very bottom.

DELIVERABLES: desktop artboard(s), mobile artboard(s), one additional artboard of the expanded project case-study state, and one artboard showing a button/project-row in both its default and hover-inverted states side by side. Favor layouts that read as built for motion — the ticker should look like it's mid-scroll, hover-invert states should be obvious, numbers should look ready to count up — since this will be built with Framer Motion and GSAP ScrollTrigger afterward.
```
