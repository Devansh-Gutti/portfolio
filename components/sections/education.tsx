"use client";

import { SectionWrapper } from "@/components/animations/section-wrapper";
import { BlurFade } from "@/components/magicui/blur-fade";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { education } from "@/lib/data";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <SectionWrapper
      id="education"
      className="relative mx-auto max-w-5xl px-6 py-24 md:py-32"
    >
      <BlurFade delay={0.1}>
        <h2 className="text-3xl font-bold sm:text-4xl font-display">
          Education
        </h2>
      </BlurFade>

      <div className="mt-10 flex flex-col gap-4">
        {education.map((edu, index) => (
          <BlurFade key={edu.institution} delay={0.15 + index * 0.1}>
            <div className="relative rounded-xl p-px">
              <GlowingEffect
                spread={40}
                glow
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={2}
              />
              <div className="relative rounded-xl border border-border bg-card/50 p-5 backdrop-blur-sm sm:p-6">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 shrink-0 text-muted-foreground">
                    <GraduationCap size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">
                          {edu.institution}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {edu.degree}
                        </p>
                      </div>
                      <div className="flex flex-col items-start gap-1 sm:items-end">
                        <span className="text-xs font-mono text-muted-foreground">
                          {edu.period}
                        </span>
                        <span className="text-xs font-mono text-foreground/80">
                          {edu.grade}
                        </span>
                      </div>
                    </div>
                    {edu.highlights.length > 0 && (
                      <ul className="mt-3 flex flex-col gap-1.5">
                        {edu.highlights.map((h) => (
                          <li
                            key={h}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/50" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </BlurFade>
        ))}
      </div>
    </SectionWrapper>
  );
}
