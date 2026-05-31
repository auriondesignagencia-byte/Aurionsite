"use client";

import { useEffect, useState } from "react";
import { MenuIcon, CloseIcon } from "@/components/icons";
import type { NavLink } from "@/types/content";

const LINKS: NavLink[] = [
  { label: "Autoridade", href: "#autoridade" },
  { label: "Serviços", href: "#servicos" },
  { label: "Método", href: "#metodo" },
  { label: "Contato", href: "#autoridade" },
];

function Brand({ onClick }: { onClick?: () => void }) {
  return (
    <a href="#top" onClick={onClick} className="flex items-center gap-3" aria-label="Aurion Design">
      <img
        src="/assets/brand/aurion-mark.jpeg"
        alt="Aurion Design"
        className="h-10 w-10 rounded-full object-cover ring-1 ring-gold/40"
      />
      <span className="flex flex-col leading-none">
        <span className="text-[15px] font-bold tracking-[0.22em] text-cream">AURION</span>
        <span className="text-[9px] font-semibold tracking-[0.42em] text-gold">DESIGN</span>
      </span>
    </a>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 h-[84px] border-b border-cream/5 bg-bg/70 backdrop-blur-md">
        <div className="mx-auto flex h-full max-w-[1180px] items-center justify-between px-6">
          <Brand />
          <nav className="hidden items-center gap-9 md:flex">
            {LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-[14px] font-light text-cream/75 transition-colors hover:text-gold"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="#autoridade"
            className="hidden rounded-full bg-gold px-6 py-3 text-[12px] font-bold uppercase tracking-[0.12em] text-emerald-deep transition-colors hover:bg-gold-bright md:inline-block"
          >
            Falar com especialista
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="text-cream md:hidden"
            aria-label="Abrir menu"
          >
            <MenuIcon className="h-5 w-7" />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[60] bg-emerald-deep transition-opacity duration-500 md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col px-6 py-7">
          <div className="flex items-center justify-between">
            <Brand onClick={() => setOpen(false)} />
            <button type="button" onClick={() => setOpen(false)} className="text-cream" aria-label="Fechar menu">
              <CloseIcon className="h-7 w-7" />
            </button>
          </div>
          <nav className="flex flex-1 flex-col justify-center gap-3">
            {LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-script text-[46px] leading-tight text-cream transition-colors hover:text-gold"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#autoridade"
              onClick={() => setOpen(false)}
              className="mt-6 w-fit rounded-full bg-gold px-7 py-4 text-[13px] font-bold uppercase tracking-[0.12em] text-emerald-deep"
            >
              Falar com especialista
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}
