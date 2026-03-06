"use client";

import { SectionWrapper } from "@/components/animations/section-wrapper";
import { BlurFade } from "@/components/magicui/blur-fade";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { siteConfig } from "@/lib/data";
import { Mail, Download, Github, Linkedin } from "lucide-react";

export function Contact() {
  return (
    <SectionWrapper
      id="contact"
      className="relative mx-auto max-w-5xl px-6 py-24 md:py-32"
    >
      <div className="relative z-10 flex flex-col items-center text-center">
        <BlurFade delay={0.1}>
          <h2 className="text-3xl font-bold sm:text-4xl font-display">
            Get In <span className="text-accent">Touch</span>
          </h2>
        </BlurFade>

        <BlurFade delay={0.2}>
          <p className="mt-4 max-w-lg text-muted-foreground">
            I&apos;m always happy to chat about tech, discuss interesting
            projects, or explore new opportunities. Feel free to reach out!
          </p>
        </BlurFade>

        <BlurFade delay={0.3}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
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
                shimmerColor="#ffffff"
              >
                <Download size={18} />
                Resume
              </ShimmerButton>
            </a>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border p-3 text-muted-foreground transition-all hover:border-accent hover:text-accent hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border p-3 text-muted-foreground transition-all hover:border-accent hover:text-accent hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </BlurFade>

        <BlurFade delay={0.4}>
          <p className="mt-12 text-xs text-muted-foreground/50 font-mono">
            Built with Next.js, Tailwind CSS & Framer Motion
          </p>
        </BlurFade>
      </div>
    </SectionWrapper>
  );
}
