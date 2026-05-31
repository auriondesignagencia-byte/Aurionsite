import { NextResponse } from "next/server";
import { promises as fs } from "node:fs";
import path from "node:path";

// Runs on the Node runtime so we can persist leads to disk.
export const runtime = "nodejs";

const LEADS_FILE = path.join(process.cwd(), "data", "leads.json");

interface Lead {
  nome: string;
  whatsapp: string;
  instagram?: string;
  segmento?: string;
  recebidoEm: string;
}

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

    const lead: Lead = {
      nome,
      whatsapp,
      instagram: String(body?.instagram ?? "").trim(),
      segmento: String(body?.segmento ?? "").trim(),
      recebidoEm: new Date().toISOString(),
    };

    // Append to data/leads.json (swap this block for your CRM/webhook later).
    let leads: Lead[] = [];
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
