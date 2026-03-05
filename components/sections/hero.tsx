"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { TextGenerateEffect } from "@/components/aceternityui/text-generate-effect";
import { Spotlight } from "@/components/aceternityui/spotlight";
import { siteConfig } from "@/lib/data";

const ParticleField = dynamic(
  () =>
    import("@/components/three/particle-field").then((m) => m.ParticleField),
  { ssr: false }
);

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4"
    >
      <ParticleField />
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="#76b900" />

      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <TextGenerateEffect
            words={siteConfig.name}
            className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight"
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

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="mt-4 max-w-xl text-muted-foreground"
        >
          {siteConfig.tagline}
        </motion.p>

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
