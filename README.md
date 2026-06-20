# 조소연 Portfolio

## Demo

**https://josoyeon-portfolio.kro.kr/**

React + TypeScript로 제작한 원페이지 프론트엔드 포트폴리오입니다.

![포트폴리오 미리보기](https://bkauikjnsaycqkgdpzca.supabase.co/storage/v1/object/public/images/main.png)

## 설계 의도

- **Supabase CMS:** Interview, Skills, Experience, Projects 등 자주 바뀌는 콘텐츠를 DB로 분리해, 코드 수정·재배포 없이 Supabase Table Editor에서 바로 관리할 수 있도록 했습니다.
- **DOMPurify:** Interview·프로젝트 상세에 HTML이 포함될 수 있어, `dangerouslySetInnerHTML` 사용 전 sanitize로 XSS 위험을 줄였습니다.
- **React Query:** Supabase API 호출을 캐싱하고 로딩·에러·빈 상태를 섹션별로 처리해 UX를 안정적으로 유지했습니다.

## 사용 기술

- **Frontend:** React 19, TypeScript, CSS (Pretendard)
- **Data:** Supabase, TanStack React Query
- **UI:** Framer Motion, Lucide React
- **Security:** DOMPurify
- **Deploy:** Vercel

## 개발 기간

2025.09 ~ 진행 중

## 주요 기능

- 원페이지 앵커 스크롤 + nav 활성 표시
- Interview 아코ordion, 프로젝트 모달 (ESC, 포커스 트랩)
- Experience Role / Impact, Projects 상세 (Demo · GitHub · Blog)
- Supabase 6개 테이블 연동 및 RLS public read 정책

## 로컬 실행

```bash
npm install
```

`.env` 파일 생성:

```env
REACT_APP_SUPABASE_URL=your_supabase_url
REACT_APP_SUPABASE_KEY=your_anon_key
```

```bash
npm start
```

## 링크

- [Live Demo](https://josoyeon-portfolio.kro.kr/)
- [GitHub Repository](https://github.com/josoyean/josoyeon-portfolio)
