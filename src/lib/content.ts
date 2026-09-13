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
    { text: "Voice", y: 6, opacity: 0.96, blur: 0.2 },
    { text: "AI", y: 14, opacity: 0.88, blur: 0.5, accent: true },
    { text: "&", y: 18, opacity: 0.82, blur: 0.7 },
    { text: "AI-native", y: 26, opacity: 0.76, blur: 1, break: true },
    { text: "platforms.", y: 40, opacity: 0.68, blur: 1.5 },
  ],
  subhead:
    "Software Engineer, 4 years — currently lead engineer on a multi-channel enterprise voice-AI platform and sole technical owner of a 17-repo SaaS codebase. IIT Roorkee.",
  primaryCta: { label: "View Work", href: "#work" },
  secondaryCta: { label: "Download Résumé", href: "/resume.pdf" },
};

export const impactStats = [
  { value: 164, suffix: "×", label: "FACE-MATCH SPEEDUP" },
  { value: 97, suffix: "%", label: "TRANSCRIPT ACCURACY" },
  { value: 13, suffix: "", label: "SECURITY VULNS CLOSED" },
  { value: 95, suffix: "%+", label: "FACE-ID ACCURACY" },
  { value: 40, suffix: "%", label: "FASTER SEARCH INDEXING — ARTHINK AI" },
  { value: 4, suffix: "", label: "YEARS SHIPPING PRODUCTION CODE" },
];

export const about = {
  eyebrow: "ABOUT",
  heading: "Background",
  lead: "I'm a Software Engineer with 4 years building production AI systems and full-stack platforms. Lead engineer on a multi-channel, multilingual Voice AI platform delivering sub-400ms latency and 97% transcript accuracy for enterprise airline and contact-centre clients — backed by end-to-end ownership of a 17-repo multi-tenant SaaS platform on Azure. Earlier, I built chatbot and healthcare-PWA infrastructure at ARThink AI, automated enterprise HR workflows at SRM Software, and shipped production front-ends solo across four early-career ventures — e-commerce, EdTech, and hyperlocal retail. I also lead PR review and technical hiring for a 5-person engineering team, and I'm an IIT Roorkee Integrated M.Tech graduate.",
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
      body: "4 years, 4 companies — from founding engineer to enterprise platform owner.",
    },
  ],
};

export type Project = {
  slug: string;
  name: string;
  summary: string;
  tags: { label: string; accent?: boolean }[];
  accent: "teal" | "indigo" | "violet" | "amber" | "rose" | "sky";
  icon:
    | "network"
    | "phone"
    | "eye"
    | "video"
    | "scan-face"
    | "landmark"
    | "message-square"
    | "users"
    | "layers"
    | "shopping-cart"
    | "credit-card"
    | "store"
    | "heart-pulse";
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
  {
    slug: "oman-data-portal",
    name: "Central Bank of Oman Data Portal",
    summary: "Regulatory data-collection frontend, ~8,000 lines, 28-hour sprint.",
    tags: [{ label: "REACT" }, { label: "SHEETJS" }],
    accent: "sky",
    icon: "landmark",
  },
];

// ARThink AI — full-time role, Jan 2024–Jan 2025. Same public-résumé sourcing.
export const arthinkProjects: Project[] = [
  {
    slug: "quadzai",
    name: "QuadzAI",
    summary: "Intelligent chatbot platform — ARThink AI.",
    tags: [{ label: "CHROMADB", accent: true }, { label: "PINECONE" }],
    accent: "teal",
    icon: "message-square",
  },
  {
    slug: "onfit-ai",
    name: "OnFit AI",
    summary: "Healthcare PWA and mobile app, real-time patient tooling.",
    tags: [{ label: "WEBRTC" }, { label: "FIREBASE" }],
    accent: "violet",
    icon: "heart-pulse",
  },
  {
    slug: "telangana-govt-widget",
    name: "Telangana Government Widget Programme",
    summary: "Real-time tracking for state social schemes.",
    tags: [{ label: "NODE.JS" }, { label: "REST APIS" }],
    accent: "amber",
    icon: "landmark",
  },
];

// Before ARThink AI — SRM Software and five early-career ventures/internships.
export const earlyCareerProjects: Project[] = [
  {
    slug: "srm-hr-automation",
    name: "HR Workflow Automation",
    summary: "Enterprise HR tooling — SRM Software Inc.",
    tags: [{ label: "GROOVY" }, { label: "ANGULAR" }],
    accent: "indigo",
    icon: "users",
  },
  {
    slug: "tradebuilder",
    name: "Tradebuilder Technologies",
    summary: "E-commerce dashboards and order management.",
    tags: [{ label: "NEXT.JS" }, { label: "NODE.JS" }],
    accent: "amber",
    icon: "shopping-cart",
  },
  {
    slug: "adwaita-educare",
    name: "Adwaita Educare",
    summary: "OTP auth and payments for an EdTech platform.",
    tags: [{ label: "JWT" }, { label: "RAZORPAY" }],
    accent: "violet",
    icon: "credit-card",
  },
  {
    slug: "zixwer",
    name: "Zixwer",
    summary: "Founding front-end engineer, zero to production.",
    tags: [{ label: "FOUNDING ENGINEER" }],
    accent: "teal",
    icon: "layers",
  },
  {
    slug: "bechho",
    name: "Bechho",
    summary: "Hyperlocal business platform, sole front-end developer.",
    tags: [{ label: "SOLO PROJECT" }],
    accent: "indigo",
    icon: "store",
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
  "oman-data-portal": {
    problem:
      "A central bank needed a regulatory data-collection portal with multi-role access and strict spreadsheet validation, on a very tight timeline.",
    approach:
      "Delivered the full frontend (~8,000 lines of TypeScript/React) in a 28-hour sprint — multi-role authentication across 4 user roles and a SheetJS Excel validation engine enforcing 15+ regulatory compliance rules.",
    stack: ["REACT", "TYPESCRIPT", "SHEETJS"],
    outcome: "Shipped and deployed to a production VM within the sprint window, across 4 distinct user roles.",
  },
  quadzai: {
    problem: "An intelligent chatbot platform needed accurate semantic search and fast content indexing.",
    approach:
      "Built Python vector-search APIs on ChromaDB and Pinecone for semantic search, integrated OpenAI LLMs for context-aware responses, and shipped Node.js APIs for web scraping, PDF text extraction, and MongoDB storage.",
    stack: ["PYTHON", "CHROMADB", "PINECONE", "NODE.JS", "MONGODB"],
    outcome: "25% more accurate search results, 40% faster indexing.",
  },
  "srm-hr-automation": {
    problem: "Manual HR workflows on a production-grade enterprise tool were slow and error-prone.",
    approach:
      "Automated HR workflows with Groovy scripting and enhanced the Angular-based frontend serving the tool.",
    stack: ["GROOVY", "ANGULAR"],
    outcome: "60% fewer manual tasks, 99.9% uptime maintained, client satisfaction up 25%.",
  },
  zixwer: {
    problem: "A young company needed front-end architecture and product delivery across three different verticals at once.",
    approach:
      "Took founding-engineer ownership of front-end architecture and product development across educational, construction, and travel-management platforms, from zero to production.",
    stack: ["FRONT-END ARCHITECTURE"],
    outcome: "Three production platforms shipped as the sole founding front-end engineer.",
  },
  tradebuilder: {
    problem: "An e-commerce operation needed real-time order visibility and a reliable admin dashboard.",
    approach: "Built Next.js/Node.js e-commerce dashboards and real-time order-management APIs.",
    stack: ["NEXT.JS", "NODE.JS"],
    outcome: "30% reduction in reported downtime.",
  },
  "adwaita-educare": {
    problem: "An EdTech platform needed reliable onboarding and payment collection.",
    approach: "Implemented OTP-based registration with JWT authentication and Razorpay payment integration.",
    stack: ["JWT", "RAZORPAY"],
    outcome: "30% higher onboarding success rate.",
  },
  bechho: {
    problem: "A hyperlocal business platform needed a front-end built from scratch, solo.",
    approach: "Delivered the complete front-end as the sole front-end developer on the project.",
    stack: ["SOLO PROJECT"],
    outcome: "Hyperlocal business management platform shipped end-to-end by one developer.",
  },
  "onfit-ai": {
    problem:
      "A healthcare PWA and mobile app needed reliable real-time communication, secure push notifications, and enterprise-grade patient features across web and Android.",
    approach:
      "Built Socket.IO real-time infrastructure and a two-user WebRTC video-consultation PoC, upgraded Firebase Cloud Messaging to HTTPS v1, automated Android releases via Expo EAS, and shipped file-sharing, real-time patient dashboards, and Google Fit integration.",
    stack: ["SOCKET.IO", "WEBRTC", "FIREBASE", "EXPO EAS"],
    outcome: "99% uptime, 30% lower data-breach risk, 50% less manual deployment effort.",
  },
  "telangana-govt-widget": {
    problem:
      "Government social schemes across rural and remote regions had no real-time tracking or multi-platform reporting infrastructure.",
    approach:
      "Designed a scalable backend architecture and high-performance data APIs for real-time scheme tracking and multi-platform policy reporting.",
    stack: ["NODE.JS", "REST APIS"],
    outcome: "40% fewer administrative delays, real-time visibility into scheme delivery.",
  },
};

export type WorkChapter = {
  slug: string;
  eyebrow: string;
  heading: string;
  subhead: string;
  projects: Project[];
};

export const workChapters: WorkChapter[] = [
  {
    slug: "aionos",
    eyebrow: "2025 — NOW",
    heading: "AionOS",
    subhead: "Click a card for the full case study.",
    projects,
  },
  {
    slug: "arthink",
    eyebrow: "2024 — 2025",
    heading: "ARThink AI",
    subhead: "Chatbots, a healthcare PWA, and government data infrastructure.",
    projects: arthinkProjects,
  },
  {
    slug: "early-career",
    eyebrow: "2020 — 2023",
    heading: "Early Career",
    subhead: "SRM Software and four early-career ventures.",
    projects: earlyCareerProjects,
  },
];

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
