-- =============================================================================
-- TYPSMART
-- SERVER-AUTHORITATIVE TYPING TEST SESSIONS V2
-- =============================================================================

create table if not exists public.typing_test_sessions (
  id uuid primary key default gen_random_uuid(),

  user_id uuid not null
    references public.profiles(id)
    on delete cascade,

  difficulty text not null default 'easy',

  started_at timestamptz not null default now(),

  submitted_at timestamptz,

  status text not null default 'active',

  created_at timestamptz not null default now(),

  constraint typing_test_sessions_status_check
    check (status in ('active', 'submitted', 'expired'))
);


-- =============================================================================
-- Indexes
-- =============================================================================

create index if not exists typing_test_sessions_user_id_idx
  on public.typing_test_sessions(user_id);

create index if not exists typing_test_sessions_status_idx
  on public.typing_test_sessions(status);


-- =============================================================================
-- RLS
-- =============================================================================

alter table public.typing_test_sessions enable row level security;


drop policy if exists "Users can view their own typing sessions"
  on public.typing_test_sessions;

create policy "Users can view their own typing sessions"
  on public.typing_test_sessions
  for select
  to authenticated
  using (auth.uid() = user_id);


-- No direct INSERT / UPDATE / DELETE policies.
-- Sessions are created and changed through SECURITY DEFINER functions.


-- =============================================================================
-- START SESSION RPC
-- =============================================================================

create or replace function public.start_typing_test_session(
  p_difficulty text default 'easy'
)
returns public.typing_test_sessions
language plpgsql
security definer
set search_path = public
as $function$
declare
  v_user_id uuid;
  v_session public.typing_test_sessions;
begin

  v_user_id := auth.uid();

  if v_user_id is null then
    raise exception 'Authentication required';
  end if;

  insert into public.typing_test_sessions (
    user_id,
    difficulty,
    started_at,
    status
  )
  values (
    v_user_id,
    coalesce(nullif(trim(p_difficulty), ''), 'easy'),
    now(),
    'active'
  )
  returning * into v_session;

  return v_session;

end;
$function$;


-- =============================================================================
-- SECURITY
-- =============================================================================

revoke all on function public.start_typing_test_session(text)
from public;

grant execute on function public.start_typing_test_session(text)
to authenticated;