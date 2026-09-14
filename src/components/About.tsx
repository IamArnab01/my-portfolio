import { about } from "@/lib/content";
import { GlassPanel } from "@/components/GlassPanel";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <section id="about" className="scroll-mt-28 py-12 md:py-16">
      <Container>
        <Reveal>
          <Eyebrow>{about.eyebrow}</Eyebrow>
          <h2 className="text-[28px] font-semibold tracking-tight md:text-[36px]">{about.heading}</h2>
          {about.leadParagraphs.map((paragraph, i) => (
            <p key={i} className="mt-4 text-[15.5px] leading-relaxed text-white/62 md:text-[17px]">
              {paragraph}
            </p>
          ))}
        </Reveal>

        <Reveal stagger className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 md:mt-12 md:gap-4">
          {about.pillars.map((pillar) => (
            <GlassPanel key={pillar.index} interactive className="p-6 md:p-7">
              <span className="font-mono text-[11px] tracking-[0.2em] text-(--signal)">{pillar.index}</span>
              <h3 className="mt-3 text-[17px] font-semibold tracking-tight">{pillar.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-white/60">{pillar.body}</p>
            </GlassPanel>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
