"use client";

import { useState, type FormEvent } from "react";

const FATURAMENTO = [
  "Faturamento mensal",
  "Até R$ 10 mil",
  "R$ 10 mil a R$ 50 mil",
  "R$ 50 mil a R$ 100 mil",
  "Acima de R$ 100 mil",
];

const SOCIAL = [
  "Já investe em social media?",
  "Ainda não invisto",
  "Faço por conta própria",
  "Já tenho agência/freelancer",
];

type Status = "idle" | "loading" | "ok" | "error";

export function LeadForm({ id = "lead-form" }: { id?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

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
      setStatus("ok");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro ao enviar.");
      setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <div className="rounded-2xl border border-gold/40 bg-emerald/40 p-8 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold text-emerald-deep">
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="text-[20px] font-bold text-cream">Recebemos o seu contato!</h3>
        <p className="mt-2 text-[15px] font-light text-cream/70">
          Em até 5 minutos a nossa equipe vai te chamar no WhatsApp. Fique de olho!
        </p>
      </div>
    );
  }

  const inputCls =
    "w-full rounded-xl border border-cream/15 bg-black/30 px-4 py-3.5 text-[15px] text-cream placeholder:text-cream/40 outline-none transition-colors focus:border-gold";
  const selectCls =
    "w-full rounded-xl border border-cream/15 bg-black/30 px-4 py-3.5 text-[15px] text-cream/70 outline-none transition-colors focus:border-gold";

  return (
    <form id={id} onSubmit={handleSubmit} className="grid gap-3 sm:grid-cols-2">
      <input name="nome" required placeholder="Qual seu nome?" className={inputCls} />
      <input name="whatsapp" required inputMode="tel" placeholder="WhatsApp com DDD" className={inputCls} />
      <input name="email" type="email" placeholder="Seu melhor e-mail" className={inputCls} />
      <input name="empresa" placeholder="Nome da empresa" className={inputCls} />

      <select name="faturamento" defaultValue="" className={selectCls}>
        {FATURAMENTO.map((f, i) => (
          <option key={f} value={i === 0 ? "" : f} disabled={i === 0} className="bg-emerald-deep text-cream">
            {f}
          </option>
        ))}
      </select>
      <select name="socialMedia" defaultValue="" className={selectCls}>
        {SOCIAL.map((s, i) => (
          <option key={s} value={i === 0 ? "" : s} disabled={i === 0} className="bg-emerald-deep text-cream">
            {s}
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
