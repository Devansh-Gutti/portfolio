"use client";

import { SectionWrapper } from "@/components/animations/section-wrapper";
import { BlurFade } from "@/components/magicui/blur-fade";
import { ExpandableCard } from "@/components/animations/expandable-card";
import { research } from "@/lib/data";
import { ExternalLink, FileText } from "lucide-react";

function StatusBadge({ status }: { status: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
      {status}
    </span>
  );
}

export function Research() {
  return (
    <SectionWrapper
      id="research"
      className="relative mx-auto max-w-5xl px-6 py-16 md:py-20"
    >
      <BlurFade delay={0.1}>
        <h2 className="text-3xl font-bold sm:text-4xl font-display">
          Research
        </h2>
        <p className="mt-3 text-muted-foreground">
          Fun weekend rabbit holes that turned into something interesting
        </p>
      </BlurFade>

      <div className="mt-10 flex flex-col gap-4">
        {research.map((paper, index) => (
          <BlurFade key={paper.title} delay={0.15 + index * 0.1}>
            <ExpandableCard
              expandedContent={
                <div className="space-y-3">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {paper.abstract}
                  </p>
                  {paper.link && (
                    <a
                      href={paper.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-muted-foreground"
                    >
                      <ExternalLink size={14} />
                      View Paper
                    </a>
                  )}
                </div>
              }
            >
              <div className="flex items-start gap-3">
                <div className="mt-1 shrink-0 text-muted-foreground">
                  <FileText size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <StatusBadge status={paper.status} />
                    <span className="text-xs font-mono text-muted-foreground">
                      {paper.venue} · {paper.year}
                    </span>
                  </div>
                  <h3 className="mt-2 text-base font-semibold leading-snug text-foreground sm:text-lg">
                    {paper.title}
                  </h3>
                </div>
              </div>
            </ExpandableCard>
          </BlurFade>
        ))}
      </div>
    </SectionWrapper>
  );
}
