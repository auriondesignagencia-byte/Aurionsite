import { Reveal } from "@/components/Reveal";

export function Portfolio() {
  return (
    <section id="portfolio" className="bg-black pb-12 pt-20 md:pt-28">
      <div className="mx-auto max-w-[1100px] px-6 text-center">
        <Reveal>
          <h2 className="mx-auto max-w-[880px] text-[26px] font-bold leading-[1.1] tracking-[-1px] text-white md:text-[44px]">
            Descubra outras marcas que{" "}
            <b className="font-bold">
              se tornaram as preferidas dos clientes mais exigentes
            </b>
          </h2>
          <p className="mx-auto mt-6 max-w-[700px] text-[16px] font-light leading-[27px] text-white/70 md:text-[18px]">
            Somos a Agência de Marketing de algumas das melhores marcas do país,
            trabalhando desde a estratégia até a execução de projetos de
            Marketing 360º
          </p>
        </Reveal>
      </div>

      <Reveal className="mx-auto mt-14 max-w-[1280px] px-4">
        <img
          src="/assets/2025/10/AGD-portfolio-2026-1.png"
          alt="Portfólio de cases da Agência Digitals"
          className="mx-auto w-full"
        />
      </Reveal>
    </section>
  );
}
