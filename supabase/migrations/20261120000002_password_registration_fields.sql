-- Password and public registration profile fields
alter table public.profiles
  add column if not exists mobile_number text,
  add column if not exists student_name text,
  add column if not exists grade_number int;

do $$ begin
  alter table public.profiles
    add constraint profiles_grade_number_check
    check (grade_number is null or (grade_number between 1 and 12));
exception when duplicate_object then null;
end $$;

create or replace function public.handle_new_auth_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  selected_role public.app_role := 'student';
  selected_account_type text := coalesce(new.raw_user_meta_data->>'account_type', 'student');
  selected_grade int := null;
  selected_grade_id uuid := null;
  new_profile_id uuid := new.id;
begin
  if selected_account_type = 'parent' then
    selected_role := 'parent';
  end if;

  begin
    selected_grade := nullif(new.raw_user_meta_data->>'grade_number', '')::int;
  exception when others then
    selected_grade := null;
  end;

  if selected_grade is not null then
    select id into selected_grade_id
    from public.grades
    where grade_number = selected_grade
    limit 1;
  end if;

  insert into public.profiles (
    id, email, full_name, avatar_url, role,
    mobile_number, student_name, grade_number
  )
  values (
    new_profile_id,
    coalesce(new.email, ''),
    coalesce(nullif(new.raw_user_meta_data->>'full_name', ''), nullif(new.raw_user_meta_data->>'name', ''), 'Learner'),
    nullif(new.raw_user_meta_data->>'avatar_url', ''),
    selected_role,
    nullif(new.raw_user_meta_data->>'phone', ''),
    nullif(new.raw_user_meta_data->>'student_name', ''),
    selected_grade
  )
  on conflict (id) do update set
    email = excluded.email,
    full_name = case when public.profiles.full_name = '' then excluded.full_name else public.profiles.full_name end,
    avatar_url = coalesce(excluded.avatar_url, public.profiles.avatar_url),
    role = public.profiles.role,
    mobile_number = coalesce(excluded.mobile_number, public.profiles.mobile_number),
    student_name = coalesce(excluded.student_name, public.profiles.student_name),
    grade_number = coalesce(excluded.grade_number, public.profiles.grade_number),
    updated_at = now();

  if selected_role = 'student' then
    insert into public.students (profile_id, grade_id)
    values (new_profile_id, selected_grade_id)
    on conflict (profile_id) do update set
      grade_id = coalesce(excluded.grade_id, public.students.grade_id);
  elsif selected_role = 'parent' then
    insert into public.parents (profile_id)
    values (new_profile_id)
    on conflict (profile_id) do nothing;
  end if;

  insert into public.user_roles (user_id, role)
  values (new_profile_id, selected_role)
  on conflict (user_id, role) do nothing;

  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
after insert on auth.users
for each row execute function public.handle_new_auth_user();

-- Allow the authenticated Supabase user to complete their own registration profile.
drop policy if exists "profiles_self_insert" on public.profiles;
create policy "profiles_self_insert" on public.profiles
  for insert to authenticated
  with check (auth.uid() = id);

drop policy if exists "students_self_insert" on public.students;
create policy "students_self_insert" on public.students
  for insert to authenticated
  with check (profile_id = auth.uid());

drop policy if exists "parents_self_insert" on public.parents;
create policy "parents_self_insert" on public.parents
  for insert to authenticated
  with check (profile_id = auth.uid());
