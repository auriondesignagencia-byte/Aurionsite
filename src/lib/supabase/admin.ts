import { createClient } from "@supabase/supabase-js";

// Admin client com a service_role key — BYPASSA RLS.
// Use SOMENTE no servidor (route handlers / server actions). Nunca no client.
export function createAdminClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { persistSession: false, autoRefreshToken: false } },
  );
}
