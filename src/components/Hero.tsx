import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { hero } from "@/lib/content";
import { MagneticButton } from "@/components/MagneticButton";
import { Container } from "@/components/Container";
import { usePrefersReducedMotion } from "@/lib/use-media-query";

const CHAR_STEP = 0.022; // seconds between each character starting to type in

export function Hero() {
  const reduced = usePrefersReducedMotion();
  let charIndex = 0;

  return (
    <Container as="header" className="pt-8 pb-10 sm:pt-28 md:pt-[136px] md:pb-14">
      <div className="glass-pill mb-8 inline-flex items-center gap-2.5 rounded-full py-2 pr-4 pl-3.5 font-mono text-[11px] tracking-[0.2em] text-white/78">
        <span
          className="h-[7px] w-[7px] rounded-full bg-(--signal)"
          style={{ animation: reduced ? "none" : "pulseDot 2.6s ease-in-out infinite" }}
        />
        {hero.status}
      </div>

      <h1 className="max-w-[9ch] text-left text-[42px] leading-[1.08] font-semibold tracking-[-0.032em] text-balance md:max-w-none md:text-[96px] md:leading-[1.02] md:tracking-[-0.038em]">
        {hero.headlineWords.reduce<ReactNode[]>((acc, word, wi) => {
          // No leading margin for the first word of a line — that includes word 0
          // AND whichever word follows a `break`, or its line starts indented.
          const startsNewLine = wi === 0 || hero.headlineWords[wi - 1]?.break;
          // A literal space (not a margin) so a word that wraps onto its own row
          // on narrow screens — without an explicit <br> — starts flush left:
          // browsers collapse whitespace at a line-wrap point, a margin doesn't.
          if (!startsNewLine) acc.push(" ");
          acc.push(
            <span key={`word-${wi}`} className="inline-block">
              {word.text.split("").map((char, ci) => {
                const delay = 0.1 + charIndex * CHAR_STEP;
                charIndex += 1;
                return (
                  <motion.span
                    key={ci}
                    className={`inline-block ${word.accent ? "text-(--signal)" : ""}`}
                    // Typed in left-to-right, then settles into a permanent per-word
                    // depth-of-field: later words in the line stay softly blurred/faded
                    // rather than sharpening up — that's the resting state, not a bug.
                    initial={reduced ? false : { opacity: 0, filter: "blur(10px)" }}
                    animate={{ opacity: word.opacity, filter: `blur(${word.blur}px)` }}
                    transition={{ duration: 0.35, delay, ease: "easeOut" }}
                  >
                    {char}
                  </motion.span>
                );
              })}
            </span>,
          );
          if (word.break) acc.push(<br key={`br-${wi}`} />);
          return acc;
        }, [])}
      </h1>

      <p className="mt-6 text-[15.5px] leading-relaxed text-white/62 md:mt-8 md:text-[17px]">
        {hero.subhead}
      </p>

      <div className="mt-7 flex flex-col gap-2.5 sm:flex-row sm:gap-4 md:mt-10">
        <MagneticButton href={hero.primaryCta.href} variant="primary">
          {hero.primaryCta.label}
        </MagneticButton>
        <MagneticButton href={hero.secondaryCta.href} variant="secondary" external>
          {hero.secondaryCta.label}
        </MagneticButton>
      </div>
    </Container>
  );
}
