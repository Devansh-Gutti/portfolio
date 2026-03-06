"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

interface TerminalTypewriterProps {
  facts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export function TerminalTypewriter({
  facts,
  typingSpeed = 35,
  deletingSpeed = 20,
  pauseDuration = 2500,
}: TerminalTypewriterProps) {
  const [currentFactIndex, setCurrentFactIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [phase, setPhase] = useState<"typing" | "paused" | "deleting">("typing");

  const currentFact = facts[currentFactIndex];

  const advanceToNext = useCallback(() => {
    setCurrentFactIndex((prev) => (prev + 1) % facts.length);
    setPhase("typing");
  }, [facts.length]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (phase === "typing") {
      if (displayText.length < currentFact.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentFact.slice(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => setPhase("paused"), pauseDuration);
      }
    } else if (phase === "paused") {
      timeout = setTimeout(() => setPhase("deleting"), 0);
    } else if (phase === "deleting") {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, deletingSpeed);
      } else {
        timeout = setTimeout(advanceToNext, 300);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, phase, currentFact, typingSpeed, deletingSpeed, pauseDuration, advanceToNext]);

  return (
    <div className="font-mono text-sm sm:text-base">
      <div className="flex items-start gap-2 text-muted-foreground">
        <span className="shrink-0 select-none text-accent">{">"}</span>
        <span className="min-h-[1.5em]">
          {displayText}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
            className="inline-block w-[2px] h-[1em] bg-accent align-middle ml-0.5"
          />
        </span>
      </div>
    </div>
  );
}
