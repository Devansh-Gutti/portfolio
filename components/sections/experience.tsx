"use client";

import { SectionWrapper } from "@/components/animations/section-wrapper";
import { BlurFade } from "@/components/magicui/blur-fade";
import { ExpandableCard } from "@/components/animations/expandable-card";
import { experiences } from "@/lib/data";

export function Experience() {
  return (
    <SectionWrapper
      id="experience"
      className="relative mx-auto max-w-5xl px-6 py-16 md:py-20"
    >
      <BlurFade delay={0.1}>
        <h2 className="text-3xl font-bold sm:text-4xl font-display">
          Experience
        </h2>
        <p className="mt-3 text-muted-foreground">
          Where I&apos;ve been building, learning, and occasionally breaking things.
        </p>
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
                <div className="flex items-start gap-3">
                  {exp.logo ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={`https://cdn.simpleicons.org/${exp.logo}`}
                      alt={exp.company}
                      width={24}
                      height={24}
                      className="mt-0.5 shrink-0 rounded-sm"
                    />
                  ) : "logoText" in exp && (exp as Record<string, unknown>).logoText ? (
                    <span
                      className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-white text-[10px] font-bold font-mono"
                      style={{ backgroundColor: ((exp as Record<string, unknown>).logoColor as string) || "var(--foreground)" }}
                    >
                      {(exp as Record<string, unknown>).logoText as string}
                    </span>
                  ) : null}
                  <div>
                    {"url" in exp && (exp as Record<string, unknown>).url ? (
                      <a
                        href={(exp as Record<string, unknown>).url as string}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-semibold text-foreground hover:underline"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {exp.company}
                      </a>
                    ) : (
                      <h3 className="text-lg font-semibold text-foreground">
                        {exp.company}
                      </h3>
                    )}
                    <p className="text-sm text-muted-foreground">{exp.role}</p>
                  </div>
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
