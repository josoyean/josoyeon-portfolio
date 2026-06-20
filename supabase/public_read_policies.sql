-- Supabase Dashboard → SQL Editor에서 실행
-- 대시보드(Table Editor)에는 데이터가 보이는데 사이트에는 안 보이면 RLS 문제입니다.

grant usage on schema public to anon, authenticated;
grant select on all tables in schema public to anon, authenticated;

alter table public.skills enable row level security;
alter table public.tools enable row level security;
alter table public.interview enable row level security;
alter table public.experiences enable row level security;
alter table public.project_seq enable row level security;
alter table public."individual-projects" enable row level security;

drop policy if exists "public read skills" on public.skills;
drop policy if exists "public read tools" on public.tools;
drop policy if exists "public read interview" on public.interview;
drop policy if exists "public read experiences" on public.experiences;
drop policy if exists "public read project_seq" on public.project_seq;
drop policy if exists "public read individual projects" on public."individual-projects";

create policy "public read skills"
  on public.skills for select to anon, authenticated using (true);

create policy "public read tools"
  on public.tools for select to anon, authenticated using (true);

create policy "public read interview"
  on public.interview for select to anon, authenticated using (true);

create policy "public read experiences"
  on public.experiences for select to anon, authenticated using (true);

create policy "public read project_seq"
  on public.project_seq for select to anon, authenticated using (true);

create policy "public read individual projects"
  on public."individual-projects" for select to anon, authenticated using (true);

-- 실행 후 Table Editor가 아니라 아래 URL로 anon 읽기 테스트:
-- https://bkauikjnsaycqkgdpzca.supabase.co/rest/v1/interview?select=id&limit=1
-- (Headers: apikey + Authorization = anon public key)
