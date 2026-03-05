"use client";

import { SectionWrapper } from "@/components/animations/section-wrapper";
import { BlurFade } from "@/components/magicui/blur-fade";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { siteConfig } from "@/lib/data";
import { Mail, Download, Github, Linkedin } from "lucide-react";

export function Contact() {
  return (
    <SectionWrapper
      id="contact"
      className="relative mx-auto max-w-5xl px-6 py-24 md:py-32"
    >
      <DotPattern className="opacity-30" />

      <div className="relative z-10 flex flex-col items-center text-center">
        <BlurFade delay={0.1}>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Get In <span className="text-accent">Touch</span>
          </h2>
        </BlurFade>

        <BlurFade delay={0.2}>
          <p className="mt-4 max-w-lg text-muted-foreground">
            I&apos;m always open to discussing new opportunities, interesting
            projects, or just having a chat about tech. Feel free to reach out!
          </p>
        </BlurFade>

        <BlurFade delay={0.3}>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
            <a href={`mailto:${siteConfig.email}`}>
              <ShimmerButton>
                <Mail size={18} />
                Say Hello
              </ShimmerButton>
            </a>
            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ShimmerButton
                background="rgba(20, 20, 20, 1)"
                shimmerColor="#00d4aa"
              >
                <Download size={18} />
                Resume
              </ShimmerButton>
            </a>
          </div>
        </BlurFade>

        <BlurFade delay={0.4}>
          <div className="mt-8 flex items-center gap-6">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-accent"
              aria-label="GitHub"
            >
              <Github size={22} />
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-accent"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-muted-foreground transition-colors hover:text-accent"
              aria-label="Email"
            >
              <Mail size={22} />
            </a>
          </div>
        </BlurFade>

        <BlurFade delay={0.5}>
          <p className="mt-12 text-xs text-muted-foreground/50 font-mono">
            Built with Next.js, Tailwind CSS & Framer Motion
          </p>
        </BlurFade>
      </div>
    </SectionWrapper>
  );
}
