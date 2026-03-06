"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TerminalTypewriterProps {
  facts: string[];
  typingSpeed?: number;
  pauseDuration?: number;
}

export function TerminalTypewriter({
  facts,
  typingSpeed = 30,
  pauseDuration = 3000,
}: TerminalTypewriterProps) {
  const [currentFactIndex, setCurrentFactIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [phase, setPhase] = useState<"typing" | "paused" | "clearing">("typing");

  const currentFact = facts[currentFactIndex];

  const advanceToNext = useCallback(() => {
    setCurrentFactIndex((prev) => (prev + 1) % facts.length);
    setDisplayText("");
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
        timeout = setTimeout(() => setPhase("clearing"), pauseDuration);
      }
    } else if (phase === "clearing") {
      timeout = setTimeout(advanceToNext, 400);
    }

    return () => clearTimeout(timeout);
  }, [displayText, phase, currentFact, typingSpeed, pauseDuration, advanceToNext]);

  return (
    <div className="font-terminal text-base sm:text-lg min-h-[2.5em] flex items-start">
      <span className="shrink-0 select-none text-[#FF8C00] mr-2">$</span>
      <div className="min-h-[1.5em] relative">
        <AnimatePresence mode="wait">
          <motion.span
            key={currentFactIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-[#FF8C00]/90"
          >
            {displayText}
          </motion.span>
        </AnimatePresence>
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
          className="inline-block w-[8px] h-[1em] bg-[#FF8C00] align-middle ml-0.5"
        />
      </div>
    </div>
  );
}
