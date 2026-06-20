import {
  Calendar,
  GraduationCap,
  Mail,
  MapPin,
} from "lucide-react";
import { SectionWrapper } from "../ui";
import { asset } from "../../lib/utils";

const PROFILE_DETAILS = [
  { icon: Calendar, label: "1996.10.16" },
  { icon: MapPin, label: "서울특별시 광진구" },
  { icon: GraduationCap, label: "한국산업기술대학교 게임공학과" },
] as const;

export function AboutSection() {
  return (
    <SectionWrapper id="about" className="section--hero">
      <div className="hero">
        <div className="hero__content">
          <p className="hero__greeting">Frontend Developer</p>
          <h1 className="hero__name">조소연</h1>
          <p className="hero__intro">
            React와 TypeScript로 웹 서비스를 개발하고 있습니다.
            <br />
            UI/UX와 유지보수성을 함께 고려하며, 사용자 흐름을 방해하지 않는
            인터페이스를 만드는 데 집중해 왔습니다.
          </p>
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
            <a
              href="https://saltsoyeon.tistory.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Blog
            </a>
          </div>
        </div>
        <img
          src={asset("/images/profile.png")}
          alt="조소연 프로필"
          className="hero__photo"
        />
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
