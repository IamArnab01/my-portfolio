import { about } from "@/lib/content";
import { GlassPanel } from "@/components/GlassPanel";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-[1100px] px-6 py-24 md:px-0 md:py-32">
      <p className="max-w-[680px] text-[19px] leading-relaxed text-white/78 text-balance md:text-[23px]">
        {about.lead}
      </p>

      <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 md:mt-16 md:gap-4">
        {about.pillars.map((pillar) => (
          <GlassPanel key={pillar.index} interactive className="p-6 md:p-7">
            <span className="font-mono text-[11px] tracking-[0.2em] text-(--signal)">{pillar.index}</span>
            <h3 className="mt-3 text-[17px] font-semibold tracking-tight">{pillar.title}</h3>
            <p className="mt-2 text-[14px] leading-relaxed text-white/60">{pillar.body}</p>
          </GlassPanel>
        ))}
      </div>
    </section>
  );
}
