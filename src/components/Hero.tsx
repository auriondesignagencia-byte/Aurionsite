export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[86vh] min-h-[680px] items-center justify-center overflow-hidden bg-black"
    >
      {/* Running background video (same as the reference site) */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        poster="/assets/2022/03/agd-hero-v4.jpg"
      >
        <source src="/assets/video/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay: subtle darken (like original .18) + readability + gold glow */}
      <div className="absolute inset-0 bg-black/45" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 18%, rgba(201,162,75,0.14), transparent 60%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[920px] px-6 pt-24 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-black/30 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold backdrop-blur-sm">
          Agência de Social Media Estratégica
        </span>

        <h1 className="mt-7 text-[38px] font-bold leading-[1.05] tracking-[-1px] text-white sm:text-[50px] md:text-[62px]">
          Marcas que comandam a percepção
          <br className="hidden sm:block" />{" "}
          <span className="font-script text-[58px] font-normal tracking-normal text-gold sm:text-[74px] md:text-[92px]">
            vendem mais
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-[620px] text-[17px] font-light leading-[28px] text-white/85 md:text-[20px] md:leading-[31px]">
          Na <strong className="font-semibold text-white">Aurion Design</strong>{" "}
          transformamos o seu posicionamento digital em autoridade, desejo e
          vendas — com estratégia de social media para marcas de alto padrão.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contato"
            className="rounded-full bg-gold px-10 py-4 text-[14px] font-bold uppercase tracking-[0.12em] text-emerald-deep transition-colors duration-300 hover:bg-gold-bright"
          >
            Quero minha análise gratuita
          </a>
          <a
            href="#autoridade"
            className="rounded-full border border-white/60 px-9 py-4 text-[13px] font-semibold uppercase tracking-[0.14em] text-white transition-colors duration-300 hover:bg-white hover:text-black"
          >
            Conhecer a agência
          </a>
        </div>
      </div>
    </section>
  );
}
