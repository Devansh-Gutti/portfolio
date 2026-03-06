"use client";

import { ThemeToggle } from "@/components/ui/theme-toggle";

export function FixedThemeToggle() {
  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50">
      <ThemeToggle className="rotate-90" />
    </div>
  );
}
