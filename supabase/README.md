# Supabase setup

This project can store consultation requests in Supabase and provides a simple `/admin` dashboard to view them.

## 1) Create tables + policies

In Supabase: **SQL Editor → New query**, run `supabase/schema.sql`.

## 2) Configure Auth

In Supabase: **Authentication → Providers**
- Enable **Email**.
- If using magic links, configure SMTP (recommended for production).

## 3) Set env vars

Locally: copy `.env.example` → `.env.local` and fill:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`
- `VITE_ADMIN_EMAILS` (comma-separated)

For GitHub Pages deploys: add repo secrets with the same names.

## 4) Admin dashboard

Open `/admin` and sign in. Only emails listed in `VITE_ADMIN_EMAILS` can access the dashboard.

