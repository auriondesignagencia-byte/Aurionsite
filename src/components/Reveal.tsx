import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** stagger delay in ms */
  delay?: number;
  as?: "div" | "section" | "li" | "article";
}

/**
 * Subtle fade-up entrance. Implemented as a pure-CSS animation with
 * `both` fill-mode so content always ends visible (degrades gracefully
 * without JS and respects prefers-reduced-motion).
 */
export function Reveal({ children, className, delay = 0, as: Tag = "div" }: RevealProps) {
  return (
    <Tag
      className={cn("agd-reveal", className)}
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
