-- ============================================================================
-- MY BEYOND CLASSES — SAFE, IDEMPOTENT INITIAL POSTGRESQL SCHEMA & RLS
-- Target Supabase Project Ref: jaggidlcnlbuwmetrtqb
-- NOTE: Inspect existing tables before pushing. Uses IF NOT EXISTS everywhere
--       to guarantee existing tables and records are never dropped or overwritten.
-- ============================================================================

create extension if not exists "pgcrypto";

-- 1. ENUMS
do $$ begin
  create type public.app_role as enum (
    'student', 'parent', 'teacher', 'mentor',
    'content_editor', 'sub_admin', 'admin', 'super_admin'
  );
exception when duplicate_object then null; end $$;

do $$ begin
  create type public.content_status as enum (
    'draft', 'submitted', 'in_review', 'approved', 'published', 'archived'
  );
exception when duplicate_object then null; end $$;

-- 2. UPDATED_AT TRIGGER HELPER
create or replace function public.handle_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- 3. CORE IDENTITY, ROLES & PERMISSIONS
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text unique not null,
  full_name text not null default '',
  avatar_url text,
  country text default 'India',
  timezone text default 'Asia/Kolkata',
  role public.app_role not null default 'student',
  is_active boolean not null default true,
  is_suspended boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.departments (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  slug text not null unique,
  description text,
  created_at timestamptz not null default now()
);

create table if not exists public.user_roles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  role public.app_role not null,
  department_id uuid references public.departments(id) on delete set null,
  assigned_by uuid references public.profiles(id) on delete set null,
  created_at timestamptz not null default now(),
  unique(user_id, role)
);

create table if not exists public.role_permissions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  scope_key text not null, -- e.g. 'grade:1-5', 'subject:mathematics', 'blogs', 'seo', 'teachers', 'students'
  can_view boolean not null default true,
  can_create boolean not null default false,
  can_edit boolean not null default false,
  can_approve boolean not null default false,
  can_delete boolean not null default false,
  can_export boolean not null default false,
  created_at timestamptz not null default now(),
  unique(user_id, scope_key)
);

create table if not exists public.staff_invitations (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  invited_role public.app_role not null check (invited_role in ('teacher','mentor','content_editor','sub_admin','admin')),
  department_id uuid references public.departments(id) on delete set null,
  permission_scopes jsonb not null default '[]'::jsonb,
  token text not null unique,
  invited_by uuid references public.profiles(id) on delete set null,
  status text not null default 'pending' check (status in ('pending','accepted','revoked','expired')),
  expires_at timestamptz not null default (now() + interval '7 days'),
  created_at timestamptz not null default now()
);

-- 4. ACADEMIC STRUCTURE (CURRICULA, GRADES, SUBJECTS, CHAPTERS, TOPICS)
create table if not exists public.curricula (
  id uuid primary key default gen_random_uuid(),
  code text not null unique, -- CBSE, ICSE, ISC, IB, IGCSE, CAMBRIDGE, BRITISH, AMERICAN
  name text not null,
  region text not null,
  description text,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.grades (
  id uuid primary key default gen_random_uuid(),
  grade_number int not null unique check (grade_number between 1 and 12),
  slug text not null unique, -- grade-1 .. grade-12
  title text not null,
  stage text not null, -- Primary, Middle, Secondary, Senior Secondary
  overview text,
  seo_title text,
  seo_description text,
  is_published boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.subjects (
  id uuid primary key default gen_random_uuid(),
  grade_id uuid not null references public.grades(id) on delete cascade,
  curriculum_id uuid references public.curricula(id) on delete set null,
  name text not null,
  slug text not null,
  category text not null default 'Core',
  description text,
  is_published boolean not null default true,
  created_at timestamptz not null default now(),
  unique(grade_id, curriculum_id, slug)
);

create table if not exists public.chapters (
  id uuid primary key default gen_random_uuid(),
  subject_id uuid not null references public.subjects(id) on delete cascade,
  chapter_number int not null,
  title text not null,
  slug text not null,
  summary text,
  status public.content_status not null default 'published',
  created_by uuid references public.profiles(id) on delete set null,
  approved_by uuid references public.profiles(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique(subject_id, slug)
);

create table if not exists public.topics (
  id uuid primary key default gen_random_uuid(),
  chapter_id uuid not null references public.chapters(id) on delete cascade,
  title text not null,
  slug text not null,
  body_markdown text not null default '',
  status public.content_status not null default 'published',
  created_by uuid references public.profiles(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique(chapter_id, slug)
);

-- 5. STUDENTS, PARENTS, TEACHERS & RELATIONSHIPS
create table if not exists public.students (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null unique references public.profiles(id) on delete cascade,
  grade_id uuid references public.grades(id) on delete set null,
  curriculum_id uuid references public.curricula(id) on delete set null,
  school_name text,
  date_of_birth date,
  parental_consent_verified boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists public.parents (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null unique references public.profiles(id) on delete cascade,
  occupation text,
  created_at timestamptz not null default now()
);

create table if not exists public.parent_students (
  id uuid primary key default gen_random_uuid(),
  parent_id uuid not null references public.parents(id) on delete cascade,
  student_id uuid not null references public.students(id) on delete cascade,
  relationship text not null default 'guardian',
  verified boolean not null default false,
  created_at timestamptz not null default now(),
  unique(parent_id, student_id)
);

create table if not exists public.teachers (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null unique references public.profiles(id) on delete cascade,
  slug text unique,
  headline text,
  bio text,
  qualifications text,
  subjects_taught text[] default '{}',
  curricula_taught text[] default '{}',
  is_verified boolean not null default false,
  is_public boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists public.teacher_assignments (
  id uuid primary key default gen_random_uuid(),
  teacher_id uuid not null references public.teachers(id) on delete cascade,
  student_id uuid references public.students(id) on delete cascade,
  subject_id uuid references public.subjects(id) on delete set null,
  created_at timestamptz not null default now()
);

-- 6. EDUCATIONAL CONTENT: LESSONS, NOTES, FORMULA SHEETS, SOLUTIONS, WORKSHEETS, RESOURCES
create table if not exists public.lessons (
  id uuid primary key default gen_random_uuid(),
  chapter_id uuid references public.chapters(id) on delete set null,
  title text not null,
  slug text not null unique,
  content_markdown text not null default '',
  video_url text,
  is_premium boolean not null default false,
  status public.content_status not null default 'draft',
  created_by uuid references public.profiles(id) on delete set null,
  approved_by uuid references public.profiles(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.notes (
  id uuid primary key default gen_random_uuid(),
  chapter_id uuid references public.chapters(id) on delete set null,
  grade_id uuid references public.grades(id) on delete set null,
  subject_id uuid references public.subjects(id) on delete set null,
  note_type text not null default 'detailed' check (note_type in ('detailed','short','quick_revision','mind_map','cheat_sheet','summary')),
  title text not null,
  slug text not null unique,
  content_markdown text not null,
  file_path text, -- Supabase Storage path (only when actual PDF exists)
  is_premium boolean not null default false,
  status public.content_status not null default 'draft',
  created_by uuid references public.profiles(id) on delete set null,
  approved_by uuid references public.profiles(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.formula_sheets (
  id uuid primary key default gen_random_uuid(),
  grade_id uuid references public.grades(id) on delete set null,
  curriculum_id uuid references public.curricula(id) on delete set null,
  subject_id uuid references public.subjects(id) on delete set null,
  chapter_id uuid references public.chapters(id) on delete set null,
  title text not null,
  slug text not null unique,
  latex_expression text not null,
  symbol_definitions jsonb not null default '[]'::jsonb,
  si_units text,
  explanation text not null,
  worked_example text,
  common_mistakes text,
  revision_tips text,
  difficulty text not null default 'intermediate' check (difficulty in ('foundation','intermediate','advanced')),
  pdf_storage_path text,
  status public.content_status not null default 'draft',
  created_by uuid references public.profiles(id) on delete set null,
  approved_by uuid references public.profiles(id) on delete set null,
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.solutions (
  id uuid primary key default gen_random_uuid(),
  chapter_id uuid references public.chapters(id) on delete set null,
  title text not null,
  slug text not null unique,
  question_text text not null,
  solution_steps_markdown text not null,
  difficulty text default 'intermediate',
  status public.content_status not null default 'draft',
  created_by uuid references public.profiles(id) on delete set null,
  approved_by uuid references public.profiles(id) on delete set null,
  created_at timestamptz not null default now()
);

create table if not exists public.worksheets (
  id uuid primary key default gen_random_uuid(),
  chapter_id uuid references public.chapters(id) on delete set null,
  grade_id uuid references public.grades(id) on delete set null,
  subject_id uuid references public.subjects(id) on delete set null,
  title text not null,
  slug text not null unique,
  description text,
  file_path text,
  is_premium boolean not null default false,
  status public.content_status not null default 'draft',
  created_by uuid references public.profiles(id) on delete set null,
  created_at timestamptz not null default now()
);

create table if not exists public.resources (
  id uuid primary key default gen_random_uuid(),
  grade_id uuid references public.grades(id) on delete set null,
  subject_id uuid references public.subjects(id) on delete set null,
  resource_type text not null, -- sample_paper, question_bank, past_paper, practical, planner
  title text not null,
  slug text not null unique,
  description text,
  file_path text,
  download_count int not null default 0,
  is_premium boolean not null default false,
  status public.content_status not null default 'draft',
  created_by uuid references public.profiles(id) on delete set null,
  created_at timestamptz not null default now()
);

-- 7. COURSES, ENROLLMENTS & SUBSCRIPTIONS
create table if not exists public.courses (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  summary text,
  grade_id uuid references public.grades(id) on delete set null,
  curriculum_id uuid references public.curricula(id) on delete set null,
  teacher_id uuid references public.teachers(id) on delete set null,
  delivery_mode text not null default 'live_group' check (delivery_mode in ('self_paced','live_group','one_to_one','bootcamp')),
  price_inr numeric(10,2),
  price_aed numeric(10,2),
  price_usd numeric(10,2),
  price_gbp numeric(10,2),
  is_published boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists public.course_modules (
  id uuid primary key default gen_random_uuid(),
  course_id uuid not null references public.courses(id) on delete cascade,
  order_index int not null default 1,
  title text not null,
  description text,
  created_at timestamptz not null default now()
);

create table if not exists public.enrollments (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references public.students(id) on delete cascade,
  course_id uuid not null references public.courses(id) on delete cascade,
  status text not null default 'active' check (status in ('active','completed','paused','cancelled')),
  progress_percent int not null default 0 check (progress_percent between 0 and 100),
  enrolled_at timestamptz not null default now(),
  unique(student_id, course_id)
);

create table if not exists public.subscriptions (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references public.profiles(id) on delete cascade,
  plan_code text not null, -- e.g. 'learning_access_99', 'all_subject_live'
  currency text not null default 'INR',
  amount numeric(10,2) not null,
  status text not null default 'active' check (status in ('active','past_due','cancelled','expired')),
  starts_at timestamptz not null default now(),
  ends_at timestamptz,
  created_at timestamptz not null default now()
);

-- 8. CLASSES, BOOKINGS & GOOGLE CALENDAR INTEGRATION
create table if not exists public.classes (
  id uuid primary key default gen_random_uuid(),
  course_id uuid references public.courses(id) on delete set null,
  teacher_id uuid references public.teachers(id) on delete set null,
  title text not null,
  class_type text not null default 'group' check (class_type in ('one_to_one','group','demo','webinar','bootcamp','ptm')),
  starts_at timestamptz not null,
  ends_at timestamptz not null,
  timezone text not null default 'UTC',
  meeting_url text,
  recording_url text,
  google_event_id text,
  status text not null default 'scheduled' check (status in ('scheduled','completed','cancelled','rescheduled')),
  created_at timestamptz not null default now()
);

create table if not exists public.class_bookings (
  id uuid primary key default gen_random_uuid(),
  class_id uuid references public.classes(id) on delete set null,
  student_id uuid references public.students(id) on delete set null,
  requester_name text not null,
  requester_email text not null,
  grade_label text,
  curriculum_label text,
  preferred_slot timestamptz,
  timezone text default 'UTC',
  booking_type text not null default 'free_demo',
  status text not null default 'pending' check (status in ('pending','confirmed','rescheduled','cancelled','completed')),
  notes text,
  created_at timestamptz not null default now()
);

create table if not exists public.calendar_connections (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null unique references public.profiles(id) on delete cascade,
  provider text not null default 'google',
  google_email text,
  encrypted_access_token text,
  encrypted_refresh_token text,
  token_expires_at timestamptz,
  is_connected boolean not null default false,
  updated_at timestamptz not null default now()
);

create table if not exists public.calendar_events (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid references public.profiles(id) on delete cascade,
  title text not null,
  description text,
  event_type text not null default 'class',
  starts_at timestamptz not null,
  ends_at timestamptz not null,
  timezone text not null default 'UTC',
  recurrence_rule text,
  google_event_id text,
  created_at timestamptz not null default now()
);

-- 9. ASSIGNMENTS, ASSESSMENTS, QUIZZES & RESULTS
create table if not exists public.assignments (
  id uuid primary key default gen_random_uuid(),
  course_id uuid references public.courses(id) on delete set null,
  teacher_id uuid references public.teachers(id) on delete set null,
  title text not null,
  instructions text,
  due_at timestamptz,
  max_score numeric(6,2) default 100,
  created_at timestamptz not null default now()
);

create table if not exists public.submissions (
  id uuid primary key default gen_random_uuid(),
  assignment_id uuid not null references public.assignments(id) on delete cascade,
  student_id uuid not null references public.students(id) on delete cascade,
  file_path text,
  submission_text text,
  score numeric(6,2),
  teacher_feedback text,
  submitted_at timestamptz not null default now(),
  graded_at timestamptz,
  unique(assignment_id, student_id)
);

create table if not exists public.assessments (
  id uuid primary key default gen_random_uuid(),
  grade_id uuid references public.grades(id) on delete set null,
  subject_id uuid references public.subjects(id) on delete set null,
  chapter_id uuid references public.chapters(id) on delete set null,
  title text not null,
  assessment_type text not null default 'quiz' check (assessment_type in ('quiz','mock_test','chapter_test','daily_practice')),
  duration_minutes int not null default 30,
  is_published boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists public.questions (
  id uuid primary key default gen_random_uuid(),
  assessment_id uuid references public.assessments(id) on delete cascade,
  prompt_markdown text not null,
  options jsonb not null default '[]'::jsonb,
  correct_option_index int not null default 0,
  explanation_markdown text,
  marks numeric(5,2) not null default 1
);

create table if not exists public.assessment_attempts (
  id uuid primary key default gen_random_uuid(),
  assessment_id uuid not null references public.assessments(id) on delete cascade,
  student_id uuid not null references public.students(id) on delete cascade,
  answers jsonb not null default '{}'::jsonb,
  score numeric(6,2),
  max_score numeric(6,2),
  started_at timestamptz not null default now(),
  completed_at timestamptz
);

create table if not exists public.results (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references public.students(id) on delete cascade,
  assessment_attempt_id uuid references public.assessment_attempts(id) on delete set null,
  subject_id uuid references public.subjects(id) on delete set null,
  percentage numeric(5,2),
  remarks text,
  published_at timestamptz not null default now()
);

-- 10. BOOTCAMPS, COHORTS, BLOGS, EVENTS, ENQUIRIES, LOGS, SEO & SETTINGS
create table if not exists public.bootcamps (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  category text not null default 'AI & STEM',
  summary text,
  syllabus jsonb default '[]'::jsonb,
  target_grades text,
  starts_at timestamptz,
  registration_url text,
  is_published boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists public.cohorts (
  id uuid primary key default gen_random_uuid(),
  bootcamp_id uuid not null references public.bootcamps(id) on delete cascade,
  mentor_id uuid references public.profiles(id) on delete set null,
  name text not null,
  starts_at timestamptz,
  ends_at timestamptz
);

create table if not exists public.blog_categories (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  slug text not null unique,
  description text
);

create table if not exists public.blogs (
  id uuid primary key default gen_random_uuid(),
  category_id uuid references public.blog_categories(id) on delete set null,
  author_id uuid references public.profiles(id) on delete set null,
  title text not null,
  slug text not null unique,
  excerpt text,
  content_markdown text not null,
  cover_image_url text,
  tags text[] default '{}',
  seo_title text,
  meta_description text,
  canonical_url text,
  status public.content_status not null default 'draft',
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.events (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  event_type text not null default 'webinar',
  description text,
  starts_at timestamptz not null,
  timezone text default 'UTC',
  registration_url text,
  is_published boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists public.notifications (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  title text not null,
  body text,
  link_url text,
  is_read boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists public.enquiries (
  id uuid primary key default gen_random_uuid(),
  enquiry_type text not null default 'general', -- general, demo, tutor_application, partnership, newsletter
  full_name text not null,
  email text not null,
  country text,
  grade text,
  curriculum text,
  message text,
  consent_given boolean not null default true,
  status text not null default 'new' check (status in ('new','contacted','resolved','archived')),
  created_at timestamptz not null default now()
);

create table if not exists public.audit_logs (
  id uuid primary key default gen_random_uuid(),
  actor_id uuid references public.profiles(id) on delete set null,
  action text not null,
  entity_type text not null,
  entity_id text,
  metadata jsonb not null default '{}'::jsonb,
  ip_address text,
  created_at timestamptz not null default now()
);

create table if not exists public.email_logs (
  id uuid primary key default gen_random_uuid(),
  recipient_email text not null,
  template_key text not null,
  subject text not null,
  status text not null default 'queued',
  provider_message_id text,
  created_at timestamptz not null default now()
);

create table if not exists public.seo_metadata (
  id uuid primary key default gen_random_uuid(),
  route_path text not null unique,
  title text not null,
  meta_description text not null,
  canonical_url text,
  og_image_url text,
  robots_index boolean not null default true,
  structured_data jsonb,
  updated_at timestamptz not null default now()
);

create table if not exists public.platform_settings (
  key text primary key,
  value jsonb not null,
  updated_by uuid references public.profiles(id) on delete set null,
  updated_at timestamptz not null default now()
);

-- 11. INDEXES
create index if not exists idx_subjects_grade on public.subjects(grade_id);
create index if not exists idx_chapters_subject on public.chapters(subject_id);
create index if not exists idx_formula_sheets_grade_subject on public.formula_sheets(grade_id, subject_id);
create index if not exists idx_notes_grade_subject on public.notes(grade_id, subject_id);
create index if not exists idx_blogs_status_published on public.blogs(status, published_at desc);
create index if not exists idx_audit_logs_actor_created on public.audit_logs(actor_id, created_at desc);

-- 12. ROW LEVEL SECURITY (RLS)
alter table public.profiles enable row level security;
alter table public.students enable row level security;
alter table public.parents enable row level security;
alter table public.parent_students enable row level security;
alter table public.teachers enable row level security;
alter table public.role_permissions enable row level security;
alter table public.staff_invitations enable row level security;
alter table public.enrollments enable row level security;
alter table public.subscriptions enable row level security;
alter table public.submissions enable row level security;
alter table public.assessment_attempts enable row level security;
alter table public.results enable row level security;
alter table public.calendar_connections enable row level security;
alter table public.notifications enable row level security;
alter table public.enquiries enable row level security;
alter table public.audit_logs enable row level security;
alter table public.formula_sheets enable row level security;
alter table public.notes enable row level security;
alter table public.blogs enable row level security;
alter table public.platform_settings enable row level security;

-- Helper function for RLS role checks
create or replace function public.is_admin_or_super()
returns boolean language sql security definer stable as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid() and role in ('admin', 'super_admin') and is_active = true and is_suspended = false
  );
$$;

-- Profiles: users read/update own profile; admins manage all
drop policy if exists "profiles_self_select" on public.profiles;
create policy "profiles_self_select" on public.profiles
  for select using (auth.uid() = id or public.is_admin_or_super());

drop policy if exists "profiles_self_update" on public.profiles;
create policy "profiles_self_update" on public.profiles
  for update using (auth.uid() = id)
  with check (auth.uid() = id and role = (select p.role from public.profiles p where p.id = auth.uid()));

-- Students: strictly private to the student, verified linked parent, or admin
drop policy if exists "students_private_select" on public.students;
create policy "students_private_select" on public.students
  for select using (
    profile_id = auth.uid()
    or public.is_admin_or_super()
    or exists (
      select 1 from public.parent_students ps
      join public.parents par on par.id = ps.parent_id
      where ps.student_id = students.id and par.profile_id = auth.uid() and ps.verified = true
    )
  );

-- Calendar tokens: strictly owner-only
drop policy if exists "calendar_connections_owner" on public.calendar_connections;
create policy "calendar_connections_owner" on public.calendar_connections
  for all using (profile_id = auth.uid()) with check (profile_id = auth.uid());

-- Notifications: strictly owner-only
drop policy if exists "notifications_owner" on public.notifications;
create policy "notifications_owner" on public.notifications
  for all using (user_id = auth.uid()) with check (user_id = auth.uid());

-- Published academic content: public read; staff write via server authorization
drop policy if exists "formula_sheets_public_read" on public.formula_sheets;
create policy "formula_sheets_public_read" on public.formula_sheets
  for select using (status = 'published' or public.is_admin_or_super());

drop policy if exists "notes_public_read" on public.notes;
create policy "notes_public_read" on public.notes
  for select using (status = 'published' or public.is_admin_or_super());

drop policy if exists "blogs_public_read" on public.blogs;
create policy "blogs_public_read" on public.blogs
  for select using (status = 'published' or public.is_admin_or_super());

-- Enquiries: anyone can submit (insert); only admins can read/update
drop policy if exists "enquiries_public_insert" on public.enquiries;
create policy "enquiries_public_insert" on public.enquiries
  for insert with check (true);

drop policy if exists "enquiries_admin_select" on public.enquiries;
create policy "enquiries_admin_select" on public.enquiries
  for select using (public.is_admin_or_super());

-- Audit logs: admin read only
drop policy if exists "audit_logs_admin_read" on public.audit_logs;
create policy "audit_logs_admin_read" on public.audit_logs
  for select using (public.is_admin_or_super());

-- Platform settings: public read for non-sensitive site config, admin write
drop policy if exists "platform_settings_read" on public.platform_settings;
create policy "platform_settings_read" on public.platform_settings
  for select using (true);

drop policy if exists "platform_settings_admin_write" on public.platform_settings;
create policy "platform_settings_admin_write" on public.platform_settings
  for all using (public.is_admin_or_super()) with check (public.is_admin_or_super());
