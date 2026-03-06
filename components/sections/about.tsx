"use client";

import Image from "next/image";
import { SectionWrapper } from "@/components/animations/section-wrapper";
import { BlurFade } from "@/components/magicui/blur-fade";
import { ImageGeneration } from "@/components/ui/ai-chat-image-generation-1";

export function About() {
  return (
    <SectionWrapper
      id="about"
      className="relative mx-auto max-w-5xl px-6 py-24 md:py-32"
    >
      <BlurFade delay={0.1}>
        <h2 className="text-3xl font-bold sm:text-4xl font-display">
          About <span className="text-accent">Me</span>
        </h2>
      </BlurFade>

      <div className="mt-8 flex flex-col gap-10 md:flex-row md:items-start md:gap-12">
        <div className="flex-1 space-y-5">
          <BlurFade delay={0.2}>
            <p className="text-lg leading-relaxed text-muted-foreground">
              I&apos;m a software engineer working on CUDA safety at NVIDIA,
              where I spend my time building systems for AI running on
              safety-critical platforms. I enjoy taking ideas from rough
              prototypes to something that actually runs in production, and
              collaborating with people across the whole build process.
            </p>
          </BlurFade>

          <BlurFade delay={0.3}>
            <p className="text-lg leading-relaxed text-muted-foreground">
              I&apos;m a big believer in using Gen AI as a force multiplier
              while building software. Tools like Cursor, Claude Code, and Codex
              are a natural part of my workflow, and I enjoy figuring out how to
              combine AI-assisted speed with solid engineering.
            </p>
          </BlurFade>

          <BlurFade delay={0.35}>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Outside of work you&apos;ll probably find me playing sports,
              travelling somewhere new, or out on a trek. I tend to thrive in
              collaborative and exploratory environments.
            </p>
          </BlurFade>
        </div>

        <BlurFade delay={0.25} className="shrink-0 md:w-72 lg:w-80">
          <ImageGeneration>
            <Image
              src="/about-me.png"
              alt="Devansh Guttikonda"
              width={320}
              height={480}
              className="w-full object-cover"
              priority
            />
          </ImageGeneration>
        </BlurFade>
      </div>
    </SectionWrapper>
  );
}
