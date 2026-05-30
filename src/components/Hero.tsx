export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[700px] items-center justify-center overflow-hidden bg-black"
    >
      <img
        src="/assets/2022/03/agd-hero-v4.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(at -100px 100px, rgba(255,0,0,0.13) -100px, rgba(255,255,255,0) 1200px)",
        }}
      />
      <div className="absolute inset-0 bg-black/25" />

      <div className="relative z-10 mx-auto max-w-[900px] px-6 pt-24 text-center">
        <h1 className="text-[40px] font-bold capitalize leading-[1.08] tracking-[-1px] text-white sm:text-[52px] md:text-[60px]">
          Transformando marcas
          <br />
          em{" "}
          <span className="font-script text-[64px] font-normal capitalize sm:text-[80px] md:text-[92px]">
            Objeto de Desejo
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-[620px] text-[17px] font-light leading-[28px] text-white/90 md:text-[19px]">
          Uma Agência de Marketing para empresas de alto padrão que buscam
          sofisticação e resultados concretos em vendas
        </p>
        <a
          href="#contato"
          className="mt-10 inline-block rounded-[50px] border border-white px-9 py-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:bg-white hover:text-black"
        >
          solicitar orçamento
        </a>
      </div>
    </section>
  );
}
