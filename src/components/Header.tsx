"use client";

import { useEffect, useState } from "react";
import { MenuIcon, CloseIcon } from "@/components/icons";
import type { NavLink } from "@/types/content";

const PRIMARY_LINKS: NavLink[] = [
  { label: "Home", href: "#" },
  { label: "Sobre nós", href: "https://agenciadigitals.com.br/sobre-nos/" },
  { label: "O que fazemos", href: "#o-que-fazemos" },
  { label: "Nossos cases", href: "#portfolio" },
  { label: "contato", href: "#contato" },
];

const SECONDARY_LINKS: NavLink[] = [
  { label: "Conteúdos", href: "https://agenciadigitals.com.br/blog/" },
  { label: "Treinamentos", href: "https://agenciadigitals.com.br/treinamentos/" },
  { label: "Vagas", href: "https://agenciadigitals.com.br/vagas/" },
];

const LOGO = "/assets/2023/08/cropped-AGD-SIMBOLO-V2-favicon-branco-270x270.png";

export function Header() {
  const [open, setOpen] = useState(false);

  // Lock body scroll while the overlay menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 h-[95px]">
        <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between px-6">
          <a href="#" className="flex items-center gap-3" aria-label="Agência Digitals">
            <img src={LOGO} alt="" className="h-9 w-9 object-contain" />
            <span className="text-[13px] font-semibold tracking-[0.32em] text-white">
              AGÊNCIA DIGITALS
            </span>
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="flex items-center gap-3 text-[12px] font-semibold tracking-[0.3em] text-white transition-opacity hover:opacity-70"
            aria-label="Abrir menu"
          >
            MENU
            <MenuIcon className="h-4 w-6" />
          </button>
        </div>
      </header>

      {/* Full-screen overlay menu */}
      <div
        className={`fixed inset-0 z-[60] bg-[#0f0f0f] transition-opacity duration-500 ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="mx-auto flex h-full max-w-[1200px] flex-col px-6 py-8">
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center gap-3" onClick={() => setOpen(false)}>
              <img src={LOGO} alt="" className="h-9 w-9 object-contain" />
              <span className="text-[13px] font-semibold tracking-[0.32em] text-white">
                AGÊNCIA DIGITALS
              </span>
            </a>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-white transition-opacity hover:opacity-70"
              aria-label="Fechar menu"
            >
              <CloseIcon className="h-7 w-7" />
            </button>
          </div>

          <nav className="flex flex-1 flex-col justify-center gap-2">
            {PRIMARY_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="w-fit font-script text-[56px] leading-[1.1] text-white transition-colors hover:text-white/60"
              >
                {l.label}
              </a>
            ))}
            <span className="mt-8 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/40">
              outros
            </span>
            <div className="mt-3 flex flex-wrap gap-x-8 gap-y-2">
              {SECONDARY_LINKS.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-[15px] text-white/70 transition-colors hover:text-white"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
