"use client";

import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { technologies } from "@/lib/data";
import type { TechItem } from "@/lib/data";

function TechBadge({ item }: { item: TechItem }) {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-border/60 bg-background px-3 py-2 transition-colors hover:border-muted-foreground/40 hover:bg-card">
      <span className="text-sm font-medium text-card-foreground">{item.name}</span>
    </div>
  );
}

export function Technologies() {
  return (
    <section id="technologies">
      <ContainerScroll
        titleComponent={
          <div className="flex flex-col items-center">
            <h2 className="text-3xl font-bold sm:text-4xl font-display">
              Technologies
            </h2>
            <p className="mt-3 text-muted-foreground">
              Tools and technologies I work with day-to-day
            </p>
          </div>
        }
      >
        <div className="grid h-full grid-cols-1 content-start gap-6 overflow-y-auto p-4 sm:grid-cols-2 lg:grid-cols-3 md:p-2">
          {technologies.map((category) => (
            <div key={category.category}>
              <h3 className="mb-3 text-xs font-mono uppercase tracking-widest text-muted-foreground">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <TechBadge key={item.name} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </ContainerScroll>
    </section>
  );
}
