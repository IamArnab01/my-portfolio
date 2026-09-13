import type { Project } from "@/lib/content";
import { GlassPanel } from "@/components/GlassPanel";
import { cn } from "cn";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <GlassPanel
      interactive
      className={cn(
        "flex flex-col gap-4 p-6 md:p-7",
        project.featured && "border-(--signal)/40 [box-shadow:inset_1px_1px_0_var(--glass-edge-hover),0_0_60px_-12px_rgba(45,212,191,0.45)]",
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-[19px] font-semibold tracking-tight">{project.name}</h3>
        <span className="glass-panel__arrow text-(--signal)" aria-hidden>
          ↗
        </span>
      </div>
      <p className="text-[14px] leading-relaxed text-white/62">{project.summary}</p>
      <div className="mt-auto flex flex-wrap gap-2 pt-2">
        {project.tags.map((tag) => (
          <span
            key={tag.label}
            className={cn(
              "rounded-full border px-2.5 py-1 font-mono text-[10px] tracking-[0.14em]",
              tag.accent
                ? "border-(--signal)/35 bg-(--signal)/8 text-(--signal)"
                : "border-white/10 bg-white/5 text-white/55",
            )}
          >
            {tag.label}
          </span>
        ))}
      </div>
    </GlassPanel>
  );
}
