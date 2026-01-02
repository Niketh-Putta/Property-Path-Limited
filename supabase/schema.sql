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

alter table public.consultations enable row level security;

-- Allow anyone (anon) to insert consultation requests.
create policy "consultations_insert_anon"
on public.consultations
for insert
to anon
with check (true);

-- Allow authenticated users to read consultations (admin UI further restricts by email allowlist).
create policy "consultations_select_authenticated"
on public.consultations
for select
to authenticated
using (true);

