import { LeadForm } from "@/components/LeadForm";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-bg pt-[84px]"
    >
      {/* ambient glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 15% 0%, rgba(201,162,75,0.16), transparent 60%), radial-gradient(50% 40% at 100% 30%, rgba(14,61,46,0.55), transparent 70%)",
        }}
      />

      <div className="relative mx-auto grid max-w-[1180px] items-center gap-12 px-6 py-16 md:py-24 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Copy */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
            Agência de Social Media Estratégica
          </span>
          <h1 className="mt-6 text-[36px] font-bold leading-[1.05] tracking-[-1px] text-cream sm:text-[46px] md:text-[56px]">
            Marcas que comandam a percepção{" "}
            <span className="font-script text-[52px] font-normal tracking-normal text-gold sm:text-[64px] md:text-[78px]">
              vendem mais
            </span>
          </h1>
          <p className="mt-6 max-w-[540px] text-[17px] font-light leading-[28px] text-cream/75 md:text-[19px]">
            Pare de postar no escuro. Na <strong className="font-semibold text-cream">Aurion Design</strong>{" "}
            transformamos o seu posicionamento digital em autoridade, desejo e
            vendas — com estratégia de social media feita para marcas de alto
            padrão.
          </p>

          <ul className="mt-8 flex flex-col gap-3">
            {[
              "Conteúdo com estratégia, não com achismo",
              "Posicionamento que cria autoridade e desejo",
              "Um perfil que atrai e converte clientes todos os dias",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-[15px] font-light text-cream/80">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                  <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Lead form card */}
        <div className="rounded-3xl border border-gold/25 bg-panel/60 p-7 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)] backdrop-blur-sm md:p-8">
          <h2 className="text-[22px] font-bold leading-tight text-cream md:text-[25px]">
            Receba uma{" "}
            <span className="text-gold">análise gratuita</span> do seu perfil
          </h2>
          <p className="mt-2 text-[14px] font-light text-cream/65">
            Preencha abaixo e nossa equipe entra em contato com um diagnóstico
            estratégico do seu Instagram — sem custo.
          </p>
          <div className="mt-6">
            <LeadForm id="lead-hero" />
          </div>
        </div>
      </div>
    </section>
  );
}
