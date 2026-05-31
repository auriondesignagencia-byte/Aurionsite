import { Reveal } from "@/components/Reveal";

const PAINS = [
  {
    title: "Você posta, posta… e não vende",
    text: "O perfil até tem movimento, mas o conteúdo não vira cliente. Falta uma estratégia que conecte presença digital com vendas reais.",
  },
  {
    title: "Sua marca parece menor do que é",
    text: "A qualidade da sua entrega é alta, mas a comunicação não reflete isso — e o cliente percebe menos valor do que você realmente entrega.",
  },
  {
    title: "Você depende só de indicação",
    text: "Sem um posicionamento que atrai sozinho, o crescimento fica refém do boca a boca e da sorte. Isso trava a escala do seu negócio.",
  },
  {
    title: "Falta tempo e direção",
    text: "Você sabe que precisa estar presente, mas não tem tempo nem clareza de o que postar, quando e por quê. Resultado: inconsistência.",
  },
];

export function Pains() {
  return (
    <section className="bg-bg py-20 md:py-28">
      <div className="mx-auto max-w-[1100px] px-6">
        <Reveal className="mx-auto max-w-[720px] text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
            Talvez você se identifique
          </span>
          <h2 className="mt-4 text-[28px] font-bold leading-[1.12] tracking-[-0.5px] text-cream md:text-[40px]">
            Seu Instagram pode estar{" "}
            <span className="font-script text-[40px] font-normal tracking-normal text-gold md:text-[54px]">
              custando vendas
            </span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {PAINS.map((p, i) => (
            <Reveal
              key={p.title}
              as="article"
              delay={(i % 2) * 90}
              className="rounded-2xl border border-cream/10 bg-panel/40 p-7 transition-colors hover:border-gold/40"
            >
              <h3 className="text-[19px] font-bold text-cream">{p.title}</h3>
              <p className="mt-3 text-[15px] font-light leading-[25px] text-cream/65">
                {p.text}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <p className="mx-auto max-w-[640px] text-[18px] font-light leading-[28px] text-cream/80 md:text-[20px]">
            A boa notícia? Tudo isso muda quando existe{" "}
            <span className="font-semibold text-gold">estratégia por trás de cada post.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
