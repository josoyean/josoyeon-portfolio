import React, { useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
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
          웹 프론트엔드 개발 경력 2년 이상인 조소연입니다. <br /> 사용자의
          흐름을 방해하지 않는 UI/UX를 고민하며, <br /> 인터랙션이 살아있는 웹
          서비스를 만들어 왔습니다. <br /> React와 TypeScript를 활용해 실시간
          기능, 알림, 앱 연동 등 서비스 특성을 고려한 프로젝트를 진행했습니다.
        </span>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{
          ease: "easeInOut",
          duration: 0.5,
          y: { duration: 1 },
        }}
      >
        <div className="profile-box">
          <ProfileText>ABOUT ME</ProfileText>
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
                <img
                  src={process.env.PUBLIC_URL + `/images/house.png`}
                  alt="house"
                  className="item-icon"
                ></img>
                <ProfileText>서울특별시 광진구</ProfileText>
              </li>
              <li className="pointer">
                <img
                  src={process.env.PUBLIC_URL + `/images/email.png`}
                  alt="email"
                  className="item-icon"
                ></img>
                <ProfileText>dlfjswhtnals@naver.com</ProfileText>
              </li>
              <li>
                <img
                  src={process.env.PUBLIC_URL + `/images/graduation.png`}
                  alt="graduation"
                  className="item-icon"
                ></img>
                <ProfileText>한국산업기술대학교 게임공학과 졸업</ProfileText>
              </li>

              <li className="pointer">
                <img
                  src={process.env.PUBLIC_URL + `/images/github.png`}
                  alt="github"
                  className="item-icon"
                ></img>
                <a href="https://github.com/josoyean" target="_blank">
                  <ProfileText>GITHUB</ProfileText>
                </a>
              </li>
              <li className="pointer">
                <img
                  src={process.env.PUBLIC_URL + `/images/blogspot.png`}
                  alt="blogspot"
                  className="item-icon"
                ></img>
                <a href="https://saltsoyeon.tistory.com/" target="_blank">
                  <ProfileText>TISTORY</ProfileText>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
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
