"use client";

import { FloatingNav } from "@/components/aceternityui/floating-nav";
import { navItems } from "@/lib/data";

export function FloatingNavWrapper() {
  return <FloatingNav navItems={navItems} />;
}
