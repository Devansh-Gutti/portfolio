"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { ReactNode } from "react";

interface ContainerScrollProps {
  titleComponent: ReactNode;
  children: ReactNode;
}

export function ContainerScroll({
  titleComponent,
  children,
}: ContainerScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const scaleDimensions = () => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      return [0.85, 0.95];
    }
    return [0.9, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 0.5], [25, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], scaleDimensions());
  const translateY = useTransform(scrollYProgress, [0, 0.5], [80, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0.4, 1]);

  return (
    <div ref={containerRef} className="relative flex flex-col items-center py-16">
      <motion.div
        style={{ translateY, opacity }}
        className="w-full max-w-5xl px-6 text-center"
      >
        {titleComponent}
      </motion.div>

      <motion.div
        style={{
          rotateX: rotate,
          scale,
          transformPerspective: 1200,
        }}
        className="relative mx-auto mt-8 w-full max-w-5xl origin-top rounded-2xl border border-border bg-card/50 p-4 shadow-[0_0_60px_-15px_rgba(0,0,0,0.1)] backdrop-blur-sm dark:shadow-[0_0_60px_-15px_rgba(255,255,255,0.03)] sm:p-6 md:p-8"
      >
        {children}
      </motion.div>
    </div>
  );
}
