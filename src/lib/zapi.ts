// Integração Z-API — disparo de texto no grupo do comercial.
// Docs: https://developer.z-api.io/message/send-message-text

type Lead = {
  nome: string;
  whatsapp: string;
  email?: string | null;
  empresa?: string | null;
  faturamento?: string | null;
  social_media?: string | null;
  instagram?: string | null;
  segmento?: string | null;
};

function digits(s: string) {
  return s.replace(/\D/g, "");
}

function formatLeadMessage(lead: Lead) {
  const tel = digits(lead.whatsapp);
  const wa = `https://wa.me/${tel.startsWith("55") ? tel : "55" + tel}`;

  const linhas = [
    "🚀 *NOVO LEAD — Aurion Design*",
    "",
    "Chegou um lead pelo site! Bora atender 👇",
    "",
    `👤 *Nome:* ${lead.nome}`,
    `📱 *WhatsApp:* ${lead.whatsapp}`,
  ];
  if (lead.email) linhas.push(`✉️ *E-mail:* ${lead.email}`);
  if (lead.empresa) linhas.push(`🏢 *Empresa:* ${lead.empresa}`);
  if (lead.faturamento) linhas.push(`💰 *Faturamento:* ${lead.faturamento}`);
  if (lead.social_media) linhas.push(`📲 *Social media:* ${lead.social_media}`);
  if (lead.instagram) linhas.push(`📸 *Instagram:* ${lead.instagram}`);
  if (lead.segmento) linhas.push(`🎯 *Segmento:* ${lead.segmento}`);
  linhas.push("");
  linhas.push(`💬 *Falar agora:* ${wa}`);
  return linhas.join("\n");
}

// Dispara a mensagem do lead no grupo. Não lança erro — apenas loga,
// para que uma falha na Z-API nunca derrube o cadastro do lead.
export async function notifyNewLead(lead: Lead): Promise<{ ok: boolean; error?: string }> {
  const instance = process.env.ZAPI_INSTANCE_ID;
  const token = process.env.ZAPI_INSTANCE_TOKEN;
  const clientToken = process.env.ZAPI_CLIENT_TOKEN;
  const phone = process.env.ZAPI_GROUP_PHONE;

  if (!instance || !token || !phone) {
    console.warn("[zapi] credenciais ausentes — disparo ignorado.");
    return { ok: false, error: "missing_credentials" };
  }

  const url = `https://api.z-api.io/instances/${instance}/token/${token}/send-text`;

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(clientToken ? { "Client-Token": clientToken } : {}),
      },
      body: JSON.stringify({ phone, message: formatLeadMessage(lead) }),
    });

    if (!res.ok) {
      const body = await res.text().catch(() => "");
      console.error("[zapi] falha no disparo", res.status, body);
      return { ok: false, error: `http_${res.status}` };
    }
    return { ok: true };
  } catch (err) {
    console.error("[zapi] erro de rede no disparo", err);
    return { ok: false, error: "network_error" };
  }
}
