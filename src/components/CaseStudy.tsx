import { caseStudy } from "@/lib/content";
import { GlassPanel } from "@/components/GlassPanel";

export function CaseStudy() {
  return (
    <GlassPanel className="mt-4 p-6 md:p-10">
      <span className="font-mono text-[11px] tracking-[0.2em] text-(--signal)">CASE STUDY — {caseStudy.name.toUpperCase()}</span>

      <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-3">
        <div>
          <h4 className="font-mono text-[11px] tracking-[0.16em] text-white/45">PROBLEM</h4>
          <p className="mt-2 text-[14.5px] leading-relaxed text-white/72">{caseStudy.problem}</p>
        </div>
        <div>
          <h4 className="font-mono text-[11px] tracking-[0.16em] text-white/45">APPROACH</h4>
          <p className="mt-2 text-[14.5px] leading-relaxed text-white/72">{caseStudy.approach}</p>
        </div>
        <div>
          <h4 className="font-mono text-[11px] tracking-[0.16em] text-white/45">OUTCOME</h4>
          <p className="mt-2 text-[14.5px] leading-relaxed text-white/72">{caseStudy.outcome}</p>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-2 border-t border-white/10 pt-6">
        {caseStudy.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[10px] tracking-[0.14em] text-white/55"
          >
            {tech}
          </span>
        ))}
      </div>
    </GlassPanel>
  );
}
