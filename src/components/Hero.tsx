import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { hero } from "@/lib/content";
import { MagneticButton } from "@/components/MagneticButton";
import { usePrefersReducedMotion } from "@/lib/use-media-query";

export function Hero() {
  const reduced = usePrefersReducedMotion();

  return (
    <header className="mx-auto max-w-[1000px] px-6 pt-24 pb-20 md:px-0 md:pt-[118px] md:pb-24">
      <div className="glass-pill mb-8 inline-flex items-center gap-2.5 rounded-full py-2 pr-4 pl-3.5 font-mono text-[11px] tracking-[0.2em] text-white/78">
        <span
          className="h-[7px] w-[7px] rounded-full bg-(--signal)"
          style={{ animation: reduced ? "none" : "pulseDot 2.6s ease-in-out infinite" }}
        />
        {hero.status}
      </div>

      <h1 className="max-w-[9ch] text-[42px] leading-[1.08] font-semibold tracking-[-0.032em] text-balance md:max-w-none md:text-[96px] md:leading-[1.02] md:tracking-[-0.038em]">
        {hero.headlineWords.map((word, i) => (
          <motion.span
            key={word.text}
            className={`inline-block ${word.accent ? "text-(--signal)" : ""} ${i > 0 ? "ml-[0.28em]" : ""}`}
            initial={reduced ? false : { y: word.y, opacity: word.opacity, filter: `blur(${word.blur}px)` }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 0.15 + i * 0.08, ease: [0.2, 0.8, 0.2, 1] }}
          >
            {word.text}
          </motion.span>
        )).reduce<ReactNode[]>((acc, span, i) => {
          acc.push(span);
          if (hero.headlineWords[i].break) acc.push(<br key={`br-${i}`} />);
          return acc;
        }, [])}
      </h1>

      <p className="mt-13 max-w-[620px] text-[15.5px] leading-relaxed text-white/62 text-balance md:mt-19 md:text-[19px]">
        {hero.subhead}
      </p>

      <div className="mt-7 flex flex-col gap-2.5 sm:flex-row sm:gap-4 md:mt-10">
        <MagneticButton href={hero.primaryCta.href} variant="primary">
          {hero.primaryCta.label}
        </MagneticButton>
        <MagneticButton href={hero.secondaryCta.href} variant="secondary">
          {hero.secondaryCta.label}
        </MagneticButton>
      </div>
    </header>
  );
}
