import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AmbientBackground } from "@/components/AmbientBackground";
import { HeroParticles } from "@/components/HeroParticles";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { ImpactStrip } from "@/components/ImpactStrip";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Timeline } from "@/components/Timeline";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";

function App() {
  useEffect(() => {
    // Every section registers its own ScrollTrigger independently on mount;
    // one refresh once the whole tree (and web fonts) has settled keeps their
    // trigger positions honest against the final page height.
    const id = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div className="relative min-h-screen">
      <AmbientBackground />
      {/* Spans from the very top of the page (behind the floating nav pill,
          not scoped to Hero's own padded content box) so it reads as one
          continuous band rather than starting wherever Hero's text does. */}
      <HeroParticles />
      <div className="relative z-10">
        <Nav />
        <Hero />
        <ImpactStrip />
        <About />
        <Projects />
        <Timeline />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default App;
