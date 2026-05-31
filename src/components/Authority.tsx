import { Reveal } from "@/components/Reveal";

const STATS = [
  { value: "+1.000", label: "seguidores engajados" },
  { value: "58", label: "conteúdos publicados" },
  { value: "100%", label: "foco em estratégia" },
];

export function Authority() {
  return (
    <section id="autoridade" className="relative overflow-hidden bg-emerald-deep py-20 md:py-28">
      <div className="mx-auto grid max-w-[1100px] items-center gap-12 px-6 lg:grid-cols-[0.85fr_1.15fr]">
        {/* Photo */}
        <Reveal className="relative mx-auto w-full max-w-[380px]">
          <div className="absolute -inset-3 rounded-[28px] bg-gradient-to-br from-gold/30 to-transparent blur-xl" />
          <img
            src="/assets/team/especialista.jpeg"
            alt="Especialista e fundadora da Aurion Design"
            className="relative w-full rounded-[24px] border border-gold/30 object-cover"
          />
        </Reveal>

        {/* Content */}
        <Reveal delay={120}>
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
            A autoridade por trás da Aurion
          </span>
          <h2 className="mt-4 text-[30px] font-bold leading-[1.1] tracking-[-0.5px] text-cream md:text-[40px]">
            Estratégia de quem vive{" "}
            <span className="font-script text-[40px] font-normal tracking-normal text-gold md:text-[54px]">
              social media
            </span>{" "}
            todos os dias
          </h2>

          {/* TODO: troque pelo nome real da fundadora quando quiser */}
          <p className="mt-4 text-[15px] font-semibold tracking-wide text-cream">
            Fundadora &amp; Estrategista de Social Media
            <span className="ml-2 font-light text-gold">@auriondesign_</span>
          </p>

          <p className="mt-5 max-w-[560px] text-[16px] font-light leading-[27px] text-cream/75">
            À frente da Aurion Design, ajudo marcas a saírem do feed comum para
            se tornarem referências desejadas. Não se trata de postar mais — se
            trata de posicionar melhor. Cada conteúdo é pensado para construir
            percepção de valor, autoridade e vontade de comprar.
          </p>
          <p className="mt-4 max-w-[560px] text-[16px] font-light leading-[27px] text-cream/75">
            É essa visão estratégica, unindo estética de alto padrão e
            performance de vendas, que coloca a sua marca à frente da
            concorrência.
          </p>

          <div className="mt-8 flex flex-wrap gap-8 border-t border-cream/10 pt-6">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="text-[28px] font-bold text-gold">{s.value}</p>
                <p className="text-[13px] font-light text-cream/60">{s.label}</p>
              </div>
            ))}
          </div>

          <a
            href="#contato"
            className="mt-8 inline-block rounded-full border border-gold px-8 py-3.5 text-[13px] font-semibold uppercase tracking-[0.14em] text-gold transition-colors duration-300 hover:bg-gold hover:text-emerald-deep"
          >
            Quero falar com a especialista
          </a>
        </Reveal>
      </div>
    </section>
  );
}
