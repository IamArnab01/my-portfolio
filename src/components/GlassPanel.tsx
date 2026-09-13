import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type GlassPanelProps = HTMLAttributes<HTMLDivElement> & {
  interactive?: boolean;
};

/** The one glass recipe used everywhere — see docs/DESIGN-SYSTEM.md §4. */
export function GlassPanel({ interactive, className, ...props }: GlassPanelProps) {
  return (
    <div
      className={cn("glass-panel", interactive && "glass-panel--interactive", className)}
      {...props}
    />
  );
}
