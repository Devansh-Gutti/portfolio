"use client";

import { SectionWrapper } from "@/components/animations/section-wrapper";
import { BlurFade } from "@/components/magicui/blur-fade";
import { ExpandableCard } from "@/components/animations/expandable-card";
import { experiences } from "@/lib/data";

export function Experience() {
  return (
    <SectionWrapper
      id="experience"
      className="relative mx-auto max-w-5xl px-6 py-24 md:py-32"
    >
      <BlurFade delay={0.1}>
        <h2 className="text-3xl font-bold sm:text-4xl font-display">
          Experience
        </h2>
      </BlurFade>

      <div className="mt-10 flex flex-col gap-4">
        {experiences.map((exp, index) => (
          <BlurFade key={exp.company + exp.role} delay={0.15 + index * 0.1}>
            <ExpandableCard
              expandedContent={
                <div className="space-y-4">
                  <ul className="space-y-2">
                    {exp.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/50" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border bg-background px-2.5 py-0.5 text-xs font-mono text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              }
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {exp.company}
                  </h3>
                  <p className="text-sm text-muted-foreground">{exp.role}</p>
                </div>
                <span className="text-xs font-mono text-muted-foreground shrink-0">
                  {exp.period}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {exp.description}
              </p>
            </ExpandableCard>
          </BlurFade>
        ))}
      </div>
    </SectionWrapper>
  );
}
