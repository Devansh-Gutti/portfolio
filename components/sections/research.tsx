"use client";

import { SectionWrapper } from "@/components/animations/section-wrapper";
import { BlurFade } from "@/components/magicui/blur-fade";
import { GlowingEffect } from "@/components/ui/glowing-effect";
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

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {research.map((paper, index) => (
          <BlurFade key={paper.title} delay={0.15 + index * 0.1}>
            <div className="relative h-full rounded-xl p-px">
              <GlowingEffect
                spread={40}
                glow
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={2}
              />
              <div className="relative flex h-full flex-col rounded-xl border border-border bg-card/50 p-5 backdrop-blur-sm sm:p-6">
                <div className="flex items-center gap-2">
                  <FileText size={16} className="text-muted-foreground" />
                  <StatusBadge status={paper.status} />
                </div>
                <span className="mt-2 text-xs font-mono text-muted-foreground">
                  {paper.venue} · {paper.year}
                </span>
                <h3 className="mt-3 text-base font-semibold leading-snug text-foreground">
                  {paper.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {paper.abstract}
                </p>
                {"link" in paper && paper.link && (
                  <a
                    href={paper.link as string}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-muted-foreground"
                  >
                    <ExternalLink size={14} />
                    View Paper
                  </a>
                )}
              </div>
            </div>
          </BlurFade>
        ))}
      </div>
    </SectionWrapper>
  );
}
