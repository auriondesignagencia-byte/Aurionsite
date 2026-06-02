"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

// Dispara a conversão "Lead" no Meta Pixel quando a página de obrigado abre.
export function LeadPixelEvent() {
  useEffect(() => {
    window.fbq?.("track", "Lead");
  }, []);
  return null;
}
