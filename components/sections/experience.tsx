"use client";

import { SectionWrapper } from "@/components/animations/section-wrapper";
import { BlurFade } from "@/components/magicui/blur-fade";
import { TracingBeam } from "@/components/aceternityui/tracing-beam";
import { experiences } from "@/lib/data";

export function Experience() {
  return (
    <SectionWrapper
      id="experience"
      className="relative mx-auto max-w-5xl px-6 py-24 md:py-32"
    >
      <BlurFade delay={0.1}>
        <h2 className="text-3xl font-bold sm:text-4xl">
          <span className="text-accent">Experience</span>
        </h2>
      </BlurFade>

      <div className="mt-12">
        <TracingBeam>
          <div className="flex flex-col gap-12">
            {experiences.map((exp, index) => (
              <BlurFade key={exp.company} delay={0.15 + index * 0.1}>
                <div className="relative rounded-xl border border-border bg-card/50 p-6 backdrop-blur-sm transition-colors hover:border-accent/30">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">
                        {exp.company}
                      </h3>
                      <p className="text-sm font-medium text-accent">
                        {exp.role}
                      </p>
                    </div>
                    <span className="text-sm font-mono text-muted-foreground">
                      {exp.period}
                    </span>
                  </div>
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border bg-background px-3 py-1 text-xs font-mono text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </TracingBeam>
      </div>
    </SectionWrapper>
  );
}
