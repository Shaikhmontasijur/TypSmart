create table if not exists public.lesson_progress (
  id uuid primary key default gen_random_uuid(),

  user_id uuid not null
    references public.profiles(id)
    on delete cascade,

  lesson_id text not null,

  completed boolean not null default false,

  best_wpm integer not null default 0,
  best_accuracy numeric(5,1) not null default 0,

  progress_percent numeric(5,2) not null default 0,

  updated_at timestamptz not null default now(),
  created_at timestamptz not null default now(),

  constraint lesson_progress_best_wpm_check
    check (best_wpm >= 0 and best_wpm <= 260),

  constraint lesson_progress_best_accuracy_check
    check (best_accuracy >= 0 and best_accuracy <= 100),

  constraint lesson_progress_percent_check
    check (progress_percent >= 0 and progress_percent <= 100),

  constraint lesson_progress_user_lesson_unique
    unique (user_id, lesson_id)
);

create index if not exists lesson_progress_user_id_idx
  on public.lesson_progress(user_id);

create index if not exists lesson_progress_lesson_id_idx
  on public.lesson_progress(lesson_id);

alter table public.lesson_progress enable row level security;

drop policy if exists "Users can view their own lesson progress"
  on public.lesson_progress;

create policy "Users can view their own lesson progress"
  on public.lesson_progress
  for select
  to authenticated
  using (auth.uid() = user_id);

drop policy if exists "Users can insert their own lesson progress"
  on public.lesson_progress;

create policy "Users can insert their own lesson progress"
  on public.lesson_progress
  for insert
  to authenticated
  with check (auth.uid() = user_id);

drop policy if exists "Users can update their own lesson progress"
  on public.lesson_progress;

create policy "Users can update their own lesson progress"
  on public.lesson_progress
  for update
  to authenticated
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);