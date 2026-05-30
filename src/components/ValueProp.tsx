import { Reveal } from "@/components/Reveal";

const CAPABILITIES = [
  "Estratégia de Marketing",
  "Operação de Marketing",
  "Gestão de Tráfego e Ads",
  "Design (padrão internacional)",
  "Conteúdo e Social Media",
  "Produtora de Vídeo",
];

export function ValueProp() {
  return (
    <section className="bg-black py-20 md:py-28">
      <div className="mx-auto max-w-[1100px] px-6">
        <Reveal className="max-w-[820px]">
          <h2 className="text-[30px] font-bold leading-[1.05] tracking-[-1px] text-white md:text-[44px]">
            Marcas que não vendem{" "}
            <span className="font-script text-[44px] font-normal tracking-normal md:text-[60px]">
              não resistem ao tempo
            </span>
          </h2>
          <p className="mt-7 max-w-[680px] text-[16px] font-light leading-[27px] text-white/70 md:text-[17px]">
            Nosso trabalho ajuda a responder uma questão essencial:{" "}
            <span className="text-white">
              “por que as pessoas deveriam comprar de você?”
            </span>{" "}
            A Agência Digitals trabalha com empresas de alto padrão, reduzindo
            seu CPA (Custo de Aquisição do Cliente), construindo uma reputação
            sofisticada e acelerando a performance de vendas, tanto no digital
            quanto no mundo físico, usando o limite da tecnologia para
            multiplicar seus resultados.
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-16 max-w-[820px]">
          <h3 className="text-[24px] font-bold leading-[1.2] text-white md:text-[30px]">
            Sua operação de Marketing e vendas, pronta para usar
          </h3>
          <p className="mt-5 text-[16px] font-light leading-[27px] text-white/70">
            A Agência Digitals pode se adaptar para absorver completa ou
            parcialmente suas demandas de Marketing e Vendas:
          </p>

          <ul className="mt-8 grid gap-x-10 gap-y-3 sm:grid-cols-2">
            {CAPABILITIES.map((c) => (
              <li
                key={c}
                className="flex items-center gap-3 text-[16px] font-light text-white/90"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
                {c}
              </li>
            ))}
          </ul>

          <p className="mt-8 max-w-[680px] text-[16px] font-light leading-[27px] text-white/70">
            Evite o custo de contratar, treinar e gerir profissionais de
            Marketing, Design, Conteúdo, Vídeo e Gestão de Tráfego, com uma
            operação integrada, simples e entregas fluidas, desde o primeiro
            dia. Nossa solução custa até{" "}
            <span className="text-white">75% menos</span> do que montar uma
            equipe interna na sua empresa, e conseguimos entregar resultados até{" "}
            <span className="text-white">3x mais rápidos</span> com o nosso fluxo
            otimizado.
          </p>

          <a
            href="#contato"
            className="mt-8 inline-block rounded-[50px] border border-white/80 px-8 py-3.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:bg-white hover:text-black"
          >
            falar com um especialista
          </a>
        </Reveal>
      </div>
    </section>
  );
}
