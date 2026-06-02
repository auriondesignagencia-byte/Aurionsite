"use client";

import { use, useActionState } from "react";
import { login, type LoginState } from "./actions";

export default function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ redirect?: string }>;
}) {
  const sp = use(searchParams);
  const [state, formAction, pending] = useActionState<LoginState, FormData>(
    login,
    {},
  );

  const inputCls =
    "w-full rounded-xl border border-cream/15 bg-black/30 px-4 py-3.5 text-[15px] text-cream placeholder:text-cream/40 outline-none transition-colors focus:border-gold";

  return (
    <main className="flex min-h-dvh items-center justify-center bg-bg px-4">
      <div className="w-full max-w-sm rounded-2xl border border-cream/10 bg-panel/60 p-8">
        <div className="mb-6 text-center">
          <h1 className="text-[22px] font-bold text-cream">Aurion · Comercial</h1>
          <p className="mt-1 text-[14px] font-light text-cream/60">
            Acesse o painel de leads
          </p>
        </div>

        <form action={formAction} className="grid gap-3">
          <input type="hidden" name="redirect" value={sp.redirect ?? "/dashboard"} />
          <input
            name="email"
            type="email"
            required
            placeholder="E-mail"
            className={inputCls}
          />
          <input
            name="password"
            type="password"
            required
            placeholder="Senha"
            className={inputCls}
          />

          <button
            type="submit"
            disabled={pending}
            className="mt-1 rounded-full bg-gold px-7 py-4 text-[14px] font-bold uppercase tracking-[0.12em] text-emerald-deep transition-all duration-300 hover:bg-gold-bright disabled:opacity-60"
          >
            {pending ? "Entrando..." : "Entrar"}
          </button>

          {state.error && (
            <p className="text-center text-[13px] text-red-300">{state.error}</p>
          )}
        </form>
      </div>
    </main>
  );
}
