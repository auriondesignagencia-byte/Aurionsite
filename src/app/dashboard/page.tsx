import { createClient } from "@/lib/supabase/server";
import { logout } from "@/app/login/actions";
import { LeadStatusSelect } from "./LeadStatusSelect";

export const dynamic = "force-dynamic";

type Lead = {
  id: string;
  created_at: string;
  nome: string;
  whatsapp: string;
  empresa: string | null;
  investimento: string | null;
  social_media: string | null;
  instagram: string | null;
  segmento: string | null;
  status: string;
  notified: boolean;
};

function fmtDate(iso: string) {
  return new Date(iso).toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function waLink(whatsapp: string) {
  const t = whatsapp.replace(/\D/g, "");
  return `https://wa.me/${t.startsWith("55") ? t : "55" + t}`;
}

function countLast24h(leads: Lead[]) {
  const cutoff = Date.now() - 24 * 3600 * 1000;
  return leads.filter((l) => new Date(l.created_at).getTime() >= cutoff).length;
}

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data, error } = await supabase
    .from("leads")
    .select("*")
    .order("created_at", { ascending: false });

  const leads = (data ?? []) as Lead[];

  const total = leads.length;
  const novos = leads.filter((l) => l.status === "novo").length;
  const ganhos = leads.filter((l) => l.status === "ganho").length;
  const ultimas24h = countLast24h(leads);

  return (
    <main className="min-h-dvh bg-bg px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <header className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-[24px] font-bold text-cream">Painel de Leads</h1>
            <p className="text-[14px] font-light text-cream/60">
              {user?.email}
            </p>
          </div>
          <form action={logout}>
            <button className="rounded-full border border-cream/20 px-5 py-2.5 text-[13px] font-semibold text-cream/80 transition-colors hover:border-gold hover:text-gold">
              Sair
            </button>
          </form>
        </header>

        {/* Stats */}
        <section className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Stat label="Total de leads" value={total} />
          <Stat label="Novos" value={novos} accent />
          <Stat label="Últimas 24h" value={ultimas24h} />
          <Stat label="Ganhos" value={ganhos} />
        </section>

        {error && (
          <p className="mb-4 rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-[13px] text-red-300">
            Erro ao carregar leads: {error.message}
          </p>
        )}

        {/* Tabela */}
        <section className="overflow-x-auto rounded-2xl border border-cream/10 bg-panel/50">
          {leads.length === 0 ? (
            <p className="px-6 py-12 text-center text-[14px] font-light text-cream/50">
              Nenhum lead ainda. Assim que alguém preencher o formulário, aparece aqui.
            </p>
          ) : (
            <table className="w-full min-w-[860px] text-left text-[13px]">
              <thead className="border-b border-cream/10 text-[11px] uppercase tracking-wider text-cream/40">
                <tr>
                  <th className="px-4 py-3 font-semibold">Data</th>
                  <th className="px-4 py-3 font-semibold">Nome</th>
                  <th className="px-4 py-3 font-semibold">WhatsApp</th>
                  <th className="px-4 py-3 font-semibold">Instagram</th>
                  <th className="px-4 py-3 font-semibold">Investimento</th>
                  <th className="px-4 py-3 font-semibold">Social</th>
                  <th className="px-4 py-3 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-cream/5">
                {leads.map((l) => (
                  <tr key={l.id} className="text-cream/85 transition-colors hover:bg-cream/[0.03]">
                    <td className="whitespace-nowrap px-4 py-3 text-cream/55">
                      {fmtDate(l.created_at)}
                    </td>
                    <td className="px-4 py-3 font-semibold text-cream">{l.nome}</td>
                    <td className="whitespace-nowrap px-4 py-3">
                      <a
                        href={waLink(l.whatsapp)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gold hover:text-gold-bright"
                      >
                        {l.whatsapp}
                      </a>
                    </td>
                    <td className="px-4 py-3 text-cream/70">{l.instagram ?? "—"}</td>
                    <td className="px-4 py-3 text-cream/70">{l.investimento ?? "—"}</td>
                    <td className="px-4 py-3 text-cream/70">{l.social_media ?? "—"}</td>
                    <td className="px-4 py-3">
                      <LeadStatusSelect id={l.id} initial={l.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </section>
      </div>
    </main>
  );
}

function Stat({
  label,
  value,
  accent,
}: {
  label: string;
  value: number;
  accent?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-cream/10 bg-panel/50 p-5">
      <p className="text-[12px] font-light uppercase tracking-wider text-cream/50">
        {label}
      </p>
      <p
        className={`mt-1 text-[28px] font-bold ${accent ? "text-gold" : "text-cream"}`}
      >
        {value}
      </p>
    </div>
  );
}
