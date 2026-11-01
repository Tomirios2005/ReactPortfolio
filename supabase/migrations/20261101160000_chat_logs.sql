create table if not exists public.chat_logs (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  question text not null,
  answer text,
  model text,
  status text not null,
  error text,
  email_sent boolean not null default false,
  email_error text
);

alter table public.chat_logs enable row level security;

comment on table public.chat_logs is
  'Preguntas y respuestas del chat del portfolio. Solo la service role puede leer y escribir.';
