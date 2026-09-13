import { projects } from "@/lib/content";
import { ProjectCard } from "@/components/ProjectCard";
import { CaseStudy } from "@/components/CaseStudy";

export function Projects() {
  return (
    <section id="work" className="mx-auto max-w-[1100px] px-6 py-24 md:px-0 md:py-32">
      <h2 className="text-[28px] font-semibold tracking-tight md:text-[36px]">Featured Work</h2>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-14 md:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      <CaseStudy />
    </section>
  );
}
