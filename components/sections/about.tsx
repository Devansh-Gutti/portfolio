"use client";

import { SectionWrapper } from "@/components/animations/section-wrapper";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Marquee } from "@/components/magicui/marquee";
import { skills } from "@/lib/data";

export function About() {
  return (
    <SectionWrapper
      id="about"
      className="relative mx-auto max-w-5xl px-6 py-24 md:py-32"
    >
      <BlurFade delay={0.1}>
        <h2 className="text-3xl font-bold sm:text-4xl">
          About <span className="text-accent">Me</span>
        </h2>
      </BlurFade>

      <BlurFade delay={0.2}>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          I&apos;m a software engineer at NVIDIA on the CUDA Safety team,
          building cross-VM AI inference infrastructure for safety-critical
          autonomous driving platforms. I love taking ideas from prototype to
          production — collaborating across every stage of the product lifecycle,
          from early MVPs through full-scale deployment. I also co-authored a
          research paper on RAG-based Explainable AI, presented at ICAART 2025.
        </p>
      </BlurFade>

      <BlurFade delay={0.3}>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          I graduated from PES University with a B.Tech in Computer Science
          (CGPA: 8.50, MRD Scholar — top 20%). I&apos;m a strong advocate for
          integrating Gen AI into development workflows — tools like Cursor,
          Claude Code, and Codex have become a natural part of how I build and
          ship software. I enjoy finding the right balance between AI-assisted
          velocity and engineering rigour.
        </p>
      </BlurFade>

      <BlurFade delay={0.35}>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Outside of work, I&apos;m pretty adventurous — I love team sports,
          travelling, trekking, and exploring new places. I thrive in
          collaborative environments, whether that&apos;s on the field or
          in a codebase.
        </p>
      </BlurFade>

      <BlurFade delay={0.4} className="mt-12">
        <h3 className="mb-4 text-sm font-mono uppercase tracking-widest text-muted-foreground">
          Technologies I Work With
        </h3>
        <Marquee pauseOnHover speed={30}>
          {skills.map((skill) => (
            <span
              key={skill}
              className="inline-flex items-center rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-card-foreground transition-colors hover:border-accent hover:text-accent"
            >
              {skill}
            </span>
          ))}
        </Marquee>
      </BlurFade>
    </SectionWrapper>
  );
}
