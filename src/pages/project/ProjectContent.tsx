import React, { useState } from "react";
import styled from "styled-components";
import ContentItem from "./ContentItem";
import type { ProjectItemsTypes } from "./ProjectContent.types";
function ProjectContent() {
  const projectList: ProjectItemsTypes[] = [
    {
      id: "04",
      LinkName: "project14",
      SkillText: [
        "React",
        "Html",
        "Css",
        "Javascript",
        "Tailwindcss",
        "React-Query",
        "Redux",
        "Npm",
        "Styled-Components",
      ],
      Position: "FrontEnd",
      Title: "catchtable",
      ItemDate: "2024.01 ~ 작업중",
      MyWork: ["로그인", "예약", "채팅", "답글", "사장(식당관리)"],
      blogLink: "https://saltsoyeon.tistory.com/54",
      CodeBtn: true,
      pageBtn: false,
      codeLink: "https://github.com/josoyean/Catch-Table-Front",
      part: [
        "AWS EC2 인스턴스 생성후 제작 웹 페이지 배포(node.js+pm2+nginx 배포)",
        "서버 통신을 react-query 이용해서 제작",
        "데이터 저장을 위해 sessionStorage 이용",
        "form-data 이용해서 이미지 서버로 전송",
      ],
      introduce: "식당 예약 어플 <캐치테이블> 클론",
    },
    {
      id: "03",
      LinkName: "project13",
      SkillText: ["React", "Html", "Css", "Javascript", "Styled-Components"],
      Position: "FrontEnd & Web Publisher",
      Title: "soyeon-portfolio",
      ItemDate: "2023.12 ~ 2023.12",
      MyWork: ["페이지 전체 작업"],
      blogLink: "https://saltsoyeon.tistory.com/52",
      pageLink: "https://josoyean.github.io/soyeon-portfolio",
      CodeBtn: true,
      pageBtn: true,
      codeLink: "https://github.com/josoyean/soyeon-portfolio",
      part: [
        "소개 문장에 타이핑 애니메이션 적용",
        "원 모형이 시간차 랜덤으로 내려오게 애니메이션 적용",
        "프로젝트 이미지를 클릭을 하면 팝업이 나오는 형식",
        "PC버전에서 스킬 이미지에 마우스 올리면 카드 뒤집는 애니메이션 적용",
        "emailjs 이용해서 폼 작성시 이메일 받고 작성자는 자동 회신 설정",
      ],
      introduce: "조소연의 포트폴리오 웹페이지",
    },
    {
      id: "02",
      LinkName: "project12",
      SkillText: [
        "React",
        "Html",
        "Css",
        "Javascript",
        "Recoil",
        "React-Router",
        "Npm",
        "Styled-Components",
      ],
      Position: "FrontEnd & Web Publisher",
      Title: "TVING",
      ItemDate: "2023.08 ~ 2023.11",
      MyWork: ["페이지 전체 작업"],
      blogLink: "https://saltsoyeon.tistory.com/58",
      pageLink: "https://josoyean.github.io/tving",
      CodeBtn: true,
      pageBtn: true,
      codeLink: "https://github.com/josoyean/tving",
      part: [
        "react-router를 이용해서 페이지 연결, Link로 페이지 이동",
        "JSON 데이터 제작 후 server 이용해서 배포",
        "카카오톡 로그인 연동",
      ],
      introduce: "OTT <TVING>를 클론",
    },
    {
      id: "01",
      LinkName: "project11",
      SkillText: [
        "React",
        "Html",
        "Css",
        "Javascript",
        "Redux",
        "Npm",
        "Styled-Components",
      ],
      Position: "FrontEnd & Web Publisher",
      Title: "날씨 알림이",
      ItemDate: "2023.06 ~ 2023.10",
      MyWork: ["페이지 전체 작업"],
      pageLink: "https://josoyean.github.io/weather-alert",
      CodeBtn: true,
      pageBtn: true,
      blogLink: "https://saltsoyeon.tistory.com/53",
      codeLink: "https://github.com/josoyean/weather-alert",
      part: [
        "기상청 API 2개 이상 데이터 axios 이용하여 제작",
        "데이터 받을 동안 로딩 화면 구현",
        ".filter()를 이용해서 원하는 데이터 추출",
        "반복문 Map를 이용해서 추출한 데이터로 화면 제작",
      ],
      introduce: "기상청 api 허브 사이트에서 단기예보,중기예보 이용해서 제작",
    },
  ];

  const [isProfileSelect, setIsProfileSelect] = useState<boolean[]>([]);

  const handleClick = (idx: number, e: React.MouseEvent) => {
    e.preventDefault();
    if (idx === undefined) return;
    const newArr = Array(projectList.length).fill(false) as boolean[];
    newArr[idx] = true;
    setIsProfileSelect(newArr);
  };

  const closeClick = (idx: number, e: React.MouseEvent) => {
    e.stopPropagation();
    const newArr = Array(projectList.length).fill(false);
    setIsProfileSelect(newArr);
  };

  return (
    <div className="center" id="project-label">
      <ProfileText>PROJECTS</ProfileText>
      <div className="profile-box projects-box">
        {projectList.map((item, index) => {
          return (
            <ContentItem
              selectItem={isProfileSelect[index]}
              handleClick={handleClick}
              closeClick={closeClick}
              key={item.id}
              introduce={item.introduce}
              elementIndex={index}
              item={item}
              LinkName={item.LinkName}
              pageBtn={item.pageBtn}
            ></ContentItem>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectContent;
const ProfileText = styled.span`
  color: #101010;
  font-size: 30px;
  display: block;
  text-align: center;
  font-weight: 500;
`;
