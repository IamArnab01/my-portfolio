import { impactStats } from "@/lib/content";
import { GlassPanel } from "@/components/GlassPanel";
import { StatCounter } from "@/components/StatCounter";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";

export function ImpactStrip() {
  return (
    <section className="py-10 md:py-14">
      <Container>
        <Eyebrow>IMPACT</Eyebrow>
        <Reveal stagger className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {impactStats.map((stat) => (
            <GlassPanel key={stat.label} className="px-5 py-6 text-center md:px-6 md:py-8">
              <div className="text-[30px] font-semibold tracking-tight text-(--signal) md:text-[40px]">
                <StatCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-2 font-mono text-[10px] tracking-[0.16em] text-white/50 md:text-[11px]">
                {stat.label}
              </div>
            </GlassPanel>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
