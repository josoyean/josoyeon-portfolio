import React from "react";
import styled from "styled-components";
function SkillContent() {
  return (
    <div className="center" id="skills-label">
      <ProfileText>SKILLS</ProfileText>
      <div className="profile-box skills-content">
        <ul className="skill-box">
          <li>
            <ProfileText>HTML</ProfileText>
            <div className="item-card">
              <div className="item-box">
                <div className="item-front">
                  <img
                    src={process.env.PUBLIC_URL + `/images/html.png`}
                    alt="html"
                  ></img>
                </div>
                <div className="item-back">
                  <ProfileInfor>브라우저에 콘텐츠 표시</ProfileInfor>
                </div>
              </div>
            </div>
          </li>
          <li>
            <ProfileText>CSS</ProfileText>
            <div className="item-card">
              <div className="item-box">
                <div className="item-front">
                  <img
                    src={process.env.PUBLIC_URL + `/images/css.png`}
                    alt="css"
                  ></img>
                </div>
                <div className="item-back">
                  <ProfileInfor>html문서에 스타일 적용</ProfileInfor>
                </div>
              </div>
            </div>
          </li>
          <li>
            <ProfileText>JAVASCRIPT</ProfileText>
            <div className="item-card">
              <div className="item-box">
                <div className="item-front">
                  <img
                    src={process.env.PUBLIC_URL + `/images/javascript.png`}
                    alt="javascript"
                  ></img>
                </div>
                <div className="item-back">
                  <ProfileInfor>웹페이지 동작 구현</ProfileInfor>
                </div>
              </div>
            </div>
          </li>
          <li>
            <ProfileText>JQUERY</ProfileText>
            <div className="item-card">
              <div className="item-box">
                <div className="item-front">
                  <img
                    src={process.env.PUBLIC_URL + `/images/jquery.png`}
                    alt="jquery"
                  ></img>
                </div>
                <div className="item-back">
                  <ProfileInfor>
                    웹페이지 상에서 엘리먼트를 쉽게 찾고 조작해서 웹페이지 동작
                    구현
                  </ProfileInfor>
                </div>
              </div>
            </div>
          </li>
          <li>
            <ProfileText>REACT</ProfileText>
            <div className="item-card">
              <div className="item-box">
                <div className="item-front">
                  <img
                    src={process.env.PUBLIC_URL + `/images/react.png`}
                    alt="react"
                  ></img>
                </div>
                <div className="item-back">
                  <ProfileInfor>
                    컴포넌트를 재사용과 유지보수가 쉽고 많은 커뮤니티가 있어
                    선택하게 되었습니다.
                  </ProfileInfor>
                </div>
              </div>
            </div>
          </li>
          <li>
            <ProfileText>Redux</ProfileText>
            <div className="item-card">
              <div className="item-box">
                <div className="item-front">
                  <img
                    src={process.env.PUBLIC_URL + `/images/Redux.png`}
                    alt="react"
                  ></img>
                </div>
                <div className="item-back">
                  <ProfileInfor>
                    자식 컴포넌트가 많아지면 상태관리가 복잡해지는데 이를 해결
                  </ProfileInfor>
                </div>
              </div>
            </div>
          </li>

          <li>
            <ProfileText>Styled-Components</ProfileText>
            <div className="item-card">
              <div className="item-box">
                <div className="item-front">
                  <img
                    src={
                      process.env.PUBLIC_URL + `/images/styled-components.png`
                    }
                    alt="styled-components"
                  ></img>
                </div>
                <div className="item-back">
                  <ProfileInfor>
                    재사용성이 높고, 스타일링을 간편하게 적용
                  </ProfileInfor>
                </div>
              </div>
            </div>
          </li>
          <li>
            <ProfileText>React-Query</ProfileText>
            <div className="item-card">
              <div className="item-box">
                <div className="item-front">
                  <img
                    src={process.env.PUBLIC_URL + `/images/react-query.png`}
                    alt="xd"
                  ></img>
                </div>
                <div className="item-back">
                  <ProfileInfor>에러처리,중복방지를 자동으로 적용</ProfileInfor>
                </div>
              </div>
            </div>
          </li>
          {/* <li>
            <ProfileText>FIGMA</ProfileText>
            <div className="item-card">
              <div className="item-box">
                <div className="item-front">
                  <img
                    src={process.env.PUBLIC_URL + `/images/figma.png`}
                    alt="figma"
                  ></img>
                </div>
                <div className="item-back">
                  <ProfileText>80%</ProfileText>
                </div>
              </div>
            </div>
          </li> */}
          <li>
            <ProfileText>GITHUB</ProfileText>
            <div className="item-card">
              <div className="item-box">
                <div className="item-front">
                  <img
                    src={process.env.PUBLIC_URL + `/images/github02.png`}
                    alt="github02"
                  ></img>
                </div>
                <div className="item-back">
                  <ProfileInfor>프로젝트 협업</ProfileInfor>
                </div>
              </div>
            </div>
          </li>
          <li>
            <ProfileText>THYMELEAF</ProfileText>
            <div className="item-card">
              <div className="item-box">
                <div className="item-front">
                  <img
                    src={process.env.PUBLIC_URL + `/images/thymeleaf.png`}
                    alt="thymeleaf"
                  ></img>
                </div>
                <div className="item-back">
                  <ProfileInfor>
                    백엔드 서버에서 html동적으로 렌더링
                  </ProfileInfor>
                </div>
              </div>
            </div>
          </li>
          <li>
            <ProfileText>Tailwindcss</ProfileText>
            <div className="item-card">
              <div className="item-box">
                <div className="item-front">
                  <img
                    src={process.env.PUBLIC_URL + `/images/tailwindcss.png`}
                    alt="tailwindcss"
                  ></img>
                </div>
                <div className="item-back">
                  <ProfileInfor>
                    코드가 일반 css보다 짧아 스타일을 빠르게 적용
                  </ProfileInfor>
                </div>
              </div>
            </div>
          </li>
          {/* <li>
            <ProfileText>VSCODE</ProfileText>
            <div className="item-card">
              <div className="item-box">
                <div className="item-front">
                  <img
                    src={process.env.PUBLIC_URL + `/images/vsc.png`}
                    alt="vsc"
                  ></img>
                </div>
                <div className="item-back">
                  <ProfileText>80%</ProfileText>
                </div>
              </div>
            </div>
          </li> */}
          {/* <li>
            <ProfileText>INTELLIJ</ProfileText>
            <div className="item-card">
              <div className="item-box">
                <div className="item-front">
                  <img
                    src={process.env.PUBLIC_URL + `/images/Intellij.png`}
                    alt="Intellij"
                  ></img>
                </div>
                <div className="item-back">
                  <ProfileText>80%</ProfileText>
                </div>
              </div>
            </div>
          </li> */}
        </ul>
      </div>
    </div>
  );
}

export default SkillContent;

const ProfileText = styled.span`
  color: #101010;
  font-size: 30px;
  display: none;
  /* display: block; */
  text-align: center;
  font-weight: 500;
`;

const ProfileInfor = styled.span`
  color: #101010;
  font-size: 30px;
  /* display: none; */
  /* display: block; */
  text-align: center;
  font-weight: 500;
`;
