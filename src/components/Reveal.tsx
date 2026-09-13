import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePrefersReducedMotion } from "@/lib/use-media-query";

gsap.registerPlugin(ScrollTrigger);

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Animate each direct child individually, staggered, instead of the block as a whole. */
  stagger?: boolean;
};

// Fade + rise on scroll-into-view. GSAP owns scroll-driven work per the design system split
// (Framer Motion stays for direct component interaction like hover/press).
export function Reveal({ children, className, stagger = false }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced) return;

    const targets = stagger ? Array.from(el.children) : el;
    const tween = gsap.fromTo(
      targets,
      { opacity: 0, y: 28 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
        stagger: stagger ? 0.08 : 0,
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
      },
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [reduced, stagger]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
