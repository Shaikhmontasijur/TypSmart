create table if not exists public.typing_tests (
  id uuid primary key default gen_random_uuid(),

  user_id uuid not null
    references public.profiles(id)
    on delete cascade,

  duration integer not null,
  difficulty text not null default 'easy',

  wpm numeric not null default 0,
  accuracy numeric not null default 0,

  correct_chars integer not null default 0,
  incorrect_chars integer not null default 0,
  total_chars integer not null default 0,

  started_at timestamptz not null default now(),
  completed_at timestamptz not null default now(),
  created_at timestamptz not null default now()
);

create index if not exists idx_typing_tests_user_id
  on public.typing_tests(user_id);

create index if not exists idx_typing_tests_completed_at
  on public.typing_tests(completed_at desc);

alter table public.typing_tests enable row level security;

drop policy if exists "Users can insert their own typing tests"
on public.typing_tests;

create policy "Users can insert their own typing tests"
on public.typing_tests
for insert
to authenticated
with check (
  auth.uid() = user_id
);