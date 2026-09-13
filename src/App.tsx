import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AmbientBackground } from "@/components/AmbientBackground";
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
      <div className="relative">
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
