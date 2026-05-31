import type { NavLink } from "@/types/content";

const LINKS: NavLink[] = [
  { label: "Autoridade", href: "#autoridade" },
  { label: "Serviços", href: "#servicos" },
  { label: "Método", href: "#metodo" },
  { label: "Contato", href: "#autoridade" },
];

export function Footer() {
  return (
    <footer className="border-t border-cream/10 bg-bg pt-16 pb-10 text-cream">
      <div className="mx-auto max-w-[1100px] px-6">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div className="max-w-[360px]">
            <div className="flex items-center gap-3">
              <img
                src="/assets/brand/aurion-mark.jpeg"
                alt="Aurion Design"
                className="h-11 w-11 rounded-full object-cover ring-1 ring-gold/40"
              />
              <span className="flex flex-col leading-none">
                <span className="text-[16px] font-bold tracking-[0.22em] text-cream">AURION</span>
                <span className="text-[9px] font-semibold tracking-[0.42em] text-gold">DESIGN</span>
              </span>
            </div>
            <p className="mt-5 text-[14px] font-light leading-[23px] text-cream/60">
              Posicionamento &amp; estratégia digital para marcas que querem
              comandar a percepção e vender mais.
            </p>
            <a
              href="https://instagram.com/auriondesign_"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-[14px] font-light text-gold transition-colors hover:text-gold-bright"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
              </svg>
              @auriondesign_
            </a>
          </div>

          <nav className="grid grid-cols-2 gap-x-12 gap-y-3 sm:flex sm:flex-col">
            {LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-[14px] font-light text-cream/70 transition-colors hover:text-gold"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="max-w-[280px]">
            <h3 className="text-[13px] font-semibold uppercase tracking-[0.18em] text-cream">
              Fale com a gente
            </h3>
            <p className="mt-4 text-[14px] font-light leading-[22px] text-cream/60">
              Pronto para posicionar a sua marca? Comece pela sua análise
              gratuita.
            </p>
            <a
              href="#autoridade"
              className="mt-5 inline-block rounded-full bg-gold px-7 py-3.5 text-[12px] font-bold uppercase tracking-[0.12em] text-emerald-deep transition-colors hover:bg-gold-bright"
            >
              Quero minha análise
            </a>
          </div>
        </div>

        <div className="mt-14 border-t border-cream/10 pt-7 text-[13px] font-light text-cream/40">
          <p>© {new Date().getFullYear()} Aurion Design · Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
