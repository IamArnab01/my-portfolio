import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { hero } from "@/lib/content";
import { MagneticButton } from "@/components/MagneticButton";
import { Container } from "@/components/Container";
import { usePrefersReducedMotion } from "@/lib/use-media-query";

export function Hero() {
  const reduced = usePrefersReducedMotion();

  return (
    <Container as="header" className="pt-24 pb-16 md:pt-[110px] md:pb-20">
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
            initial={
              reduced
                ? false
                : {
                    y: word.y + 24,
                    opacity: Math.max(word.opacity - 0.4, 0),
                    filter: `blur(${word.blur + 6}px)`,
                  }
            }
            animate={{ y: word.y, opacity: word.opacity, filter: `blur(${word.blur}px)` }}
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

      <p className="mt-6 max-w-[560px] text-[15.5px] leading-relaxed text-white/62 md:mt-8 md:text-[17px]">
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
    </Container>
  );
}
