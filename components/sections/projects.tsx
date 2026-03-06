"use client";

import { SectionWrapper } from "@/components/animations/section-wrapper";
import { BlurFade } from "@/components/magicui/blur-fade";
import { ExpandableCard } from "@/components/animations/expandable-card";
import { projects } from "@/lib/data";
import { Github } from "lucide-react";

export function Projects() {
  return (
    <SectionWrapper
      id="projects"
      className="relative mx-auto max-w-5xl px-6 py-16 md:py-20"
    >
      <BlurFade delay={0.1}>
        <h2 className="text-3xl font-bold sm:text-4xl font-display">
          Projects
        </h2>
      </BlurFade>

      <div className="mt-10 grid grid-rows-subgrid gap-4 sm:grid-cols-2">
        {projects.map((project, index) => (
          <BlurFade key={project.title} delay={0.15 + index * 0.1} className="flex">
            <ExpandableCard
              className="flex-1"
              expandedContent={
                <ul className="space-y-2">
                  {project.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/50" />
                      {detail}
                    </li>
                  ))}
                </ul>
              }
            >
              <h3 className="text-lg font-semibold text-foreground">
                {project.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border px-2.5 py-0.5 text-xs font-mono text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-muted-foreground"
              >
                <Github size={14} />
                View on GitHub
              </a>
            </ExpandableCard>
          </BlurFade>
        ))}
      </div>
    </SectionWrapper>
  );
}
