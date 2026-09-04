# josoyeon-portfolio

React와 TypeScript로 제작한 원페이지 포트폴리오입니다.

## Description

### 모노톤 기반의 원페이지 레이아웃과 스크롤 연동 네비게이션

섹션별 콘텐츠를 쉽게 탐색할 수 있도록, 원페이지 레이아웃과 `IntersectionObserver` 기반 스크롤 연동 네비게이션을 구성했습니다.

```tsx
// src/App.tsx
<main>
  <AboutSection />
  <InterviewSection />
  <SkillsSection />
  <ExperienceSection />
  <ProjectsSection />
</main>
```

```ts
// src/hooks/useActiveSection.ts
const observer = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

    const nextId = visible[0]?.target.id;
    if (nextId) setActiveSection(nextId);
  },
  {
    rootMargin: "-72px 0px -55% 0px",
    threshold: [0, 0.15, 0.4],
  }
);
```

```tsx
// src/components/layout/Header.tsx
const activeSection = useActiveSection(SECTION_IDS);

const isActive = (href: string) =>
  activeSection === href.replace("#", "");

<button
  className={`header__nav-link ${isActive(href) ? "header__nav-link--active" : ""}`}
  onClick={() => navigate(href)}
  aria-current={isActive(href) ? "true" : undefined}
>
  {label}
</button>
```

### 프로젝트 모달과 인터뷰 Q&A 아코디언

프로젝트 카드 클릭 시 상세 내용을 모달로 확인하고, 인터뷰는 아코디언으로 Q&A를 열고 닫을 수 있습니다.

```tsx
// src/components/sections/ProjectsSection.tsx
const [selected, setSelected] = useState<IndividualProject | null>(null);

<button
  type="button"
  className="project-card"
  onClick={() => setSelected(project)}
>
  ...
</button>

<AnimatePresence>
  {selected && (
    <ProjectModal project={selected} onClose={() => setSelected(null)} />
  )}
</AnimatePresence>
```

```tsx
// src/components/sections/InterviewSection.tsx
const [openId, setOpenId] = useState<string | null>(null);

const toggle = (id: string) => {
  setOpenId((prev) => (prev === id ? null : id));
};

<button
  type="button"
  className="interview-item__question"
  onClick={() => toggle(item.id)}
  aria-expanded={isOpen}
>
  <span>{item.question}</span>
</button>
{isOpen && (
  <SanitizedHtml html={item.answer} className="interview-item__answer" />
)}
```

### Supabase + React Query 연동

Skills, Experience, Projects 등의 콘텐츠를 DB에서 관리하고 동적으로 렌더링합니다.

```ts
// src/lib/supabase.ts
export const supabase = createClient<Database>(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_KEY
);
```

```ts
// src/lib/queries.ts
export async function fetchSkills(): Promise<SkillItem[]> {
  const { data, error } = await supabase
    .from("skills")
    .select("*")
    .order("order", { ascending: true });

  if (error) throw error;
  return data ?? [];
}

export async function fetchExperiences(): Promise<ExperienceItem[]> {
  const { data, error } = await supabase
    .from("experiences")
    .select("*, projects(*)")
    .order("sort", { referencedTable: "projects", ascending: true });

  if (error) throw error;
  return (data ?? []) as ExperienceItem[];
}

export async function fetchIndividualProjects(): Promise<IndividualProject[]> {
  const { data, error } = await supabase.from("individual-projects").select("*");

  if (error) throw error;
  return (data ?? []) as IndividualProject[];
}
```

```tsx
// src/components/sections/SkillsSection.tsx
const skillsQuery = useQuery({
  queryKey: queryKeys.skills,
  queryFn: fetchSkills,
});
```

```tsx
// src/components/sections/ExperienceSection.tsx
const { data, isLoading, isError } = useQuery({
  queryKey: queryKeys.experiences,
  queryFn: fetchExperiences,
});
```

```tsx
// src/components/sections/ProjectsSection.tsx
const { data, isLoading, isError } = useQuery({
  queryKey: queryKeys.projects,
  queryFn: fetchIndividualProjects,
});
```

## Skills

**React + TypeScript**  
컴포넌트 재사용성과 타입 안정성 확보

**Supabase**  
인증/DB/API를 빠르게 구성하기 위해 선택

## 개발 기간

2025.09 ~ 진행중

## 사이트

[https://josoyeon-portfolio.kro.kr/](https://josoyeon-portfolio.kro.kr/)

## 저장소

[https://github.com/josoyean/josoyeon-portfolio](https://github.com/josoyean/josoyeon-portfolio)
