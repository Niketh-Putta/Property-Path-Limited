-- Property Path LTD: Consultation requests

create table if not exists public.consultations (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  phone text,
  message text not null,
  source text not null default 'web'
);

create index if not exists consultations_created_at_idx on public.consultations (created_at desc);

-- Ensure API roles have table privileges (RLS policies alone are not enough).
grant usage on schema public to anon, authenticated;
grant insert on table public.consultations to anon;
grant select, insert on table public.consultations to authenticated;

alter table public.consultations enable row level security;

-- Allow anyone (anon) to insert consultation requests.
create policy "consultations_insert_anon"
on public.consultations
for insert
to anon
with check (true);

-- Allow authenticated users (admins) to insert (useful for testing).
create policy "consultations_insert_authenticated"
on public.consultations
for insert
to authenticated
with check (true);

-- Allow authenticated users to read consultations (admin UI further restricts by email allowlist).
create policy "consultations_select_authenticated"
on public.consultations
for select
to authenticated
using (true);

-- Marketing agents

create table if not exists public.marketing_agents (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  agent_id text not null unique,
  name text not null,
  phone text,
  status text not null default 'Verified'
);

create index if not exists marketing_agents_created_at_idx on public.marketing_agents (created_at desc);
create index if not exists marketing_agents_agent_id_idx on public.marketing_agents (agent_id);
create index if not exists marketing_agents_name_idx on public.marketing_agents (name);

grant select on table public.marketing_agents to anon;
grant select, insert on table public.marketing_agents to authenticated;

alter table public.marketing_agents enable row level security;

-- Allow anyone (anon) to read marketing agents for verification.
create policy "marketing_agents_select_anon"
on public.marketing_agents
for select
to anon
using (true);

-- Allow authenticated users (admins) to read marketing agents.
create policy "marketing_agents_select_authenticated"
on public.marketing_agents
for select
to authenticated
using (true);

-- Allow authenticated users (admins) to insert marketing agents.
create policy "marketing_agents_insert_authenticated"
on public.marketing_agents
for insert
to authenticated
with check (true);
