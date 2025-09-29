import React, { useState } from "react";
import styled from "styled-components";
function ExperienceContent() {
  const experienceList = [
    {
      id: "011",
      LinkName: "project01",
      SkillText: ["html", "css", "js", "jquery", "thymeleaf"],
      Position: "Web Publisher",
      Title: "Tari World",
      ItemDate: "2022.08 ~ 2023.08",
      MyWork: ["페이지 제작 & 유지 보수", "페이지 연결, 애니메이션"],
      pageLink: "https://tari.world/page/index",
      CodeBtn: false,
    },
  ];
  const [isProfileSelect, setIsProfileSelect] = useState(false);

  const DemoLink = (link: string, e: React.MouseEvent) => {
    e.preventDefault();
    window.open(link, "_blank");
  };

  return (
    <div className="center" id="experience-label">
      <ProfileText>
        EXPERIENCE <em>총 1년 6개월</em>
      </ProfileText>
      <div className="profile-box experience-box">
        <div className="item-box">
          <span className="date">
            2022.07 ~ 2023.12<em>1년 6개월</em>
          </span>
          <span className="name">너울 소프트</span>
          <span className="position">웹 퍼블리셔 & 프론트엔드</span>
          <span className="skill">
            사용 스킬 : React, Javascript, Jquery, Css, Styled-Components, Redux
          </span>
          <div className="list-box">
            <div className="list">
              <span className="title">Tari Market </span>
              <em> 메타버스 플랫폼 코인 거래소</em>
              <span className="date">2023.11 ~ 2023.12</span>
              <div className="">
                <span>성과 - 크로스 브라우징 호환성 최적화</span>
              </div>
              <div className="">
                <span>
                  역할
                  <ul>
                    <li>
                      기존 구성 되었던 구형의 코드를 웹 표준에 적합한 코드를
                      개선 및 유지보수
                    </li>
                    <li>
                      모든 브라우저에서 원활하게 동작하도록 JavaScript, Jquery의
                      최신 표준을 준수
                    </li>
                  </ul>
                </span>
              </div>
            </div>
            <div className="list">
              <span className="title">
                K-POP SEOUL
                <button
                  onClick={(e) => {
                    DemoLink(
                      "https://korea.seoulmusicawards.kr/page/index?lang=ko&platform=k&mode=pc",
                      e
                    );
                  }}
                >
                  Page Open
                </button>
              </span>
              <em>서울가요대상 투표앱</em>
              <span className="date">2023.09 ~ 2023.12</span>
              <div className="">
                <span>
                  성과 - 웹사이트 성능 최적화로 페이지 로딩 시간 이전보다 5초
                  이상 단축
                </span>
              </div>
              <div className="">
                <span>
                  역할
                  <ul>
                    <li>
                      일정 시간마다 투표수 데이터를 캐싱하여 데이터 처리 시 서버
                      지연현상 해소
                    </li>
                    <li>받은 데이터를 그룹화하여 불필요한 요청 최소화</li>
                    <li>
                      자주 사용되는 기능들을 모듈화하여 관리, 필요 시 관련
                      모듈을 불러오도록 적용하여 코드의 중복을 줄여 유지보수성
                      향상
                    </li>
                  </ul>
                </span>
              </div>
            </div>
            <div className="list">
              <span className="title">
                SeoulMusicaWards
                <button
                  onClick={(e) => {
                    DemoLink("https://seoulmusicawards.com/page/index", e);
                  }}
                >
                  Page Open
                </button>
              </span>
              <em>하이원 서울가요대상 - 제 33회 서울가요대상 홈페이지</em>
              <span className="date">2023.09 ~ 2023.12</span>
              <div className="">
                <span>성과 - 크로스 브라우저 호환성 및 반응형 웹 개발</span>
              </div>
              <div className="">
                <span>
                  역할
                  <ul>
                    <li>
                      브라우저별 테스트를 진행하여 모든 브라우저에서 작동하도록
                      크로스 브라우저 호환성 최적화
                    </li>
                    <li>
                      CSS 레이아웃이 다양한 디바이스에 적합한 스타일로
                      보여지도록 Flex box 와 Grid 를 사용하여 유연한 레이아웃을
                      적용
                    </li>
                  </ul>
                </span>
              </div>
            </div>
            <div className="list">
              <span className="title">BigFootCamping</span>
              <em>자회사 캠핑 예약 사이트(회사 사정상 제작 중단)</em>
              <span className="date">2023.01 ~ 2023.08</span>
              <div className="">
                <span>
                  성과 - 로컬 환경에서의 웹 페이지 성능 최적화 및 입력 유효성
                  검사
                </span>
              </div>
              <div className="">
                <span>
                  역할
                  <ul>
                    <li>로컬 환경에서의 웹 페이지 로딩 속도 3초 이상 단축</li>
                    <li>
                      사용자가 데이터를 입력시 적합한 형식의 데이터를 입력하도록
                      구현
                    </li>
                    <li>
                      데이터의 형식을 검증하여, 잘못된 데이터 인한 무결성 손상
                      방지
                    </li>
                  </ul>
                </span>
              </div>
            </div>
            <div className="list">
              <span className="title">
                Tari World{" "}
                <button
                  onClick={(e) => {
                    DemoLink("https://tari.world/page/index", e);
                  }}
                >
                  Page Open
                </button>
              </span>
              <em>코인원 메타버스 플랫폼</em>
              <span className="date">2022.10 ~ 2023.01</span>
              <div className="">
                <span>성과 - 사용자 인터페이스 개선</span>
              </div>
              <div className="">
                <span>
                  역할
                  <ul>
                    <li>웹사이트를 쉽게 이용할 수 있도록 접근성 고려</li>
                    <li>
                      명료한 폰트와 컬러를 사용하여 직관적인 페이지를 구현
                    </li>
                  </ul>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceContent;

const ProfileText = styled.span`
  color: #101010;
  font-size: 1.9rem;
  display: block;
  text-align: center;
  font-weight: 500;
`;
