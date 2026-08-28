-- ==============================================================================
-- TYPEFLOW - DATABASE SCHEMA & RLS POLICIES
-- ==============================================================================

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- 1. PROFILES TABLE
create table if not exists public.profiles (
    id uuid references auth.users on delete cascade primary key,
    username text unique,
    display_name text,
    avatar_url text,
    bio text default '',
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 2. LESSONS TABLE
create table if not exists public.lessons (
    id text primary key,
    title text not null,
    slug text unique not null,
    description text not null,
    difficulty text not null check (difficulty in ('beginner', 'intermediate', 'advanced')),
    category text not null,
    content text not null,
    estimated_minutes integer not null default 3,
    order_index integer not null default 0,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 3. TYPING TESTS TABLE
create table if not exists public.typing_tests (
    id uuid default uuid_generate_v4() primary key,
    user_id uuid references public.profiles(id) on delete cascade not null,
    duration integer not null, -- 15, 30, 60, 120 (seconds)
    difficulty text not null check (difficulty in ('easy', 'medium', 'hard')),
    wpm numeric(6, 2) not null,
    accuracy numeric(5, 2) not null,
    correct_chars integer not null,
    incorrect_chars integer not null,
    total_chars integer not null,
    started_at timestamp with time zone,
    completed_at timestamp with time zone default timezone('utc'::text, now()) not null,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 4. LESSON PROGRESS TABLE
create table if not exists public.lesson_progress (
    id uuid default uuid_generate_v4() primary key,
    user_id uuid references public.profiles(id) on delete cascade not null,
    lesson_id text references public.lessons(id) on delete cascade not null,
    completed boolean default false not null,
    best_wpm numeric(6, 2) default 0 not null,
    best_accuracy numeric(5, 2) default 0 not null,
    progress_percent integer default 0 not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
    unique(user_id, lesson_id)
);

-- ==============================================================================
-- INDEXES FOR PERFORMANCE
-- ==============================================================================
create index if not exists idx_typing_tests_user_id on public.typing_tests(user_id);
create index if not exists idx_typing_tests_completed_at on public.typing_tests(completed_at desc);
create index if not exists idx_typing_tests_wpm on public.typing_tests(wpm desc);
create index if not exists idx_lesson_progress_user_id on public.lesson_progress(user_id);
create index if not exists idx_lessons_difficulty on public.lessons(difficulty);
create index if not exists idx_lessons_order on public.lessons(order_index asc);

-- ==============================================================================
-- ROW LEVEL SECURITY (RLS)
-- ==============================================================================
alter table public.profiles enable row level security;
alter table public.typing_tests enable row level security;
alter table public.lessons enable row level security;
alter table public.lesson_progress enable row level security;

-- PROFILES POLICIES
-- Anyone can read public profile usernames and display names for leaderboards
create policy "Public profiles are viewable by everyone"
    on public.profiles for select
    using (true);

create policy "Users can insert their own profile"
    on public.profiles for insert
    with check (auth.uid() = id);

create policy "Users can update their own profile"
    on public.profiles for update
    using (auth.uid() = id);

-- TYPING TESTS POLICIES
-- Anyone can view tests for leaderboard rankings, but only test owner can insert/view private logs
create policy "Typing tests are viewable by everyone for leaderboard"
    on public.typing_tests for select
    using (true);

create policy "Users can insert their own typing tests"
    on public.typing_tests for insert
    with check (auth.uid() = user_id);

create policy "Users can delete their own typing tests"
    on public.typing_tests for delete
    using (auth.uid() = user_id);

-- LESSONS POLICIES
create policy "Lessons are viewable by everyone"
    on public.lessons for select
    using (true);

-- LESSON PROGRESS POLICIES
create policy "Users can view their own lesson progress"
    on public.lesson_progress for select
    using (auth.uid() = user_id);

create policy "Users can insert their own lesson progress"
    on public.lesson_progress for insert
    with check (auth.uid() = user_id);

create policy "Users can update their own lesson progress"
    on public.lesson_progress for update
    using (auth.uid() = user_id);

-- ==============================================================================
-- AUTOMATIC PROFILE CREATION TRIGGER ON AUTH SIGNUP
-- ==============================================================================
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, username, display_name, avatar_url)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'username', 'user_' || substring(new.id::text, 1, 8)),
    coalesce(new.raw_user_meta_data->>'display_name', split_part(new.email, '@', 1)),
    coalesce(new.raw_user_meta_data->>'avatar_url', '')
  );
  return new;
end;
$$ language plpgsql security definer;

-- Trigger definition
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ==============================================================================
-- SEED LESSONS DATA
-- ==============================================================================
insert into public.lessons (id, title, slug, description, difficulty, category, content, estimated_minutes, order_index)
values
-- Beginner Lessons
('b1', 'Home Row Mastery', 'home-row-mastery', 'Master the baseline keys: A S D F J K L and semicolon with proper resting hand position.', 'beginner', 'Fundamentals', 'asdf jkl; asdf jkl; aaddff jjkkll; fads jads klas glad fall flash asks dad flask salad alfalfa', 2, 1),
('b2', 'Basic Letters & Vowels', 'basic-letters-vowels', 'Practice all primary vowels (A, E, I, O, U) and expand finger reach gracefully.', 'beginner', 'Fundamentals', 'aeiou rapid route open quiet quick house train cloud river stone lemon write shine flame sound', 2, 2),
('b3', 'Left Hand Training', 'left-hand-training', 'Dedicated exercise focusing on letters mapped to your left hand fingers (Q, W, E, R, T, A, S, D, F, G, Z, X, C, V, B).', 'beginner', 'Hand Isolation', 'sweat aware water craft exact brave weave cedar feast tract trade stage bread dwarf waste', 3, 3),
('b4', 'Right Hand Training', 'right-hand-training', 'Isolate and build muscle memory for your right hand fingers (Y, U, I, O, P, H, J, K, L, N, M).', 'beginner', 'Hand Isolation', 'monk imply jump look union pink plum nylon hymn moon milk onion pump lion null hoop loop', 3, 4),
('b5', 'Common Words Flow', 'common-words-flow', 'Build rhythmic flow across the most frequently used words in the English language.', 'beginner', 'Flow & Rhythm', 'the and for you with that have this from they will would there their about which when make time', 3, 5),
('b6', 'Short Sentences', 'short-sentences', 'Synthesize letter pairs and spaces with short, complete sentences.', 'beginner', 'Sentence Building', 'The sun is warm today. Practice makes progress. Keep your fingers resting lightly on the keys.', 3, 6),

-- Intermediate Lessons
('i1', 'Capital Letters & Shift', 'capital-letters-shift', 'Practice coordinating the left and right Shift keys for clean, unhesitating capitalization.', 'intermediate', 'Mechanics', 'London Paris Tokyo New York Alice Bob Charlie Delta Earth Mars Jupiter Saturn Atlantic Pacific', 3, 7),
('i2', 'Numbers & Top Row', 'numbers-top-row', 'Reach the numerical row without breaking your home row tactile orientation.', 'intermediate', 'Top Row', 'Room 101 has 24 chairs, 5 tables, 360 books, and 12 laptops for 1984 students in 2026.', 3, 8),
('i3', 'Punctuation & Syntax', 'punctuation-syntax', 'Gain comfort with commas, periods, quotes, colons, hyphens, and question marks.', 'intermediate', 'Punctuation', 'Wait, what happened? "Speed is good," she remarked, "but accuracy is fundamental—never forget it!"', 4, 9),
('i4', 'Common Trigrams & Patterns', 'common-patterns', 'Condition muscle reflexes on the most common letter triplets in English.', 'intermediate', 'Pattern Reflexes', 'ing the and ion tio ent ion tha nce pro pre str con com dis ter res ver per for ers all and', 3, 10),
('i5', 'Longer Sentences & Cadence', 'longer-sentences', 'Develop consistent typing endurance through multi-clause compound sentences.', 'intermediate', 'Endurance', 'Consistency is the secret catalyst that turns conscious mechanical effort into effortless subconscious fluency over time.', 4, 11),

-- Advanced Lessons
('a1', 'Paragraph Practice', 'paragraph-practice', 'Sustain high velocity and precision across complete multi-sentence paragraphs.', 'advanced', 'Endurance', 'Deep work requires an environment shielded from ambient distraction. When you cultivate acute focus and maintain deliberate keystroke cadence, your throughput doubles without increasing physical fatigue.', 5, 12),
('a2', 'Difficult & Rare Words', 'difficult-rare-words', 'Tackle complex phonetics, uncommon letter combinations, and awkward finger stretches.', 'advanced', 'Precision', 'rhythm asphyxiation choreography idiosyncratic kaleidoscope picturesque conscientious juxtapose zephyr hierarchy', 4, 13),
('a3', 'Professional Communication', 'professional-communication', 'Practice typing corporate correspondence, project summaries, and formal prose.', 'advanced', 'Real World', 'We are pleased to submit the quarterly operational overview. Key performance milestones exceeded expectations across all foundational delivery vectors.', 5, 14),
('a4', 'Coding & Developer Syntax', 'coding-practice', 'Practice brackets, braces, operators, camelCase, snake_case, and code snippets.', 'advanced', 'Code Typing', 'const calculateWpm = (chars, timeMs) => Math.round((chars / 5) / (timeMs / 60000)); if (wpm > 100) return true;', 4, 15),
('a5', 'Speed Challenge Arena', 'speed-challenge', 'Push your peak words-per-minute threshold to new maximum velocity limits.', 'advanced', 'Velocity', 'Velocity emerges from relaxation and precision. Do not rush the keys; let the rhythm flow smoothly from thought to fingertip with unyielding clarity.', 3, 16)
on conflict (id) do nothing;
