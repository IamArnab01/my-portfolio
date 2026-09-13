import {
  Network,
  Phone,
  Eye,
  Video,
  ScanFace,
  Landmark,
  MessageSquare,
  Users,
  Layers,
  ShoppingCart,
  CreditCard,
  Store,
  type LucideIcon,
} from "lucide-react";
import type { Project } from "@/lib/content";
import { cn } from "cn";

// Abstract cover art, not real product screenshots — AionOS product UIs are
// proprietary, so each project gets a distinct on-brand gradient + icon instead.
const ICONS: Record<Project["icon"], LucideIcon> = {
  network: Network,
  phone: Phone,
  eye: Eye,
  video: Video,
  "scan-face": ScanFace,
  landmark: Landmark,
  "message-square": MessageSquare,
  users: Users,
  layers: Layers,
  "shopping-cart": ShoppingCart,
  "credit-card": CreditCard,
  store: Store,
};

const GRADIENTS: Record<Project["accent"], string> = {
  teal: "linear-gradient(145deg, rgba(45,212,191,.32), rgba(45,212,191,.02))",
  indigo: "linear-gradient(145deg, rgba(59,76,203,.38), rgba(59,76,203,.02))",
  violet: "linear-gradient(145deg, rgba(167,85,221,.34), rgba(167,85,221,.02))",
  amber: "linear-gradient(145deg, rgba(217,155,45,.34), rgba(217,155,45,.02))",
  rose: "linear-gradient(145deg, rgba(224,74,122,.34), rgba(224,74,122,.02))",
  sky: "linear-gradient(145deg, rgba(56,169,224,.34), rgba(56,169,224,.02))",
};

const ICON_COLOR: Record<Project["accent"], string> = {
  teal: "#5eead4",
  indigo: "#8b9bf0",
  violet: "#c89bf0",
  amber: "#f0c675",
  rose: "#f296b4",
  sky: "#7dd3fc",
};

export function ProjectCover({ project, className }: { project: Project; className?: string }) {
  const Icon = ICONS[project.icon];
  return (
    <div
      className={cn(
        "relative flex h-32 items-center justify-center overflow-hidden rounded-xl border border-white/8",
        className,
      )}
      style={{ background: GRADIENTS[project.accent] }}
      aria-hidden
    >
      <Icon size={44} strokeWidth={1.25} color={ICON_COLOR[project.accent]} />
    </div>
  );
}
