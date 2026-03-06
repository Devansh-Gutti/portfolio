"use client";

import { FallingPattern } from "@/components/ui/falling-pattern";

export function Background() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <FallingPattern
        color="var(--muted-foreground)"
        backgroundColor="var(--background)"
        duration={200}
        blurIntensity="1.2em"
        density={1}
        className="h-full opacity-40"
      />
    </div>
  );
}
