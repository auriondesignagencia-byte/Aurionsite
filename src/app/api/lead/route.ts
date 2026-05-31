import { NextResponse } from "next/server";
import { promises as fs } from "node:fs";
import path from "node:path";

// Runs on the Node runtime so we can persist leads to disk.
export const runtime = "nodejs";

const LEADS_FILE = path.join(process.cwd(), "data", "leads.json");

const FIELDS = [
  "nome",
  "whatsapp",
  "email",
  "empresa",
  "faturamento",
  "socialMedia",
  "instagram",
  "segmento",
] as const;

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

    const lead: Record<string, string> = { recebidoEm: new Date().toISOString() };
    for (const f of FIELDS) {
      const v = String(body?.[f] ?? "").trim();
      if (v) lead[f] = v;
    }

    // Append to data/leads.json (swap this block for your CRM/webhook later).
    let leads: unknown[] = [];
    try {
      leads = JSON.parse(await fs.readFile(LEADS_FILE, "utf8"));
    } catch {
      leads = [];
    }
    leads.push(lead);
    await fs.mkdir(path.dirname(LEADS_FILE), { recursive: true });
    await fs.writeFile(LEADS_FILE, JSON.stringify(leads, null, 2), "utf8");

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Não foi possível registrar agora. Tente novamente." },
      { status: 500 },
    );
  }
}
