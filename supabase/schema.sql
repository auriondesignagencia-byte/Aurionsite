-- Aurion — schema do dashboard de leads
-- Rode este SQL no Supabase: Dashboard > SQL Editor > New query > Run.

create extension if not exists "pgcrypto";

create table if not exists public.leads (
  id            uuid primary key default gen_random_uuid(),
  created_at    timestamptz not null default now(),
  nome          text not null,
  whatsapp      text not null,
  empresa       text,
  investimento  text,
  social_media  text,
  instagram     text,
  segmento      text,
  email         text,        -- legado (não mais coletado pelo formulário)
  faturamento   text,        -- legado (substituído por "investimento")
  status        text not null default 'novo'
                  check (status in ('novo','em_contato','qualificado','ganho','perdido')),
  notified      boolean not null default false
);

create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_status_idx on public.leads (status);

-- Row Level Security: ninguém acessa via anon key.
-- A API grava com a service_role key (bypassa RLS).
-- O dashboard lê/edita autenticado via Supabase Auth.
alter table public.leads enable row level security;

drop policy if exists "leads_select_authenticated" on public.leads;
create policy "leads_select_authenticated"
  on public.leads for select
  to authenticated
  using (true);

drop policy if exists "leads_update_authenticated" on public.leads;
create policy "leads_update_authenticated"
  on public.leads for update
  to authenticated
  using (true)
  with check (true);
