"use client";

import { SectionWrapper } from "@/components/animations/section-wrapper";
import { BlurFade } from "@/components/magicui/blur-fade";
import { ContainerScroll } from "@/components/aceternityui/container-scroll";
import Image from "next/image";
import { technologies } from "@/lib/data";
import type { TechItem } from "@/lib/data";

function TechBadge({ item }: { item: TechItem }) {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-border/60 bg-background px-3 py-2 transition-colors hover:border-muted-foreground/40">
      {item.icon ? (
        <Image
          src={`https://cdn.simpleicons.org/${item.icon}`}
          alt={item.name}
          width={16}
          height={16}
          unoptimized
          className="tech-icon shrink-0"
        />
      ) : (
        <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-sm bg-muted text-[8px] font-bold text-muted-foreground font-mono">
          {item.name.slice(0, 2).toUpperCase()}
        </span>
      )}
      <span className="text-sm font-medium text-card-foreground">{item.name}</span>
    </div>
  );
}

export function Technologies() {
  return (
    <SectionWrapper id="technologies" className="relative px-6 py-12 md:py-16">
      <ContainerScroll
        titleComponent={
          <BlurFade delay={0.1}>
            <h2 className="text-3xl font-bold sm:text-4xl font-display">
              Technologies
            </h2>
            <p className="mt-3 text-muted-foreground">
              Tools and technologies I work with day-to-day
            </p>
          </BlurFade>
        }
      >
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {technologies.map((category, catIndex) => (
            <BlurFade key={category.category} delay={0.1 + catIndex * 0.08}>
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
      </ContainerScroll>
    </SectionWrapper>
  );
}
