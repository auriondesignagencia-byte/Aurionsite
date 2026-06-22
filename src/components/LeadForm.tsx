"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

const SOCIAL = [
  "Já investe em social media?",
  "Ainda não invisto",
  "Faço por conta própria",
  "Já tenho agência/freelancer",
];

const INVESTIMENTO = [
  "Faixa de investimento ideal",
  "R$ 597 — Social Media",
  "R$ 797 — Social Media + Site",
  "Acima de R$ 1.397 — Social Media + Tráfego Pago",
];

type Status = "idle" | "loading" | "ok" | "error";

export function LeadForm({ id = "lead-form" }: { id?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("loading");
    setError("");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json.error || "Erro ao enviar.");
      form.reset();
      // Redireciona para a página de obrigado.
      router.push("/obrigado");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro ao enviar.");
      setStatus("error");
    }
  }

  const inputCls =
    "w-full rounded-xl border border-cream/15 bg-black/30 px-4 py-3.5 text-[15px] text-cream placeholder:text-cream/40 outline-none transition-colors focus:border-gold";
  const selectCls =
    "w-full rounded-xl border border-cream/15 bg-black/30 px-4 py-3.5 text-[15px] text-cream/70 outline-none transition-colors focus:border-gold";

  return (
    <form id={id} onSubmit={handleSubmit} className="grid gap-3 sm:grid-cols-2">
      <input name="nome" required placeholder="Qual seu nome?" className={inputCls} />
      <input name="whatsapp" required inputMode="tel" placeholder="WhatsApp com DDD" className={inputCls} />
      <input name="instagram" required placeholder="Seu Instagram" className={inputCls} />

      <select name="socialMedia" required defaultValue="" className={selectCls}>
        {SOCIAL.map((s, i) => (
          <option key={s} value={i === 0 ? "" : s} disabled={i === 0} className="bg-emerald-deep text-cream">
            {s}
          </option>
        ))}
      </select>

      <select name="investimento" required defaultValue="" className={`${selectCls} sm:col-span-2`}>
        {INVESTIMENTO.map((f, i) => (
          <option key={f} value={i === 0 ? "" : f} disabled={i === 0} className="bg-emerald-deep text-cream">
            {f}
          </option>
        ))}
      </select>

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-1 rounded-full bg-gold px-7 py-4 text-[14px] font-bold uppercase tracking-[0.12em] text-emerald-deep transition-all duration-300 hover:bg-gold-bright disabled:opacity-60 sm:col-span-2"
      >
        {status === "loading" ? "Enviando..." : "Enviar"}
      </button>

      {status === "error" && (
        <p className="text-center text-[13px] text-red-300 sm:col-span-2">{error}</p>
      )}
      <p className="text-center text-[12px] font-light text-cream/40 sm:col-span-2">
        Sem compromisso. Respeitamos os seus dados.
      </p>
    </form>
  );
}
