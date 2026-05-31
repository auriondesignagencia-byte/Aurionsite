import { Reveal } from "@/components/Reveal";
import { LeadForm } from "@/components/LeadForm";

const STATS = [
  { value: "+200", label: "negócios alavancados" },
  { value: "+45%", label: "de faturamento médio" },
  { value: "+5 anos", label: "de mercado" },
];

export function Authority() {
  return (
    <section id="autoridade" className="relative overflow-hidden bg-emerald-deep py-20 md:py-28">
      <div className="mx-auto grid max-w-[1140px] items-center gap-12 px-6 lg:grid-cols-[0.82fr_1.18fr]">
        {/* Photo + credibility */}
        <Reveal className="mx-auto w-full max-w-[380px]">
          <div className="relative">
            <div className="absolute -inset-3 rounded-[28px] bg-gradient-to-br from-gold/30 to-transparent blur-xl" />
            <img
              src="/assets/team/especialista.jpeg"
              alt="Especialista e fundadora da Aurion Design"
              className="relative w-full rounded-[24px] border border-gold/30 object-cover"
            />
          </div>
          {/* TODO: troque pelo nome real da fundadora quando quiser */}
          <p className="mt-5 text-center text-[15px] font-semibold tracking-wide text-cream">
            Fundadora &amp; Estrategista de Social Media
          </p>
          <a
            href="https://instagram.com/auriondesign_"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 block text-center text-[14px] font-light text-gold transition-colors hover:text-gold-bright"
          >
            @auriondesign_
          </a>
          <div className="mt-5 flex justify-center gap-8 border-t border-cream/10 pt-5">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-[24px] font-bold text-gold">{s.value}</p>
                <p className="text-[12px] font-light text-cream/60">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Lead form */}
        <Reveal delay={120} className="rounded-3xl border border-gold/25 bg-bg/55 p-7 backdrop-blur-sm md:p-9">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
            Fale com a especialista
          </span>
          <h2 className="mt-3 text-[26px] font-bold leading-[1.12] tracking-[-0.5px] text-cream md:text-[32px]">
            Preencha abaixo. Em até{" "}
            <span className="text-gold">5 minutos</span> a gente te chama no
            WhatsApp pra montar a sua estratégia de social media
          </h2>
          <p className="mt-4 text-[15px] font-light leading-[24px] text-cream/65">
            O que a gente vai fazer na primeira conversa: entender o seu negócio,
            mostrar como o social media pode aumentar as suas vendas e te passar
            um orçamento sem enrolação.
          </p>
          <div className="mt-7">
            <LeadForm id="lead-autoridade" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
