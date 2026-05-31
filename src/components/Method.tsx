import { Reveal } from "@/components/Reveal";

const STEPS = [
  {
    n: "01",
    title: "Diagnóstico",
    text: "Analisamos seu perfil, mercado e concorrência para entender onde estão as oportunidades de crescimento.",
  },
  {
    n: "02",
    title: "Estratégia",
    text: "Definimos posicionamento, pilares de conteúdo e o plano que vai transformar percepção em vendas.",
  },
  {
    n: "03",
    title: "Produção",
    text: "Criamos conteúdo, design e campanhas com estética de alto padrão e foco total em performance.",
  },
  {
    n: "04",
    title: "Crescimento",
    text: "Acompanhamos métricas, otimizamos e escalamos — sua marca crescendo de forma consistente e previsível.",
  },
];

export function Method() {
  return (
    <section id="metodo" className="bg-bg py-20 md:py-28">
      <div className="mx-auto max-w-[1100px] px-6">
        <Reveal className="mx-auto max-w-[720px] text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
            Como trabalhamos
          </span>
          <h2 className="mt-4 text-[28px] font-bold leading-[1.12] tracking-[-0.5px] text-cream md:text-[40px]">
            Um método claro para{" "}
            <span className="font-script text-[40px] font-normal tracking-normal text-gold md:text-[54px]">
              resultados reais
            </span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} as="article" delay={(i % 4) * 80} className="relative">
              <p className="font-script text-[56px] leading-none text-gold/50">{s.n}</p>
              <h3 className="mt-2 text-[20px] font-bold text-cream">{s.title}</h3>
              <p className="mt-3 text-[15px] font-light leading-[25px] text-cream/65">
                {s.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
