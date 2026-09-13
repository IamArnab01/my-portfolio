import type { Project } from "@/lib/content";
import { caseStudies } from "@/lib/content";
import { GlassPanel } from "@/components/GlassPanel";
import { ProjectCover } from "@/components/ProjectCover";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { cn } from "cn";

export function ProjectCard({ project }: { project: Project }) {
  const study = caseStudies[project.slug];

  return (
    <Dialog>
      {/* className="contents" keeps the real trigger button out of the grid's box model —
          the GlassPanel below still defines the visual card. */}
      <DialogTrigger className="contents">
        <GlassPanel
          interactive
          className={cn(
            "flex h-full cursor-pointer flex-col gap-4 p-6 text-left md:p-7",
            project.featured &&
              "border-(--signal)/40 [box-shadow:inset_1px_1px_0_var(--glass-edge-hover),0_0_60px_-12px_rgba(45,212,191,0.45)]",
          )}
        >
          <ProjectCover project={project} />
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
      </DialogTrigger>

      <DialogContent className="sm:max-w-2xl border border-white/10 bg-[#0b0d11]/98 text-white ring-0 backdrop-blur-xl">
        <DialogHeader>
          <ProjectCover project={project} />
          <DialogTitle className="mt-3 text-[22px] font-semibold tracking-tight text-white">
            {project.name}
          </DialogTitle>
          <DialogDescription className="text-[14px] text-white/62">
            {project.summary}
          </DialogDescription>
        </DialogHeader>

        {study && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div>
              <h4 className="font-mono text-[11px] tracking-[0.16em] text-white/45">PROBLEM</h4>
              <p className="mt-2 text-[13.5px] leading-relaxed text-white/72">{study.problem}</p>
            </div>
            <div>
              <h4 className="font-mono text-[11px] tracking-[0.16em] text-white/45">APPROACH</h4>
              <p className="mt-2 text-[13.5px] leading-relaxed text-white/72">{study.approach}</p>
            </div>
            <div>
              <h4 className="font-mono text-[11px] tracking-[0.16em] text-white/45">OUTCOME</h4>
              <p className="mt-2 text-[13.5px] leading-relaxed text-white/72">{study.outcome}</p>
            </div>
          </div>
        )}

        <div className="flex flex-wrap gap-2 border-t border-white/10 pt-4">
          {(study?.stack ?? project.tags.map((t) => t.label)).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[10px] tracking-[0.14em] text-white/55"
            >
              {tech}
            </span>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
