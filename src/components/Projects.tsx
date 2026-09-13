import { projects } from "@/lib/content";
import { ProjectCard } from "@/components/ProjectCard";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";

export function Projects() {
  return (
    <section id="work" className="scroll-mt-28 py-12 md:py-16">
      <Container>
        <Reveal>
          <Eyebrow>WORK</Eyebrow>
          <h2 className="text-[28px] font-semibold tracking-tight md:text-[36px]">Featured Work</h2>
          <p className="mt-2 text-[14px] text-white/50">Click a card for the full case study.</p>
        </Reveal>

        <Reveal stagger className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-12 md:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
