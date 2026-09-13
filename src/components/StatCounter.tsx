import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePrefersReducedMotion } from "@/lib/use-media-query";

gsap.registerPlugin(ScrollTrigger);

export function StatCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reduced) {
      el.textContent = `${value}${suffix}`;
      return;
    }

    const counter = { n: 0 };
    const tween = gsap.to(counter, {
      n: value,
      duration: 1.6,
      ease: "power2.out",
      onUpdate: () => {
        el.textContent = `${Math.round(counter.n)}${suffix}`;
      },
      scrollTrigger: { trigger: el, start: "top 85%", once: true },
    });

    // ScrollTrigger's ticker doesn't run in headless/print capture — force the final value.
    const fallback = setTimeout(() => {
      el.textContent = `${value}${suffix}`;
    }, 2000);

    return () => {
      tween.kill();
      clearTimeout(fallback);
    };
  }, [value, suffix, reduced]);

  return <span ref={ref}>0{suffix}</span>;
}
