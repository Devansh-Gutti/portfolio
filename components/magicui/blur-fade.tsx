"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface BlurFadeProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
}

export function BlurFade({
  children,
  className,
  delay = 0,
  duration = 0.4,
  yOffset = 6,
}: BlurFadeProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: yOffset, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true }}
      transition={{ delay, duration, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
