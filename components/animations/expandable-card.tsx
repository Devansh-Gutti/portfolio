"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import type { ReactNode } from "react";

interface ExpandableCardProps {
  children: ReactNode;
  expandedContent: ReactNode;
  className?: string;
}

export function ExpandableCard({
  children,
  expandedContent,
  className,
}: ExpandableCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={cn("relative rounded-xl p-px", className)}>
      <GlowingEffect
        spread={40}
        glow
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
        borderWidth={2}
      />
      <motion.div
        layout
        onClick={() => setIsExpanded(!isExpanded)}
        className="relative cursor-pointer rounded-xl border border-border bg-card/50 p-5 backdrop-blur-sm transition-colors sm:p-6"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">{children}</div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="mt-1 shrink-0 text-muted-foreground"
          >
            <ChevronDown size={16} />
          </motion.div>
        </div>

        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="overflow-hidden"
            >
              <div className="pt-4 border-t border-border/50 mt-4">
                {expandedContent}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
