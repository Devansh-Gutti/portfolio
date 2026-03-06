"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { TextGenerateEffect } from "@/components/aceternityui/text-generate-effect";
import { Spotlight } from "@/components/aceternityui/spotlight";
import { TerminalTypewriter } from "@/components/animations/terminal-typewriter";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { siteConfig, heroFacts } from "@/lib/data";

const ParticleField = dynamic(
  () =>
    import("@/components/three/particle-field").then((m) => m.ParticleField),
  { ssr: false }
);

function TuxLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 120"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Linux Tux"
    >
      <ellipse cx="50" cy="85" rx="30" ry="25" fill="#FF8C00" />
      <ellipse cx="50" cy="50" rx="25" ry="30" fill="#FF8C00" />
      <ellipse cx="50" cy="50" rx="20" ry="25" fill="#FFa844" />
      <circle cx="42" cy="42" r="4" fill="#1a1a1a" />
      <circle cx="58" cy="42" r="4" fill="#1a1a1a" />
      <circle cx="43" cy="41" r="1.5" fill="white" />
      <circle cx="59" cy="41" r="1.5" fill="white" />
      <ellipse cx="50" cy="52" rx="4" ry="3" fill="#E07000" />
      <ellipse cx="35" cy="80" rx="8" ry="4" fill="#E07000" />
      <ellipse cx="65" cy="80" rx="8" ry="4" fill="#E07000" />
    </svg>
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4"
    >
      <ParticleField />
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="#ffffff" />

      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <TextGenerateEffect
            words={siteConfig.name}
            className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight font-display"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-4 text-lg sm:text-xl text-accent font-mono"
        >
          {siteConfig.title}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="mt-8 w-full max-w-2xl relative rounded-xl p-px"
        >
          <GlowingEffect
            spread={50}
            glow
            disabled={false}
            proximity={80}
            inactiveZone={0.01}
            borderWidth={2}
          />
          <div className="relative rounded-xl border border-border/50 bg-[#0d0d0d] overflow-hidden shadow-2xl">
          <div className="flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] border-b border-border/30">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
            </div>
            <span className="flex-1 text-center text-[10px] font-terminal text-[#666] tracking-wider">
              devansh@portfolio ~ zsh
            </span>
          </div>
          <div className="px-5 py-4 flex items-start gap-3">
            <div className="flex items-center gap-2 shrink-0 pt-0.5">
              <Image
                src="/claude-mascot.png"
                alt="Claude"
                width={28}
                height={28}
                className="rounded-sm"
              />
              <TuxLogo className="w-5 h-6" />
            </div>
            <div className="flex-1 min-w-0">
              <TerminalTypewriter facts={heroFacts} />
            </div>
          </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="mt-8 flex items-center gap-4"
        >
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
          <a
            href={`mailto:${siteConfig.email}`}
            className="rounded-full border border-border p-3 text-muted-foreground transition-all hover:border-accent hover:text-accent hover:scale-110"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-10 z-10 text-muted-foreground transition-colors hover:text-accent"
        aria-label="Scroll to about section"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={28} />
        </motion.div>
      </motion.a>
    </section>
  );
}
