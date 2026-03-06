import { cn } from "@/lib/utils";

interface ClaudeLogoProps {
  className?: string;
  size?: number;
}

export function ClaudeLogo({ className, size = 32 }: ClaudeLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-foreground", className)}
      aria-label="Built with Claude"
    >
      <path
        d="M12 2L13.09 8.26L18 4L14.74 9.91L21 10L14.74 12.09L18 18L13.09 13.74L12 20L10.91 13.74L6 18L9.26 12.09L3 10L9.26 9.91L6 4L10.91 8.26L12 2Z"
        fill="currentColor"
      />
    </svg>
  );
}
