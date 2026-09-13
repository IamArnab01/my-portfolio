import { workChapters } from "@/lib/content";
import { ProjectCarousel } from "@/components/ProjectCarousel";

export function Projects() {
  return (
    <section id="work" className="scroll-mt-28 py-12 md:py-16">
      <div className="flex flex-col gap-14 md:gap-20">
        {workChapters.map((chapter) => (
          <ProjectCarousel key={chapter.slug} chapter={chapter} />
        ))}
      </div>
    </section>
  );
}
