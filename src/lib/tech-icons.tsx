import type { ComponentType } from "react";
import {
  SiPython,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiFastapi,
  SiDjango,
  SiFlask,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiPostgresql,
  SiRedis,
  SiDocker,
  SiGooglecloud,
  SiGit,
  SiGithub,
  SiGoogleplay,
  SiWebrtc,
  SiJsonwebtokens,
  SiOpencv,
  SiYolo,
  SiLivekit,
} from "react-icons/si";
import {
  Cloud,
  PhoneCall,
  Phone,
  Headset,
  Building2,
  AudioWaveform,
  ShieldCheck,
  Webhook,
  ScanFace,
  ScanEye,
  Smartphone,
  AudioLines,
  Captions,
  Volume2,
  BrainCircuit,
  Repeat,
} from "lucide-react";

type IconEntry = { Icon: ComponentType<{ size?: number; color?: string; className?: string }>; color: string };

// Real brand marks where simple-icons has one; a themed lucide glyph
// otherwise (no logo exists for a protocol like SIP, or a niche/regional
// vendor like CZentrix — this is the honest gap, not a missed lookup).
export const TECH_ICONS: Record<string, IconEntry> = {
  // Languages
  Python: { Icon: SiPython, color: "#3776AB" },
  TypeScript: { Icon: SiTypescript, color: "#3178C6" },
  JavaScript: { Icon: SiJavascript, color: "#F7DF1E" },
  HTML: { Icon: SiHtml5, color: "#E34F26" },
  CSS: { Icon: SiCss, color: "#663399" },

  // Frontend
  React: { Icon: SiReact, color: "#61DAFB" },
  "Next.js": { Icon: SiNextdotjs, color: "#ffffff" },
  "React Native": { Icon: Smartphone, color: "#61DAFB" },
  "Tailwind CSS": { Icon: SiTailwindcss, color: "#38BDF8" },

  // Backend
  FastAPI: { Icon: SiFastapi, color: "#009688" },
  Django: { Icon: SiDjango, color: "#44B78B" },
  Flask: { Icon: SiFlask, color: "#ffffff" },
  PostgreSQL: { Icon: SiPostgresql, color: "#4169E1" },
  Redis: { Icon: SiRedis, color: "#DC382D" },

  // Cloud & tooling
  Docker: { Icon: SiDocker, color: "#2496ED" },
  Azure: { Icon: Cloud, color: "#0078D4" },
  GCP: { Icon: SiGooglecloud, color: "#4285F4" },
  Git: { Icon: SiGit, color: "#F05032" },
  GitHub: { Icon: SiGithub, color: "#ffffff" },
  "Play Console": { Icon: SiGoogleplay, color: "#01875F" },

  // Voice & telephony
  LiveKit: { Icon: SiLivekit, color: "#FF3B7F" },
  Twilio: { Icon: PhoneCall, color: "#F22F46" },
  WebRTC: { Icon: SiWebrtc, color: "#66CC00" },
  SIP: { Icon: Phone, color: "#A78BFA" },
  Genesys: { Icon: Headset, color: "#FF4F1F" },
  CZentrix: { Icon: Building2, color: "#A78BFA" },

  // Conversational AI
  "Azure OpenAI Realtime": { Icon: AudioWaveform, color: "#A78BFA" },
  Ultravox: { Icon: AudioLines, color: "#F472B6" },
  STT: { Icon: Captions, color: "#8B5CF6" },
  TTS: { Icon: Volume2, color: "#8B5CF6" },
  LLM: { Icon: BrainCircuit, color: "#A78BFA" },
  STS: { Icon: Repeat, color: "#F472B6" },

  // Security
  JWT: { Icon: SiJsonwebtokens, color: "#ffffff" },
  RBAC: { Icon: ShieldCheck, color: "#8B5CF6" },
  OAuth2: { Icon: ShieldCheck, color: "#8B5CF6" },
  "Webhook HMAC": { Icon: Webhook, color: "#8B5CF6" },

  // Computer vision
  YOLOv8: { Icon: SiYolo, color: "#7C8CF8" },
  DeepFace: { Icon: ScanFace, color: "#F472B6" },
  InsightFace: { Icon: ScanEye, color: "#F472B6" },
  OpenCV: { Icon: SiOpencv, color: "#8B7CF6" },
};
