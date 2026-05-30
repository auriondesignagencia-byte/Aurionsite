import type { NavLink, OfficeAddress } from "@/types/content";

const FOOTER_LINKS: NavLink[] = [
  { label: "sobre nós", href: "https://agenciadigitals.com.br/sobre-nos/" },
  { label: "o que fazemos", href: "#o-que-fazemos" },
  { label: "nossos cases", href: "#portfolio" },
  { label: "Conteúdos", href: "https://agenciadigitals.com.br/conteudos" },
  { label: "cursos", href: "https://academia.agenciadigitals.com.br" },
  { label: "vagas", href: "mailto:vagas@agenciadigitals.com.br" },
];

const OFFICES: OfficeAddress[] = [
  {
    city: "RIO DE JANEIRO",
    lines:
      "Av. das Américas, 3434 - Cond. Mario Henrique Simonsen Bloco 4, Sala 409 Barra da Tijuca, Rio de Janeiro - RJ, 22640-102",
  },
  {
    city: "SÃO PAULO",
    lines:
      "Av Presidente Juscelino Kubitschek, 2041 - Bloco B Cond. WTorre JK Vila Nova Conceição, São Paulo - SP, 04.543-011",
  },
];

export function Footer() {
  return (
    <footer id="contato" className="bg-[#191919] pt-20 pb-10 text-white">
      <div className="mx-auto max-w-[1100px] px-6">
        <div className="flex flex-col gap-14 lg:flex-row lg:justify-between">
          {/* Brand + CTA */}
          <div className="max-w-[360px]">
            <img
              src="/assets/2023/08/logotipo-v2-branco.svg"
              alt="Agência Digitals"
              className="h-9 w-auto"
            />
            <a
              href="#contato"
              className="mt-9 inline-block rounded-[50px] border border-white px-8 py-3.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:bg-white hover:text-black"
            >
              solicitar orçamento
            </a>
          </div>

          {/* Nav */}
          <nav className="grid grid-cols-2 gap-x-12 gap-y-3">
            {FOOTER_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-[14px] font-light uppercase tracking-[0.1em] text-white/70 transition-colors hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Offices */}
          <div className="grid gap-10 sm:grid-cols-2 lg:max-w-[460px]">
            {OFFICES.map((o) => (
              <div key={o.city} className="max-w-[220px]">
                <h3 className="text-[13px] font-semibold tracking-[0.18em] text-white">
                  {o.city}
                </h3>
                <p className="mt-3 text-[13px] font-light leading-[21px] text-white/55">
                  {o.lines}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-[13px] font-light text-white/50 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-1">
            <a
              href="mailto:contato@agenciadigitals.com.br"
              className="transition-colors hover:text-white"
            >
              contato@agenciadigitals.com.br
            </a>
            <a href="tel:+5521995737570" className="transition-colors hover:text-white">
              +55 21 99573-7570
            </a>
          </div>
          <div className="text-white/40 md:text-right">
            <p>AGÊNCIA DIGITALS MARKETING DIRETO LTDA</p>
            <p>CNPJ 34.279.341/0001-60 · CNPJ 61.410.455/0001-70</p>
            <p className="mt-1">Todos os direitos reservados · Agência Digitals 2023</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
