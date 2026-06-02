import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { notifyNewLead } from "@/lib/zapi";

export const runtime = "nodejs";

// Campos do form -> colunas da tabela leads.
const FIELDS = {
  email: "email",
  empresa: "empresa",
  faturamento: "faturamento",
  socialMedia: "social_media",
  instagram: "instagram",
  segmento: "segmento",
} as const;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const nome = String(body?.nome ?? "").trim();
    const whatsapp = String(body?.whatsapp ?? "").trim();

    if (!nome || !whatsapp) {
      return NextResponse.json(
        { ok: false, error: "Nome e WhatsApp são obrigatórios." },
        { status: 400 },
      );
    }

    const lead: Record<string, string> = { nome, whatsapp };
    for (const [field, column] of Object.entries(FIELDS)) {
      const v = String(body?.[field] ?? "").trim();
      if (v) lead[column] = v;
    }

    const supabase = createAdminClient();
    const { data, error } = await supabase
      .from("leads")
      .insert(lead)
      .select()
      .single();

    if (error) {
      console.error("[lead] erro ao gravar no Supabase", error);
      return NextResponse.json(
        { ok: false, error: "Não foi possível registrar agora. Tente novamente." },
        { status: 500 },
      );
    }

    // Dispara no grupo do comercial. Não bloqueia a resposta de sucesso:
    // se a Z-API falhar, o lead já está salvo e marcamos notified=false.
    const notify = await notifyNewLead(data);
    if (notify.ok) {
      await supabase.from("leads").update({ notified: true }).eq("id", data.id);
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Não foi possível registrar agora. Tente novamente." },
      { status: 500 },
    );
  }
}
