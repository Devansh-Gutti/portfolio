"use client";

import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ShimmerButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  shimmerColor?: string;
  background?: string;
}

export function ShimmerButton({
  children,
  className,
  shimmerColor = "#ffffff",
  background = "rgba(10, 10, 10, 1)",
  ...props
}: ShimmerButtonProps) {
  return (
    <button
      className={cn(
        "group relative inline-flex items-center justify-center overflow-hidden rounded-full px-6 py-3 font-medium text-foreground transition-all duration-300 hover:scale-105",
        className
      )}
      style={{ background }}
      {...props}
    >
      <span
        className="absolute inset-0 overflow-hidden rounded-full"
        style={{
          background: `linear-gradient(90deg, transparent, ${shimmerColor}40, transparent)`,
          backgroundSize: "200% 100%",
          animation: "shimmer 2s infinite",
        }}
      />
      <span
        className="absolute inset-px rounded-full"
        style={{ background }}
      />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
}
