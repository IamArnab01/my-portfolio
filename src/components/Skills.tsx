import { skills } from "@/lib/content";
import { GlassPanel } from "@/components/GlassPanel";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-[1100px] px-6 py-24 md:px-0 md:py-32">
      <h2 className="text-[28px] font-semibold tracking-tight md:text-[36px]">Skills</h2>

      <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 md:mt-14 md:gap-4">
        {skills.map((group) => (
          <GlassPanel key={group.title} className="p-6 md:p-7">
            <h3 className="font-mono text-[11px] tracking-[0.18em] text-(--signal)">{group.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[13px] text-white/75"
                >
                  {item}
                </span>
              ))}
            </div>
          </GlassPanel>
        ))}
      </div>
    </section>
  );
}
