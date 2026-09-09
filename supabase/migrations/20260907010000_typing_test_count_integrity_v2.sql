-- =============================================================================
-- TYPSMART
-- TYPING TEST COUNT INTEGRITY V2
-- =============================================================================

-- total_chars represents total typing attempts.
-- correct_chars + incorrect_chars represents final input metrics.
-- Backspaces do not reduce total_chars, so equality must NOT be required.

do $$
begin
  if not exists (
    select 1
    from pg_constraint
    where conname = 'typing_tests_final_chars_lte_total_check'
  ) then
    alter table public.typing_tests
      add constraint typing_tests_final_chars_lte_total_check
      check (
        correct_chars + incorrect_chars <= total_chars
      );
  end if;
end;
$$;