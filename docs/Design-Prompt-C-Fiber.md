Attach `Design-C-Fiber.pdf` to Claude Design along with this prompt (this PDF is a static capture of a live interactive demo — see the live version if you want to feel the actual motion before generating). Don't ask clarifying questions about content, colors, or which technologies to include; everything needed is below. Use dummy/placeholder imagery only where none is given, and generate directly.

```
Design a personal portfolio website, as artboards for desktop (1440px) and mobile (390px), single scrolling page with anchor sections. Use the "FIBER" visual system from the attached PDF exactly: near-black background (#08090C), frosted-glass panels (translucent dark fill, heavy backdrop blur, a thin light-catching gradient border on the top-left edge) for every card/nav/stat block, two soft ambient glow fields drifting slowly behind the glass — one teal (#2DD4BF), one deep indigo (#3B4CCB), both large, blurred, low-opacity — a faint grid texture with a soft circular "spotlight" brightened area (simulating a cursor-reactive light), Instrument Sans for headings/body, JetBrains Mono for labels/stats/tags, a very subtle film-grain noise overlay across the whole page, sharp-ish rounded corners (14px) on glass panels only.

No headshot photo anywhere — the identity is built from typography, glass, light, and data.

SECTIONS AND EXACT CONTENT:

1. NAV (glass, pill-shaped, floating with margin from the top edge): "Arnab Das" left, links "WORK / ABOUT / SKILLS / CONTACT" right, monospace.

2. HERO:
   - Status chip (glass pill): "● OPEN TO OPPORTUNITIES" with a glowing teal dot
   - Large headline, shown mid-reveal (as if each word just animated up into place): "Building real-time Voice AI & AI-native platforms."
   - Subhead: "Software Engineer, 3.5+ years — currently sole technical owner of a 17-repo enterprise voice-AI platform. IIT Roorkee."
   - Buttons: "View Work" (solid teal, glass secondary "Download Résumé" outlined)
   - Two large soft glow blobs bleeding into the hero background, one teal upper-left, one indigo lower-right

3. IMPACT STRIP — 3 large glass stat cards in a row, monospace tabular numerals in teal:
   164× / Face-match speedup
   97% / Transcript accuracy
   17 / Repos owned

4. ABOUT/SPECIALIZATION — 4 glass pillar cards in a grid, each with a small monospace index (01–04):
   01 Voice AI & Telephony — "Root-caused a LiveKit/SIP bug across 8 upstream releases."
   02 Security Engineering — "Closed 13 vulnerabilities in a platform-wide RBAC sprint."
   03 Computer Vision — "Architected a 9-analysis-type CV platform, 95%+ accuracy."
   04 Full-Stack & Infra — "Ships 15,000+ lines of production code a month."

5. FEATURED PROJECTS — glass cards, 3 per row on desktop, each with name, one-liner, and monospace tech tags:
   UniWeave — "17-repo enterprise voice-AI SaaS platform, sole technical owner." Tags: LIVEKIT, RBAC, JWT.
   Saudia Voice AI — "Enterprise multilingual voice assistant, Microsoft-sponsored." Tags: AZURE OPENAI, TWILIO.
   IntelliVision — "9-analysis-type computer vision platform, solo-architected." Tags: FASTAPI, YOLOV8.
   IntelliVideo — "Video intelligence and person-identification MVP." Tags: DEEPFACE, FAISS.
   IndiaAI Face Authentication — "Government of India duplicate-detection challenge." Tags: FACENET, NUMPY.
   Show one card with a visible edge-light "sweep" highlight across it, as if mid-hover.

6. EXPERIENCE TIMELINE (glass-card list, vertical):
   AionOS — Software Engineer — Feb 2025–Present — "Sole owner of UniWeave; also shipped Saudia Voice AI, IntelliVision, IntelliVideo."
   ARThink AI — Software Engineer — Jan 2024–Jan 2025 — "QuadzAI chatbot platform, OnFit AI healthcare PWA."
   SRM Software Inc — Junior Software Engineer — Jan–Sep 2023 — "HR workflow automation, Angular frontend."
   Earlier internships — 2020–2022 — "Full-stack across e-commerce, fintech, healthcare, EdTech."

7. SKILLS — grouped monospace tag clusters under the same 4 pillar names:
   Voice AI & Telephony: LiveKit, Twilio, WebRTC, Azure OpenAI Realtime, SIP, Genesys, CZentrix
   Security: JWT, RBAC, OAuth2, Webhook HMAC
   Computer Vision: YOLOv8, DeepFace, InsightFace, OpenCV
   Full-Stack & Infra: Python, TypeScript, FastAPI, Next.js, React, PostgreSQL, Redis, Docker, Azure, GCP

8. CONTACT/FOOTER: glass panel, Email icon+label, LinkedIn icon+label ("linkedin.com/in/arnab-das-2a5039182"), "Download Résumé" repeated.

DELIVERABLES: desktop artboard(s), mobile artboard(s), and one artboard showing a glass card in both its resting and "lit/hovered" state (glowing edge, subtle lift) side by side. This will be built with real backdrop-blur, ambient motion, cursor-reactive light, magnetic buttons, 3D card tilt, and scroll count-up animations (Framer Motion + GSAP ScrollTrigger) — favor layouts that read as already mid-animation or ready to animate, not flat and static.
```
