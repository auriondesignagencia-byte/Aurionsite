"use client";

import { useState, useTransition } from "react";
import { updateLeadStatus } from "./actions";

const OPTIONS: { value: string; label: string }[] = [
  { value: "novo", label: "Novo" },
  { value: "em_contato", label: "Em contato" },
  { value: "qualificado", label: "Qualificado" },
  { value: "ganho", label: "Ganho" },
  { value: "perdido", label: "Perdido" },
];

const STYLES: Record<string, string> = {
  novo: "border-gold/40 text-gold",
  em_contato: "border-sky-400/40 text-sky-300",
  qualificado: "border-violet-400/40 text-violet-300",
  ganho: "border-emerald-400/50 text-emerald-300",
  perdido: "border-red-400/40 text-red-300",
};

export function LeadStatusSelect({
  id,
  initial,
}: {
  id: string;
  initial: string;
}) {
  const [status, setStatus] = useState(initial);
  const [pending, startTransition] = useTransition();

  return (
    <select
      value={status}
      disabled={pending}
      onChange={(e) => {
        const next = e.target.value;
        setStatus(next);
        startTransition(async () => {
          const res = await updateLeadStatus(id, next);
          if (!res.ok) setStatus(initial);
        });
      }}
      className={`cursor-pointer rounded-full border bg-black/30 px-3 py-1.5 text-[12px] font-semibold outline-none transition-colors disabled:opacity-50 ${STYLES[status] ?? "border-cream/20 text-cream"}`}
    >
      {OPTIONS.map((o) => (
        <option key={o.value} value={o.value} className="bg-emerald-deep text-cream">
          {o.label}
        </option>
      ))}
    </select>
  );
}
