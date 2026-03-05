"use client";

import { SectionWrapper } from "@/components/animations/section-wrapper";
import { BlurFade } from "@/components/magicui/blur-fade";
import { MagicCard } from "@/components/magicui/magic-card";
import { projects } from "@/lib/data";
import { Github } from "lucide-react";

export function Projects() {
  return (
    <SectionWrapper
      id="projects"
      className="relative mx-auto max-w-5xl px-6 py-24 md:py-32"
    >
      <BlurFade delay={0.1}>
        <h2 className="text-3xl font-bold sm:text-4xl">
          <span className="text-accent">Projects</span>
        </h2>
      </BlurFade>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <BlurFade key={project.title} delay={0.15 + index * 0.1}>
            <MagicCard className="flex h-full flex-col">
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-bold text-foreground">
                  {project.title}
                </h3>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-accent"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <Github size={18} />
                </a>
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border px-2.5 py-0.5 text-xs font-mono text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </MagicCard>
          </BlurFade>
        ))}
      </div>
    </SectionWrapper>
  );
}
