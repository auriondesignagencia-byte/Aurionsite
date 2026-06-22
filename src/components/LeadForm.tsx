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
  {
    value: "R$ 597 — Social Media",
    preco: "R$ 597",
    titulo: "Social Media",
    desc: "Ideal para quem quer apenas começar a ter presença.",
  },
  {
    value: "R$ 797 — Social Media + Site",
    preco: "R$ 797",
    titulo: "Social Media + Site",
    desc: 'O seu "carro-chefe" para quem busca crescimento real.',
    destaque: true,
  },
  {
    value: "Acima de R$ 1.397 — Social Media + Tráfego Pago",
    preco: "Acima de R$ 1.397",
    titulo: "Social Media + Tráfego Pago",
    desc: "Para empresas que buscam gestão completa + estratégia personalizada.",
  },
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

      <fieldset className="mt-1 sm:col-span-2">
        <legend className="mb-3 text-[14px] font-light text-cream/80">
          Qual dessas faixas de investimento melhor se adequa ao momento atual da sua empresa?
        </legend>
        <div className="grid gap-3 sm:grid-cols-3">
          {INVESTIMENTO.map((opt) => (
            <label
              key={opt.value}
              className="group relative flex cursor-pointer flex-col rounded-xl border border-cream/15 bg-black/30 p-4 transition-colors hover:border-gold/50 has-[:checked]:border-gold has-[:checked]:bg-gold/10"
            >
              <input type="radio" name="investimento" value={opt.value} required className="peer sr-only" />
              {opt.destaque && (
                <span className="absolute -top-2 right-3 rounded-full bg-gold px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-emerald-deep">
                  Recomendado
                </span>
              )}
              <span className="text-[17px] font-bold text-gold">{opt.preco}</span>
              <span className="mt-0.5 text-[13px] font-semibold text-cream">{opt.titulo}</span>
              <span className="mt-1.5 text-[12px] font-light leading-snug text-cream/55">{opt.desc}</span>
              <span className="mt-3 flex h-4 w-4 items-center justify-center rounded-full border border-cream/30 transition-colors peer-checked:border-gold">
                <span className="h-2 w-2 rounded-full bg-gold opacity-0 transition-opacity peer-checked:opacity-100" />
              </span>
            </label>
          ))}
        </div>
      </fieldset>

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
