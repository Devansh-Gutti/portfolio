"use client";

import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  speed?: number;
}

export function Marquee({
  children,
  className,
  reverse = false,
  pauseOnHover = false,
  speed = 40,
}: MarqueeProps) {
  const animationStyle = {
    "--marquee-duration": `${speed}s`,
  } as React.CSSProperties;

  return (
    <div
      className={cn("group flex overflow-hidden gap-4", className)}
      style={animationStyle}
    >
      {[0, 1].map((i) => (
        <div
          key={i}
          className={cn(
            "flex shrink-0 items-center justify-around gap-4 animate-[marquee_var(--marquee-duration)_linear_infinite]",
            reverse && "[animation-direction:reverse]",
            pauseOnHover && "group-hover:[animation-play-state:paused]"
          )}
          aria-hidden={i === 1}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
