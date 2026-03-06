"use client";

import { FallingPattern } from "@/components/ui/falling-pattern";

export function Background() {
  return (
    <div className="fixed inset-0 -z-10">
      <FallingPattern
        color="var(--muted-foreground)"
        backgroundColor="var(--background)"
        duration={200}
        blurIntensity="1.2em"
        density={1}
        className="h-full opacity-30 [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_20%,transparent_70%)]"
      />
    </div>
  );
}
