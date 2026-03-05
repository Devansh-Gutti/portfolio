"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

interface NavItem {
  name: string;
  link: string;
}

interface FloatingNavProps {
  navItems: NavItem[];
  className?: string;
}

export function FloatingNav({ navItems, className }: FloatingNavProps) {
  const [visible, setVisible] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.nav
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className={cn(
          "fixed top-4 inset-x-0 z-50 mx-auto flex max-w-fit items-center justify-center gap-2 rounded-full border border-border/50 bg-background/70 px-8 py-3 backdrop-blur-lg",
          className
        )}
      >
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.link}
            className="hidden sm:block text-sm text-muted-foreground transition-colors hover:text-accent"
          >
            {item.name}
          </a>
        ))}
        <a
          href="#contact"
          className="hidden sm:block rounded-full bg-foreground px-4 py-1.5 text-sm font-medium text-background transition-transform hover:scale-105"
        >
          Contact
        </a>
        <button
          className="sm:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </motion.nav>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-6 bg-background/95 backdrop-blur-md sm:hidden"
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="text-2xl font-medium text-foreground transition-colors hover:text-accent"
              onClick={() => setMobileOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-foreground px-6 py-2 text-lg font-medium text-background"
            onClick={() => setMobileOpen(false)}
          >
            Contact
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
