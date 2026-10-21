import { Calendar, GraduationCap, Mail, MapPin } from "lucide-react";
import { SectionWrapper } from "../ui";
import { asset } from "../../lib/utils";

const RESUME_PDF = asset(encodeURI("/조소연_경력기술서.pdf"));

const PROFILE_DETAILS = [
  { icon: Calendar, label: "1996.10.16" },
  { icon: MapPin, label: "서울특별시 광진구" },
  { icon: GraduationCap, label: "한국산업기술대학교 게임공학과" },
] as const;

export function AboutSection() {
  return (
    <SectionWrapper id="about" className="section--hero">
      <div className="hero">
        <div className="hero__heading">
          <h1 className="hero__name">조소연</h1>
          <p className="hero__greeting">Frontend Developer</p>
        </div>
        <img
          src={asset("/images/profile.png")}
          alt="조소연 프로필"
          className="hero__photo"
        />
        <div className="hero__intro">
          <p>
            React와 JavaScript/TypeScript를 활용해 웹 서비스의 프론트엔드를
            개발해 온 개발자입니다.
          </p>
          <p>
            결제 모듈 연동, 엑셀 내보내기와 인쇄 기능, 지도·주소 검색 API, SSE
            기반 실시간 메시징 등 실제 서비스의 주요 기능을 구현해 왔습니다.
          </p>
          <p>
            공통 컴포넌트 설계와 서버 상태 관리를 통해 유지보수성을 높이고,
            사용자의 업무 흐름을 고려한 인터페이스를 만드는 데 집중합니다.
          </p>
        </div>
        <div className="hero__links">
          <a
            href="https://github.com/josoyean"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <span className="hero__links-divider" aria-hidden>
            /
          </span>
          <a href="mailto:dlfjswhtnals@naver.com">Email</a>
          <span className="hero__links-divider" aria-hidden>
            /
          </span>
          <a href={RESUME_PDF} target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </div>
      </div>

      <ul className="profile-details">
        {PROFILE_DETAILS.map(({ icon: Icon, label }) => (
          <li key={label} className="profile-details__item">
            <Icon size={15} strokeWidth={1.5} aria-hidden />
            <span>{label}</span>
          </li>
        ))}
        <li className="profile-details__item">
          <Mail size={15} strokeWidth={1.5} aria-hidden />
          <a href="mailto:dlfjswhtnals@naver.com">dlfjswhtnals@naver.com</a>
        </li>
      </ul>
    </SectionWrapper>
  );
}
