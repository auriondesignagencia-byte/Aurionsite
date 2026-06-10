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
    // event_id único: o Meta usa esse mesmo id no evento do navegador e no que
    // ele reenvia pela API de Conversões (Web-only), desduplicando os dois.
    const eventID =
      typeof crypto !== "undefined" && crypto.randomUUID
        ? crypto.randomUUID()
        : `${Date.now()}-${Math.random()}`;
    window.fbq?.("track", "Lead", {}, { eventID });
  }, []);
  return null;
}
