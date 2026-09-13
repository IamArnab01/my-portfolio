// Real content — matches docs/PRD.md §2 and the approved FIBER canvas 1:1.

export const nav = {
  brand: "Arnab Das",
  links: [
    { label: "WORK", href: "#work" },
    { label: "ABOUT", href: "#about" },
    { label: "SKILLS", href: "#skills" },
  ],
  contact: { label: "CONTACT", href: "#contact" },
};

export const hero = {
  status: "OPEN TO OPPORTUNITIES",
  // Each word carries the canvas's exact "resolving into focus" offsets —
  // the animation drives these values to 0/1/none, it doesn't invent new ones.
  headlineWords: [
    { text: "Building", y: 0, opacity: 1, blur: 0 },
    { text: "real-time", y: 0, opacity: 1, blur: 0, break: true },
    { text: "Voice", y: 6, opacity: 0.94, blur: 0.2 },
    { text: "AI", y: 14, opacity: 0.8, blur: 0.8, accent: true },
    { text: "&", y: 18, opacity: 0.7, blur: 1.2 },
    { text: "AI-native", y: 26, opacity: 0.52, blur: 2, break: true },
    { text: "platforms.", y: 40, opacity: 0.28, blur: 4 },
  ],
  subhead:
    "Software Engineer, 3.5+ years — currently sole technical owner of a 17-repo enterprise voice-AI platform. IIT Roorkee.",
  primaryCta: { label: "View Work", href: "#work" },
  secondaryCta: { label: "Download Résumé", href: "/resume.pdf" },
};

export const impactStats = [
  { value: 164, suffix: "×", label: "FACE-MATCH SPEEDUP" },
  { value: 97, suffix: "%", label: "TRANSCRIPT ACCURACY" },
  { value: 17, suffix: "", label: "REPOS OWNED" },
  { value: 13, suffix: "", label: "SECURITY VULNS CLOSED" },
  { value: 9, suffix: "", label: "CV ANALYSIS TYPES SHIPPED" },
  { value: 95, suffix: "%+", label: "FACE-ID ACCURACY" },
];

export const about = {
  lead: "I'm a Software Engineer at AionOS with 3.5+ years shipping production AI/ML systems, enterprise SaaS platforms, and real-time voice infrastructure. I currently own UniWeave — a 17-repo, multi-tenant voice-AI platform — end to end: architecture, security, and telephony. IIT Roorkee, Integrated M.Tech.",
  pillars: [
    {
      index: "01",
      title: "Voice AI & Telephony",
      body: "Root-caused a LiveKit/SIP bug across 8 upstream releases.",
    },
    {
      index: "02",
      title: "Security Engineering",
      body: "Closed 13 vulnerabilities in a platform-wide RBAC sprint.",
    },
    {
      index: "03",
      title: "Computer Vision",
      body: "Architected a 9-analysis-type CV platform, 95%+ accuracy.",
    },
    {
      index: "04",
      title: "Full-Stack & Infra",
      body: "Ships 15,000+ lines of production code a month.",
    },
  ],
};

export type Project = {
  slug: string;
  name: string;
  summary: string;
  tags: { label: string; accent?: boolean }[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "uniweave",
    name: "UniWeave",
    summary: "17-repo enterprise voice-AI SaaS platform, sole technical owner.",
    tags: [{ label: "LIVEKIT", accent: true }, { label: "RBAC" }, { label: "JWT" }],
    featured: true,
  },
  {
    slug: "saudia-voice-ai",
    name: "Saudia Voice AI",
    summary: "Enterprise multilingual voice assistant, Microsoft-sponsored.",
    tags: [{ label: "AZURE OPENAI" }, { label: "TWILIO" }],
  },
  {
    slug: "intellivision",
    name: "IntelliVision",
    summary: "9-analysis-type computer vision platform, solo-architected.",
    tags: [{ label: "FASTAPI" }, { label: "YOLOV8" }],
  },
  {
    slug: "intellivideo",
    name: "IntelliVideo",
    summary: "Video intelligence and person-identification MVP.",
    tags: [{ label: "DEEPFACE" }, { label: "FAISS" }],
  },
  {
    slug: "indiaai-face-auth",
    name: "IndiaAI Face Authentication",
    summary: "Government of India duplicate-detection challenge.",
    tags: [{ label: "FACENET" }, { label: "NUMPY" }],
  },
];

export const caseStudy = {
  slug: "uniweave",
  name: "UniWeave",
  problem:
    "17-repo multi-tenant platform, zero handoff documentation, cross-org data isolation not guaranteed.",
  approach:
    "Became primary owner in 2 weeks; ran an RBAC hardening sprint; led a 4-service backend consolidation and a zero-downtime JWT migration.",
  stack: ["LIVEKIT", "NODE/TS", "POSTGRESQL", "REDIS"],
  outcome:
    "13 vulnerabilities closed, full tenant isolation, 245+ files consolidated verified byte-for-byte.",
};

export const timeline = [
  {
    date: "FEB 2025 — NOW",
    role: "Software Engineer",
    company: "AionOS",
    body: "Sole owner of UniWeave; also shipped Saudia Voice AI, IntelliVision, IntelliVideo.",
  },
  {
    date: "JAN 2024 — JAN 2025",
    role: "Software Engineer",
    company: "ARThink AI",
    body: "QuadzAI chatbot platform, OnFit AI healthcare PWA.",
  },
  {
    date: "JAN — SEP 2023",
    role: "Junior Software Engineer",
    company: "SRM Software Inc",
    body: "HR workflow automation, Angular frontend.",
  },
  {
    date: "2020 — 2022",
    role: "Full-stack Intern",
    company: "multiple",
    body: "E-commerce, fintech, healthcare, EdTech.",
  },
];

export const skills = [
  {
    title: "VOICE AI & TELEPHONY",
    items: ["LiveKit", "Twilio", "WebRTC", "Azure OpenAI Realtime", "SIP", "Genesys", "CZentrix"],
  },
  {
    title: "SECURITY",
    items: ["JWT", "RBAC", "OAuth2", "Webhook HMAC"],
  },
  {
    title: "COMPUTER VISION",
    items: ["YOLOv8", "DeepFace", "InsightFace", "OpenCV"],
  },
  {
    title: "FULL-STACK & INFRA",
    items: [
      "Python",
      "TypeScript",
      "FastAPI",
      "Next.js",
      "React",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Azure",
      "GCP",
    ],
  },
];

export const contact = {
  heading: "Let's talk.",
  subhead: "Open to Senior/Full-Stack and AI-native platform roles.",
  email: "arnab.das@aionos.ai",
  linkedin: {
    label: "LINKEDIN.COM/IN/ARNAB-DAS-2A5039182",
    href: "https://www.linkedin.com/in/arnab-das-2a5039182/",
  },
  resumeHref: "/resume.pdf",
};
