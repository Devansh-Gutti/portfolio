import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Research } from "@/components/sections/research";
import { Education } from "@/components/sections/education";
import { Technologies } from "@/components/sections/technologies";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";
import { FloatingNavWrapper } from "@/components/nav/floating-nav-wrapper";

export default function Home() {
  return (
    <>
      <FloatingNavWrapper />
      <main>
        <Hero />
        <About />
        <Experience />
        <Research />
        <Education />
        <Technologies />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
