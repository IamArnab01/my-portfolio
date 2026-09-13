// Real content — matches docs/PRD.md §2 and the approved FIBER canvas 1:1.
// Case-study copy is drawn verbatim from Arnab_Das_Resume.pdf (the public résumé,
// not the internal AionOS one) — nothing here goes beyond what's already public.

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
    "Software Engineer, 4 years — currently lead engineer on a multi-channel enterprise voice-AI platform and sole technical owner of a 17-repo SaaS codebase. IIT Roorkee.",
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
  eyebrow: "ABOUT",
  heading: "Background",
  lead: "I'm a Software Engineer with 4 years building production AI systems and full-stack platforms. Lead engineer on a multi-channel, multilingual Voice AI platform delivering sub-400ms latency and 97% transcript accuracy for enterprise airline and contact-centre clients — backed by end-to-end ownership of a 17-repo multi-tenant SaaS platform on Azure. IIT Roorkee, Integrated M.Tech.",
  pillars: [
    {
      index: "01",
      title: "Voice AI & Telephony",
      body: "Cut first-audio latency ~6× on a live enterprise voice platform.",
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
      body: "Sole technical owner of a 17-repo enterprise codebase.",
    },
  ],
};

export type Project = {
  slug: string;
  name: string;
  summary: string;
  tags: { label: string; accent?: boolean }[];
  accent: "teal" | "indigo" | "violet" | "amber" | "rose";
  icon: "network" | "phone" | "eye" | "video" | "scan-face";
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "uniweave",
    name: "UniWeave",
    summary: "17-repo enterprise voice-AI SaaS platform, sole technical owner.",
    tags: [{ label: "LIVEKIT", accent: true }, { label: "RBAC" }, { label: "JWT" }],
    accent: "teal",
    icon: "network",
    featured: true,
  },
  {
    slug: "saudia-voice-ai",
    name: "Saudia Voice AI",
    summary: "Enterprise multilingual voice assistant, Microsoft-sponsored.",
    tags: [{ label: "AZURE OPENAI" }, { label: "TWILIO" }],
    accent: "indigo",
    icon: "phone",
  },
  {
    slug: "intellivision",
    name: "IntelliVision",
    summary: "9-analysis-type computer vision platform, solo-architected.",
    tags: [{ label: "FASTAPI" }, { label: "YOLOV8" }],
    accent: "violet",
    icon: "eye",
  },
  {
    slug: "intellivideo",
    name: "IntelliVideo",
    summary: "Video intelligence and person-identification MVP.",
    tags: [{ label: "DEEPFACE" }, { label: "FAISS" }],
    accent: "amber",
    icon: "video",
  },
  {
    slug: "indiaai-face-auth",
    name: "IndiaAI Face Authentication",
    summary: "Government of India duplicate-detection challenge.",
    tags: [{ label: "FACENET" }, { label: "NUMPY" }],
    accent: "rose",
    icon: "scan-face",
  },
];

export type CaseStudy = {
  problem: string;
  approach: string;
  stack: string[];
  outcome: string;
};

export const caseStudies: Record<string, CaseStudy> = {
  uniweave: {
    problem:
      "17-repo multi-tenant platform, zero handoff documentation, cross-org data isolation not guaranteed.",
    approach:
      "Became primary owner in 2 weeks; ran an RBAC hardening sprint; led a 4-service backend consolidation and a zero-downtime JWT migration from RS512 to HS256.",
    stack: ["LIVEKIT", "NODE/TS", "POSTGRESQL", "REDIS"],
    outcome:
      "13 vulnerabilities closed, full tenant isolation, 245+ files consolidated and verified byte-for-byte.",
  },
  "saudia-voice-ai": {
    problem:
      "Enterprise airline voice AI needed sub-second latency and high accuracy across English, Arabic and French, with resilient sessions across disconnects.",
    approach:
      "Integrated Azure OpenAI Realtime API with Twilio telephony and LiveKit transport; fixed a LiveKit agent race condition cutting first-audio latency ~6×; migrated context retrieval from ChromaDB to Pinecone; added Redis-backed conversation continuity.",
    stack: ["AZURE OPENAI", "TWILIO", "LIVEKIT", "PINECONE", "REDIS"],
    outcome:
      "Sub-400ms response latency, 97% transcript accuracy, 52% fewer support tickets, 97% uptime.",
  },
  intellivision: {
    problem:
      "Needed a unified computer-vision platform covering 9 distinct analysis types without locking into one LLM vendor or a central API cost bottleneck.",
    approach:
      "Architected a FastAPI + Celery backend with a React/Redux frontend; built a BYOK multi-provider LLM layer (5 providers) with Fernet-encrypted key storage; shipped a sub-2s webcam live demo and a 20+ component design system.",
    stack: ["FASTAPI", "CELERY", "REACT", "YOLOV8"],
    outcome:
      "9 production analysis types shipped, 46 UI mockups delivered, migrated SQLite to PostgreSQL for production scale.",
  },
  intellivideo: {
    problem:
      "Needed a video-intelligence MVP for person identification and multimodal search, delivered in a single sprint, running efficiently on limited GPU memory.",
    approach:
      "Built a dual face-recognition pipeline (DeepFace ArcFace + InsightFace) with async Celery processing; integrated 5 AI models (Whisper, BLIP, CLIP, YOLOv8, SentenceTransformer) behind a lazy-loading architecture with FAISS vector search.",
    stack: ["DEEPFACE", "INSIGHTFACE", "FAISS", "GCP"],
    outcome: "95%+ identification accuracy, 40% memory reduction, 99.5% uptime on GPU-accelerated GCP.",
  },
  "indiaai-face-auth": {
    problem:
      "A Government of India duplicate-detection challenge needed face-matching across 5,000+ records fast enough for real-time submission review.",
    approach:
      "Replaced O(n) sequential comparison with vectorised NumPy cosine similarity over FaceNet embeddings; migrated the backend from Flask to FastAPI with dual-layer API-key + JWT security; built a React/Redux admin dashboard.",
    stack: ["FACENET", "NUMPY", "FASTAPI", "REACT"],
    outcome: "164× performance improvement — 90s down to under 1s per submission.",
  },
};

export const timeline = [
  {
    date: "FEB 2025 — NOW",
    role: "Software Engineer",
    company: "AionOS",
    body: "Lead engineer on an enterprise voice-AI platform; sole owner of UniWeave; also shipped IntelliVision and IntelliVideo.",
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
  email: "imarnab01@gmail.com",
  phone: "+91 6296540769",
  linkedin: {
    label: "LINKEDIN.COM/IN/ARNAB-DAS-2A5039182",
    href: "https://www.linkedin.com/in/arnab-das-2a5039182/",
  },
  resumeHref: "/resume.pdf",
};
