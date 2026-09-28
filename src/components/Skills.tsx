import { skills } from "@/lib/content";
import { GlassPanel } from "@/components/GlassPanel";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { TechOrbit } from "@/components/TechOrbit";
import { TECH_ICONS } from "@/lib/tech-icons";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-28 py-12 md:py-16">
      <Container>
        <Reveal>
          <Eyebrow>SKILLS</Eyebrow>
          <h2 className="text-[28px] font-semibold tracking-tight md:text-[36px]">Skills</h2>
        </Reveal>

        {/* Below md, the orbit's outer ring (10 items) crowds too tightly to
            read — the original grid stays as the small-screen layout. */}
        <Reveal stagger className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 md:hidden">
          {skills.map((group) => (
            <GlassPanel key={group.title} className="p-6 md:p-7">
              <h3 className="font-mono text-[11px] tracking-[0.18em] text-(--signal)">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => {
                  const entry = TECH_ICONS[item];
                  const Icon = entry?.Icon;
                  return (
                    <span
                      key={item}
                      className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[13px] text-white/75"
                    >
                      {Icon && <Icon size={14} color={entry.color} />}
                      {item}
                    </span>
                  );
                })}
              </div>
            </GlassPanel>
          ))}
        </Reveal>

        <Reveal className="mt-10 hidden md:block md:mt-12">
          <TechOrbit />
        </Reveal>
      </Container>
    </section>
  );
}
