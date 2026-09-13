import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Project, WorkChapter } from "@/lib/content";
import { ProjectCard } from "@/components/ProjectCard";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { Carousel, CarouselContent, CarouselItem, useCarousel } from "@/components/ui/carousel";
import { cn } from "cn";

function CarouselControls({ count }: { count: number }) {
  const { api, scrollPrev, scrollNext, canScrollPrev, canScrollNext } = useCarousel();
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setSelected(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  return (
    <div className="mt-6 flex items-center justify-between">
      <div className="flex gap-2">
        {Array.from({ length: count }).map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => api?.scrollTo(i)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              i === selected ? "w-6 bg-(--signal)" : "w-1.5 bg-white/20 hover:bg-white/35",
            )}
          />
        ))}
      </div>
      <div className="flex gap-2">
        <button
          type="button"
          aria-label="Previous"
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          className="glass-pill flex h-9 w-9 items-center justify-center rounded-full text-white/75 transition-colors hover:text-(--signal) disabled:opacity-30"
        >
          <ChevronLeft size={17} />
        </button>
        <button
          type="button"
          aria-label="Next"
          onClick={scrollNext}
          disabled={!canScrollNext}
          className="glass-pill flex h-9 w-9 items-center justify-center rounded-full text-white/75 transition-colors hover:text-(--signal) disabled:opacity-30"
        >
          <ChevronRight size={17} />
        </button>
      </div>
    </div>
  );
}

export function ProjectCarousel({ chapter, className }: { chapter: WorkChapter; className?: string }) {
  return (
    <div className={className}>
      <Container>
        <Reveal>
          <Eyebrow>{chapter.eyebrow}</Eyebrow>
          <h2 className="text-[28px] font-semibold tracking-tight md:text-[36px]">{chapter.heading}</h2>
          <p className="mt-2 text-[14px] text-white/50">{chapter.subhead}</p>
        </Reveal>
      </Container>

      <Reveal>
        <Carousel opts={{ align: "start", loop: true }} className="mt-10 md:mt-12">
          <Container>
            <CarouselContent>
              {chapter.projects.map((project: Project) => (
                <CarouselItem key={project.slug} className="basis-[82%] sm:basis-1/2 md:basis-1/3">
                  <ProjectCard project={project} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Container>
          <Container>
            <CarouselControls count={chapter.projects.length} />
          </Container>
        </Carousel>
      </Reveal>
    </div>
  );
}
