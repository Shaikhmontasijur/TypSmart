-- =============================================================================
-- TYPSMART
-- LEADERBOARD INTEGRITY & ANTI-CHEAT FOUNDATION
-- Migration: 20260904_leaderboard_integrity.sql
-- =============================================================================

-- =============================================================================
-- 1. VERIFICATION / SECURITY COLUMNS
-- =============================================================================

alter table public.typing_tests
  add column if not exists is_verified boolean not null default false;

alter table public.typing_tests
  add column if not exists is_eligible_for_leaderboard boolean not null default false;

alter table public.typing_tests
  add column if not exists is_benchmark boolean not null default false;

alter table public.typing_tests
  add column if not exists verification_status text not null default 'pending';

alter table public.typing_tests
  add column if not exists verification_reason text;

alter table public.typing_tests
  add column if not exists evidence jsonb not null default '{}'::jsonb;


-- =============================================================================
-- 2. NORMALIZE LEGACY NULL VALUES
-- =============================================================================

update public.typing_tests
set is_verified = false
where is_verified is null;

update public.typing_tests
set is_eligible_for_leaderboard = false
where is_eligible_for_leaderboard is null;

update public.typing_tests
set is_benchmark = false
where is_benchmark is null;

update public.typing_tests
set verification_status = 'pending'
where verification_status is null;

update public.typing_tests
set evidence = '{}'::jsonb
where evidence is null;


-- =============================================================================
-- 3. VERIFICATION STATUS CONSTRAINT
-- =============================================================================

do $$
begin
  if not exists (
    select 1
    from pg_constraint
    where conname = 'typing_tests_verification_status_check'
  ) then
    alter table public.typing_tests
      add constraint typing_tests_verification_status_check
      check (
        verification_status in (
          'pending',
          'verified',
          'flagged',
          'rejected'
        )
      );
  end if;
end;
$$;


-- =============================================================================
-- 4. BASIC DATA SANITY CONSTRAINTS
-- =============================================================================

do $$
begin

  if not exists (
    select 1
    from pg_constraint
    where conname = 'typing_tests_wpm_sanity_check'
  ) then
    alter table public.typing_tests
      add constraint typing_tests_wpm_sanity_check
      check (wpm >= 0 and wpm <= 260);
  end if;


  if not exists (
    select 1
    from pg_constraint
    where conname = 'typing_tests_accuracy_sanity_check'
  ) then
    alter table public.typing_tests
      add constraint typing_tests_accuracy_sanity_check
      check (accuracy >= 0 and accuracy <= 100);
  end if;


  if not exists (
    select 1
    from pg_constraint
    where conname = 'typing_tests_duration_sanity_check'
  ) then
    alter table public.typing_tests
      add constraint typing_tests_duration_sanity_check
      check (duration > 0 and duration <= 3600);
  end if;


  if not exists (
    select 1
    from pg_constraint
    where conname = 'typing_tests_char_counts_sanity_check'
  ) then
    alter table public.typing_tests
      add constraint typing_tests_char_counts_sanity_check
      check (
        correct_chars >= 0
        and incorrect_chars >= 0
        and total_chars >= 0
      );
  end if;

end;
$$;


-- =============================================================================
-- 5. SERVER-SIDE TYPING TEST INTEGRITY EVALUATOR
-- =============================================================================
-- IMPORTANT:
-- The browser cannot mark a test as verified.
-- The database trigger decides verification status.

create or replace function public.evaluate_typing_test_integrity()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  expected_wpm numeric;
  wpm_delta numeric;
  expected_acc numeric;
  acc_delta numeric;
  duration_minutes numeric;
begin

  -- Normal user submissions cannot become benchmarks.
  if new.is_benchmark is null then
    new.is_benchmark := false;
  end if;


  -- ---------------------------------------------------------------------------
  -- Duration validation
  -- ---------------------------------------------------------------------------

  if new.duration is null or new.duration <= 0 then
    new.is_verified := false;
    new.is_eligible_for_leaderboard := false;
    new.verification_status := 'rejected';
    new.verification_reason := 'Invalid test duration';

    return new;
  end if;


  duration_minutes := new.duration::numeric / 60.0;


  -- ---------------------------------------------------------------------------
  -- WPM mathematical validation
  -- TypSmart formula:
  -- WPM = (correct characters / 5) / minutes
  -- ---------------------------------------------------------------------------

  if new.correct_chars is null or new.correct_chars < 0 then
    new.is_verified := false;
    new.is_eligible_for_leaderboard := false;
    new.verification_status := 'rejected';
    new.verification_reason := 'Invalid correct character count';

    return new;
  end if;


  expected_wpm :=
    round(
      (new.correct_chars::numeric / 5.0)
      / duration_minutes
    );

  wpm_delta := abs(
    coalesce(new.wpm, 0) - expected_wpm
  );


  -- ---------------------------------------------------------------------------
  -- Accuracy mathematical validation
  -- ---------------------------------------------------------------------------

  if new.total_chars is null or new.total_chars < 0 then
    new.is_verified := false;
    new.is_eligible_for_leaderboard := false;
    new.verification_status := 'rejected';
    new.verification_reason := 'Invalid total character count';

    return new;
  end if;


  if new.total_chars > 0 then

    expected_acc :=
      round(
        (
          new.correct_chars::numeric
          / new.total_chars::numeric
        ) * 100.0,
        1
      );

  else

    expected_acc := 100.0;

  end if;


  acc_delta := abs(
    coalesce(new.accuracy, 0) - expected_acc
  );


  -- ---------------------------------------------------------------------------
  -- Benchmark entries
  -- ---------------------------------------------------------------------------

  if new.is_benchmark = true then

    new.is_verified := false;
    new.is_eligible_for_leaderboard := false;
    new.verification_status := 'verified';
    new.verification_reason :=
      'Synthetic / baseline benchmark entry';

    return new;

  end if;


  -- ---------------------------------------------------------------------------
  -- Mathematical mismatch = FLAG
  -- ---------------------------------------------------------------------------

  if wpm_delta > 3.0 or acc_delta > 2.0 then

    new.is_verified := false;
    new.is_eligible_for_leaderboard := false;
    new.verification_status := 'flagged';

    new.verification_reason :=
      format(
        'Score mismatch: submitted WPM %s (expected %s), submitted Acc %s%% (expected %s%%)',
        new.wpm,
        expected_wpm,
        new.accuracy,
        expected_acc
      );

    return new;

  end if;


  -- ---------------------------------------------------------------------------
  -- Extreme speed threshold
  -- ---------------------------------------------------------------------------

  if new.wpm > 240.0 then

    new.is_verified := false;
    new.is_eligible_for_leaderboard := false;
    new.verification_status := 'flagged';

    new.verification_reason :=
      'Super-threshold velocity (>240 WPM) requires review';

    return new;

  end if;


  -- ---------------------------------------------------------------------------
  -- CLEAN RESULT
  -- ---------------------------------------------------------------------------

  new.is_verified := true;
  new.is_eligible_for_leaderboard := true;
  new.verification_status := 'verified';

  new.verification_reason :=
    'Passed mathematical consistency and sanity checks';


  return new;

end;
$$;


-- =============================================================================
-- 6. TRIGGER
-- =============================================================================

drop trigger if exists tr_evaluate_typing_test
on public.typing_tests;

create trigger tr_evaluate_typing_test
before insert on public.typing_tests
for each row
execute function public.evaluate_typing_test_integrity();


-- =============================================================================
-- 7. LEADERBOARD PERFORMANCE INDEX
-- =============================================================================

create index if not exists idx_typing_tests_leaderboard
on public.typing_tests(
  is_eligible_for_leaderboard,
  completed_at desc,
  wpm desc
)
where is_eligible_for_leaderboard = true;


-- =============================================================================
-- 8. ROW LEVEL SECURITY
-- =============================================================================

alter table public.typing_tests enable row level security;


-- Remove potentially conflicting policies.

drop policy if exists
  "Typing tests are viewable by everyone for leaderboard"
on public.typing_tests;

drop policy if exists
  "Anyone can read verified leaderboard tests"
on public.typing_tests;

drop policy if exists
  "Users can select their own typing tests"
on public.typing_tests;


-- ---------------------------------------------------------------------------
-- Public leaderboard access
-- ---------------------------------------------------------------------------

create policy
  "Anyone can read verified leaderboard tests"
on public.typing_tests
for select
using (
  is_eligible_for_leaderboard = true
);


-- ---------------------------------------------------------------------------
-- Authenticated users can read their own history
-- ---------------------------------------------------------------------------

create policy
  "Users can select their own typing tests"
on public.typing_tests
for select
to authenticated
using (
  auth.uid() = user_id
);


-- =============================================================================
-- 9. APPEND-ONLY PROTECTION
-- =============================================================================
-- Users should not be able to modify submitted tests.

drop policy if exists
  "Users can update their own typing tests"
on public.typing_tests;


-- =============================================================================
-- END
-- =============================================================================