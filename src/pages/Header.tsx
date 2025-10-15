import React, { useState } from "react";
import styled from "styled-components";

function Header() {
  const [lineWidth, setLineWidth] = useState(0);
  const [isMenu, setIsMenu] = useState(false);
  window.addEventListener("scroll", function (event) {
    let scroll = this.window.scrollY;
    var percent =
      (scroll / (this.document.body.offsetHeight - this.window.innerHeight)) *
      100;
    setLineWidth(percent);
  });

  const onContentClick = (label: string) => {
    let labelTag = document.querySelector<HTMLElement>(label);
    if (!labelTag) return;
    setTimeout(function () {
      var PageLocation =
        (labelTag?.offsetTop as number) - (labelTag?.scrollTop as number);

      window.scrollTo({ top: PageLocation - 60, behavior: "smooth" });
    }, 70);
  };

  const menuClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMenu(!isMenu);
  };
  return (
    <header>
      <div className="center">
        <img
          src={process.env.PUBLIC_URL + `/images/josoyeon.png`}
          alt="logo"
          className="logo"
        ></img>
        <ul>
          <ListItem onClick={(e) => onContentClick("#about-label")}>
            {"<About Me />"}
          </ListItem>
          <ListItem onClick={(e) => onContentClick("#interview-label")}>
            {"<Interviews />"}
          </ListItem>
          <ListItem onClick={(e) => onContentClick("#skills-label")}>
            {"<Skills & Tools />"}
          </ListItem>
          {/* <ListItem onClick={(e) => onContentClick("#tools-label")}>
            {"<Tools />"}
          </ListItem> */}
          <ListItem onClick={(e) => onContentClick("#experience-label")}>
            {"<Experience />"}
          </ListItem>
          <ListItem onClick={(e) => onContentClick("#project-label")}>
            {"<Projects />"}
          </ListItem>
        </ul>
        <img
          src={process.env.PUBLIC_URL + `/images/hamburger.png`}
          alt="hamburger"
          className="hamburger"
          onClick={(e) => menuClick(e)}
        ></img>
      </div>
      <div className="line" style={{ width: lineWidth + "%" }}></div>
      {isMenu ? (
        <div className={`menu-box ${isMenu && "action"}`}>
          <img
            src={process.env.PUBLIC_URL + `/images/close.png`}
            alt="close"
            className="close"
            onClick={(e) => menuClick(e)}
          ></img>
          <div className="list-box">
            <span
              className="About"
              onClick={(e) => {
                onContentClick("#about-label");
                menuClick(e);
              }}
            >
              About Me
            </span>
            <span
              className="Interviews"
              onClick={(e) => {
                onContentClick("#interview-label");
                menuClick(e);
              }}
            >
              Interviews
            </span>
            <span
              className="Skills"
              onClick={(e) => {
                onContentClick("#skills-label");
                menuClick(e);
              }}
            >
              Skills & Tools
            </span>
            {/* <span
              className="Tools"
              onClick={(e) => {
                onContentClick("#tools-label");
                menuClick(e);
              }}
            >
              Tools
            </span> */}
            <span
              className="Experience"
              onClick={(e) => {
                onContentClick("#experience-label");
                menuClick(e);
              }}
            >
              Experience
            </span>
            <span
              className="Projects"
              onClick={(e) => {
                onContentClick("#project-label");
                menuClick(e);
              }}
            >
              Projects
            </span>
          </div>
        </div>
      ) : null}
    </header>
  );
}

export default Header;

const ListItem = styled.li`
  color: #101010;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
`;
