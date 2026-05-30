import { Reveal } from "@/components/Reveal";

export function PerformanceIntro() {
  return (
    <>
      {/* section-976: intro statement */}
      <section className="bg-black pt-10 pb-16 md:pb-24">
        <div className="mx-auto max-w-[1100px] px-6">
          <Reveal className="max-w-[760px]">
            <h2 className="text-[34px] font-bold leading-[1.05] tracking-[-1px] text-white md:text-[48px]">
              Não existe beleza{" "}
              <span className="font-script text-[48px] font-normal tracking-normal md:text-[66px]">
                sem performance
              </span>
            </h2>
            <p className="mt-7 max-w-[640px] text-[16px] font-light leading-[27px] text-white/70 md:text-[17px]">
              Muitas empresas têm dificuldade de usar o digital para multiplicar
              seu crescimento. Somos uma Agência de Marketing com atuação
              internacional especializada em marcas de alto padrão que buscam uma
              solução completa e efetiva, para aumentar suas vendas e criar
              desejo com elegância e minimalismo.
            </p>
            <a
              href="#contato"
              className="mt-8 inline-block rounded-[50px] border border-white/80 px-8 py-3.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:bg-white hover:text-black"
            >
              entrar em contato
            </a>
          </Reveal>
        </div>
      </section>

      {/* section-199: device mockups showcase */}
      <section className="overflow-hidden bg-black pb-8">
        <div className="mx-auto max-w-[1100px] px-6">
          <Reveal className="flex flex-col items-center justify-center gap-8 md:flex-row md:items-end">
            <img
              src="/assets/2021/12/MacBook-Pro-2021-Mockup.png"
              alt="Projeto da agência exibido em MacBook"
              className="w-full max-w-[680px]"
            />
            <img
              src="/assets/2022/01/iphone-13-phiocare_frente_v2-1024x888.png"
              alt="Aplicativo exibido em iPhone"
              className="-mt-10 w-[200px] max-w-full md:mb-6 md:ml-[-80px] md:w-[230px]"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
