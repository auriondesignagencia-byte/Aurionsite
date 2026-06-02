import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Obrigado | Aurion Design",
  robots: { index: false, follow: false },
};

export default function ObrigadoPage() {
  return (
    <main className="flex min-h-dvh items-center justify-center bg-bg px-6 text-center">
      <div className="max-w-md">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gold text-emerald-deep">
          <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none">
            <path
              d="M5 13l4 4L19 7"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h1 className="text-[26px] font-bold text-cream sm:text-[30px]">
          Recebemos o seu contato!
        </h1>
        <p className="mt-3 text-[16px] font-light leading-relaxed text-cream/70">
          Em até 5 minutos a nossa equipe vai te chamar no WhatsApp. Fique de olho! 📲
        </p>
      </div>
    </main>
  );
}
