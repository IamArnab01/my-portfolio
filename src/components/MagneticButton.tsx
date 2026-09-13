import { motion, useMotionValue, useSpring } from "framer-motion";
import type { ReactNode, MouseEvent } from "react";
import { cn } from "cn";
import { usePrefersReducedMotion } from "@/lib/use-media-query";

type MagneticButtonProps = {
  href: string;
  variant: "primary" | "secondary";
  children: ReactNode;
  className?: string;
  external?: boolean;
};

/** Shifts toward the cursor within its own bounds, springs back on leave.
 *  See docs/DESIGN-SYSTEM.md §6 — offset is 0.25x/0.35x of cursor delta. */
export function MagneticButton({ href, variant, children, className, external }: MagneticButtonProps) {
  const reduced = usePrefersReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 300, damping: 20, mass: 0.5 });

  const onMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
    if (reduced) return;
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * 0.25);
    y.set((e.clientY - (rect.top + rect.height / 2)) * 0.35);
  };
  const onMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={reduced ? undefined : { x: springX, y: springY }}
      className={cn(
        "inline-flex items-center justify-center rounded-xl px-8 py-4 text-[15px] font-semibold transition-colors",
        variant === "primary"
          ? "bg-(--signal) text-(--signal-ink) shadow-[0_18px_50px_-18px_rgba(45,212,191,0.7)]"
          : "glass-pill font-medium text-white/90",
        className,
      )}
    >
      {children}
    </motion.a>
  );
}
