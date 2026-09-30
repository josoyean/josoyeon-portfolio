# josoyeon-portfolio

React와 TypeScript로 제작한 원페이지 포트폴리오입니다.

## Description

### 모노톤 기반의 원페이지 레이아웃과 스크롤 연동 네비게이션

섹션별 콘텐츠를 쉽게 탐색할 수 있도록 구성했습니다.

![스크롤 연동 네비게이션](https://bkauikjnsaycqkgdpzca.supabase.co/storage/v1/object/public/images/gif01.gif)

```tsx
const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Interviews", href: "#interviews" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
] as const;

const scrollToSection = (selector: string, offset = 72): void => {
  const element = document.querySelector<HTMLElement>(selector);
  if (!element) return;
  const top = element.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: "smooth" });
};

const navigate = (href: string) => {
  scrollToSection(href);
  setMenuOpen(false);
};

<nav
  className={`header__mobile-menu ${menuOpen ? "is-open" : ""}`}
  aria-label="모바일 메뉴"
  aria-hidden={!menuOpen}
>
  {NAV_ITEMS.map(({ label, href }) => (
    <button
      key={href}
      type="button"
      className={`header__mobile-link ${isActive(href) ? "header__mobile-link--active" : ""}`}
      onClick={() => navigate(href)}
      aria-current={isActive(href) ? "true" : undefined}
    >
      {label}
    </button>
  ))}
</nav>;
```

### 프로젝트 모달과 인터뷰 Q&A 아코디언

프로젝트 카드 클릭 시 상세 내용을 확인할 수 있는 모달과 인터뷰 Q&A 아코디언을 구현했습니다.

![모달과 인터뷰 아코디언](https://bkauikjnsaycqkgdpzca.supabase.co/storage/v1/object/public/images/gif02.gif)

```tsx
const [openId, setOpenId] = useState<string | null>(null);
const hasInitialized = useRef(false);

useEffect(() => {
  if (data?.length && !hasInitialized.current) {
    setOpenId(data[0].id);
    hasInitialized.current = true;
  }
}, [data]);

const toggle = (id: string) => {
  setOpenId((prev) => (prev === id ? null : id));
};

{
  data.map((item) => {
    const isOpen = openId === item.id;
    return (
      <li key={item.id} className={`interview-item ${isOpen ? "is-open" : ""}`}>
        <button
          type="button"
          className="interview-item__question"
          onClick={() => toggle(item.id)}
          aria-expanded={isOpen}
        >
          {item.question}
        </button>
        {isOpen && (
          <SanitizedHtml
            html={item.answer}
            className="interview-item__answer"
          />
        )}
      </li>
    );
  });
}

<button type="button" className="project-feature__link" onClick={onOpen}>
  자세히 보기 →
</button>;

{
  !!project.isPrats?.length && (
    <ul className="modal__prat-list">
      {project.isPrats.map((item, i) => (
        <li key={`${item.info}-${i}`} className="modal__prat-item">
          {item.info && <p className="modal__prat-info">{item.info}</p>}
          {item.image && (
            <img
              src={item.image}
              alt={item.info || "구현 예시"}
              className="modal__prat-image"
            />
          )}
          {item.code && (
            <pre className="modal__prat-code">
              <code>{item.code}</code>
            </pre>
          )}
        </li>
      ))}
    </ul>
  );
}
```

### Supabase + React Query 연동

Skills, Experience, Projects 등의 콘텐츠를 DB에서 관리하고 동적으로 렌더링합니다.

```ts
export async function fetchExperiences(): Promise<ExperienceItem[]> {
  const { data, error } = await supabase
    .from("experiences")
    .select("*, projects(*)")
    .order("sort", { referencedTable: "projects", ascending: true });

  if (error) throw error;

  return (data ?? []).map((item) => ({
    ...item,
    projects: [...(item.projects ?? [])].sort((a, b) => a.sort - b.sort),
  }));
}

const { data, isLoading, isError } = useQuery({
  queryKey: ["experiences"],
  queryFn: fetchExperiences,
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
