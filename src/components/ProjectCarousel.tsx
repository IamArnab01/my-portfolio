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
    // Dots and arrows grouped together (not pinned to opposite edges) so
    // related navigation controls don't force the eye across the whole row;
    // each dot's clickable area is larger than its visual size for touch targets.
    <div className="mt-6 flex items-center justify-center gap-6">
      <div className="flex gap-1">
        {Array.from({ length: count }).map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => api?.scrollTo(i)}
            className="flex h-6 w-6 items-center justify-center"
          >
            <span
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                i === selected ? "w-7 bg-(--signal)" : "w-2 bg-white/25 hover:bg-white/40",
              )}
            />
          </button>
        ))}
      </div>
      <div className="flex gap-2">
        <button
          type="button"
          aria-label="Previous"
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          className="glass-pill flex h-11 w-11 items-center justify-center rounded-full text-white/75 transition-colors hover:text-(--signal) disabled:opacity-30"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          type="button"
          aria-label="Next"
          onClick={scrollNext}
          disabled={!canScrollNext}
          className="glass-pill flex h-11 w-11 items-center justify-center rounded-full text-white/75 transition-colors hover:text-(--signal) disabled:opacity-30"
        >
          <ChevronRight size={18} />
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
        <Carousel opts={{ align: "start", loop: true }} className="mt-6 md:mt-12">
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
