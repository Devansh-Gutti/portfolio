import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Research } from "@/components/sections/research";
import { Education } from "@/components/sections/education";
import { Technologies } from "@/components/sections/technologies";
import { Projects } from "@/components/sections/projects";
import { FloatingNavWrapper } from "@/components/nav/floating-nav-wrapper";
import { Background } from "@/components/providers/background";

export default function Home() {
  return (
    <>
      <Background />
      <FloatingNavWrapper />
      <main>
        <Hero />
        <About />
        <Experience />
        <Research />
        <Education />
        <Technologies />
        <Projects />
      </main>
    </>
  );
}
