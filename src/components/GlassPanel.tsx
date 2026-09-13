import { useRef } from "react";
import type { HTMLAttributes, MouseEvent } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/lib/use-media-query";

type GlassPanelProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart" | "onAnimationEnd" | "onAnimationIteration"
> & {
  interactive?: boolean;
};

const TILT_DEGREES = 10;

/**
 * The one glass recipe used everywhere — see docs/DESIGN-SYSTEM.md §4.
 * `interactive` panels get a live cursor-tracked 3D tilt (Framer Motion) on top
 * of the CSS glow/border hover recipe, replacing what used to be a single fixed
 * tilt angle applied uniformly on `:hover`.
 */
export function GlassPanel({ interactive, className, onMouseMove, onMouseLeave, ...props }: GlassPanelProps) {
  const reduced = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springRotateX = useSpring(rotateX, { stiffness: 250, damping: 22 });
  const springRotateY = useSpring(rotateY, { stiffness: 250, damping: 22 });

  const active = interactive && !reduced;

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (active) {
      const rect = e.currentTarget.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      rotateY.set(px * TILT_DEGREES);
      rotateX.set(-py * TILT_DEGREES);
    }
    onMouseMove?.(e);
  };

  const handleMouseLeave = (e: MouseEvent<HTMLDivElement>) => {
    rotateX.set(0);
    rotateY.set(0);
    onMouseLeave?.(e);
  };

  return (
    <motion.div
      ref={ref}
      className={cn("glass-panel", interactive && "glass-panel--interactive", className)}
      style={active ? { rotateX: springRotateX, rotateY: springRotateY, transformPerspective: 1000 } : undefined}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    />
  );
}
