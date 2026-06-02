"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";

const STATUSES = ["novo", "em_contato", "qualificado", "ganho", "perdido"] as const;
export type LeadStatus = (typeof STATUSES)[number];

export async function updateLeadStatus(id: string, status: string) {
  if (!STATUSES.includes(status as LeadStatus)) {
    return { ok: false, error: "Status inválido." };
  }

  const supabase = await createClient();
  // RLS exige usuário autenticado para o UPDATE.
  const { error } = await supabase.from("leads").update({ status }).eq("id", id);

  if (error) {
    return { ok: false, error: error.message };
  }

  revalidatePath("/dashboard");
  return { ok: true };
}
