import { timeline } from "@/lib/content";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { cn } from "cn";

// Each row fades back a step — from the full glass-panel recipe down to plain borders.
const ROW_STYLES = [
  "glass-panel",
  "rounded-[14px] border border-white/6 bg-white/[0.04] backdrop-blur-lg",
  "rounded-[14px] border border-white/5 bg-white/[0.025]",
  "rounded-[14px] border border-white/4 bg-white/[0.015]",
];

export function Timeline() {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <Reveal>
          <Eyebrow>TIMELINE</Eyebrow>
          <h2 className="text-[28px] font-semibold tracking-tight md:text-[36px]">Career Timeline</h2>
        </Reveal>

        <Reveal stagger className="mt-10 flex max-w-[900px] flex-col gap-3 md:mt-12">
          {timeline.map((entry, i) => (
            <div
              key={entry.company + entry.date}
              className={cn(
                "grid grid-cols-1 gap-1 p-5 sm:grid-cols-[180px_1fr] sm:gap-6 md:p-7",
                ROW_STYLES[i],
              )}
            >
              <span className="font-mono text-[11px] tracking-[0.16em] text-white/45">{entry.date}</span>
              <div>
                <h3 className="text-[16px] font-semibold">
                  {entry.role} · <span className="text-white/60">{entry.company}</span>
                </h3>
                <p className="mt-1.5 text-[14px] leading-relaxed text-white/58">{entry.body}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
