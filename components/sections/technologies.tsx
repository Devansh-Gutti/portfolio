"use client";

import { SectionWrapper } from "@/components/animations/section-wrapper";
import { BlurFade } from "@/components/magicui/blur-fade";
import { technologies } from "@/lib/data";
import type { TechItem } from "@/lib/data";

function TechBadge({ item }: { item: TechItem }) {
  return (
    <div className="flex items-center gap-2.5 rounded-lg border border-border/60 bg-card/50 px-3 py-2 transition-colors hover:border-muted-foreground/40 hover:bg-card">
      {item.icon ? (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={`https://cdn.simpleicons.org/${item.icon}`}
          alt=""
          width={14}
          height={14}
          className="shrink-0"
          loading="lazy"
        />
      ) : (
        <span className="flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-sm bg-muted-foreground/20 text-[7px] font-bold text-muted-foreground font-mono">
          {item.name.slice(0, 2).toUpperCase()}
        </span>
      )}
      <span className="text-sm font-medium text-card-foreground">{item.name}</span>
    </div>
  );
}

export function Technologies() {
  return (
    <SectionWrapper
      id="technologies"
      className="relative mx-auto max-w-5xl px-6 py-16 md:py-20"
    >
      <BlurFade delay={0.1}>
        <h2 className="text-3xl font-bold sm:text-4xl font-display">
          Technologies
        </h2>
        <p className="mt-3 text-muted-foreground">
          Tools and technologies I work with day-to-day.
        </p>
      </BlurFade>

      <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {technologies.map((category, catIndex) => (
          <BlurFade key={category.category} delay={0.15 + catIndex * 0.06}>
            <div>
              <h3 className="mb-3 text-xs font-mono uppercase tracking-widest text-muted-foreground">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <TechBadge key={item.name} item={item} />
                ))}
              </div>
            </div>
          </BlurFade>
        ))}
      </div>
    </SectionWrapper>
  );
}
