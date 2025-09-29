import React, { useEffect } from "react";
import styled from "styled-components";

function AboutContent() {
  useEffect(() => {
    const content =
      "안녕하세요. & 2년차 Front-end Development & 조소연 포트폴리오 페이지 입니다. :)";
    const text = document.querySelector<HTMLElement>(".text");
    let i = 0;
    const intervalId = setInterval(() => {
      if (!text) return;
      const txt = content[i++];
      text.innerHTML += txt === "&" ? "<br/>" : txt;
      if (i >= content.length) {
        text.textContent = "";
        i = 0;
      }
    }, 150);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="center" id="about-label">
      <div className="about-box">
        <div className="text-box">
          <span className="text"></span> <span className="cursor">|</span>
        </div>
        <span className="introduce">
          웹 프론트엔드 개발 2년차 조소연입니다. <br />
          사용자가 만족하는 UI/UX와 인터랙티브 웹 서비스를 만드는 것을
          최우선으로 생각하며, <br />
          React와 TypeScript를 활용한 다양한 프로젝트를 경험했습니다.
        </span>
      </div>
      <div className="profile-box">
        <ProfileText>ABOUT</ProfileText>
        <div className="img-inform">
          <img
            src={process.env.PUBLIC_URL + `/images/profile.png`}
            alt="profile"
            className="profile"
          ></img>
          <ul>
            <li>
              <img
                src={process.env.PUBLIC_URL + `/images/person.png`}
                alt="person"
                className="item-icon"
              ></img>
              <ProfileText>조소연</ProfileText>
            </li>
            <li>
              <img
                src={process.env.PUBLIC_URL + `/images/birth.png`}
                alt="birth"
                className="item-icon"
              ></img>
              <ProfileText>1996.10.16</ProfileText>
            </li>
            <li>
              {" "}
              <img
                src={process.env.PUBLIC_URL + `/images/house.png`}
                alt="house"
                className="item-icon"
              ></img>{" "}
              <ProfileText>서울특별시 광진구</ProfileText>
            </li>
            <li>
              {" "}
              <img
                src={process.env.PUBLIC_URL + `/images/email.png`}
                alt="email"
                className="item-icon"
              ></img>{" "}
              <ProfileText>dlfjswhtnals@naver.com</ProfileText>
            </li>
            <li>
              {" "}
              <img
                src={process.env.PUBLIC_URL + `/images/graduation.png`}
                alt="graduation"
                className="item-icon"
              ></img>{" "}
              <ProfileText>한국산업기술대학교 게임공학과 졸업</ProfileText>
            </li>
            <li className="pointer">
              {" "}
              <img
                src={process.env.PUBLIC_URL + `/images/graduation.png`}
                alt="graduation"
                className="item-icon"
              ></img>{" "}
              <a
                href={`https://drive.google.com/file/d/1D6V6iyM8egW9oR3uF0EH7evDBaZkeN-x/view?usp=drive_link`}
                target="_blank"
              >
                {" "}
                <ProfileText>이젠아카데미 - 디자인 웹퍼블리셔</ProfileText>
              </a>
            </li>
            <li className="pointer">
              {" "}
              <img
                src={process.env.PUBLIC_URL + `/images/graduation.png`}
                alt="graduation"
                className="item-icon"
              ></img>{" "}
              <a
                href={`https://drive.google.com/file/d/1q-WJi75Boqg2-QeBHphAPp6w3-aRE3TZ/view?usp=drive_link`}
                target="_blank"
              >
                {" "}
                <ProfileText>
                  패스트캠퍼스 - React & Redux로 시작하는 웹 프로그래밍
                </ProfileText>
              </a>
            </li>
            <li className="pointer">
              {" "}
              <img
                src={process.env.PUBLIC_URL + `/images/github.png`}
                alt="github"
                className="item-icon"
              ></img>{" "}
              <a href="https://github.com/josoyean" target="_blank">
                <ProfileText>GITHUB</ProfileText>
              </a>
            </li>
            <li className="pointer">
              {" "}
              <img
                src={process.env.PUBLIC_URL + `/images/blogspot.png`}
                alt="blogspot"
                className="item-icon"
              ></img>{" "}
              <a href="https://saltsoyeon.tistory.com/" target="_blank">
                <ProfileText>TISTORY</ProfileText>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutContent;

const ProfileText = styled.span`
  color: #101010;
  font-size: 30px;
  display: block;
  text-align: center;
  font-weight: 500;
`;
