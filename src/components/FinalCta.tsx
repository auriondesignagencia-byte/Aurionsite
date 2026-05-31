import { LeadForm } from "@/components/LeadForm";
import { Reveal } from "@/components/Reveal";

export function FinalCta() {
  return (
    <section id="contato" className="relative overflow-hidden bg-emerald-deep py-20 md:py-28">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 50% at 80% 0%, rgba(201,162,75,0.18), transparent 65%)",
        }}
      />
      <div className="relative mx-auto grid max-w-[1080px] items-center gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
            Vamos começar
          </span>
          <h2 className="mt-4 text-[30px] font-bold leading-[1.08] tracking-[-0.5px] text-cream md:text-[44px]">
            Sua marca pronta para{" "}
            <span className="font-script text-[44px] font-normal tracking-normal text-gold md:text-[60px]">
              comandar a percepção
            </span>
          </h2>
          <p className="mt-6 max-w-[520px] text-[17px] font-light leading-[28px] text-cream/75">
            Preencha o formulário e receba uma análise estratégica gratuita do
            seu Instagram. Nossa equipe vai te chamar para mostrar exatamente
            como transformar o seu perfil em uma máquina de autoridade e vendas.
          </p>
          <ul className="mt-7 flex flex-col gap-3">
            {[
              "Diagnóstico do seu perfil sem custo",
              "Plano de ação personalizado",
              "Atendimento humano e próximo",
            ].map((t) => (
              <li key={t} className="flex items-center gap-3 text-[15px] font-light text-cream/80">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                  <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {t}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120} className="rounded-3xl border border-gold/25 bg-bg/60 p-7 backdrop-blur-sm md:p-8">
          <h3 className="text-[22px] font-bold text-cream">
            Quero minha <span className="text-gold">análise gratuita</span>
          </h3>
          <p className="mt-2 text-[14px] font-light text-cream/65">
            Leva menos de 1 minuto para preencher.
          </p>
          <div className="mt-6">
            <LeadForm id="lead-final" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
