import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
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
        <Projects />
        <Contact />
      </main>
    </>
  );
}
