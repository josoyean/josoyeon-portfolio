import styled from "styled-components";
import type { ProjectContentTypes } from "./project/ProjectContent.types";
import { Github, Link, AppWindow, X } from "lucide-react";
import { DemoLink, StartDtToEndDt } from "../bin/common";
function PopupContent({
  item,
  closeClick,
  elementIndex = undefined,
  pageBtn,
  introduce,
}: ProjectContentTypes) {
  return (
    <Popup className="popup">
      <div className="content">
        <div className="btn-box">
          {pageBtn && (
            <div
              style={{
                backgroundColor: "#f280ca",
                borderRadius: "50%",
                width: "28px",
                height: "28px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={(e) => {
                DemoLink(`${item?.pageLink}`, e);
              }}
            >
              <Link size={20} color="#fff" />
            </div>
          )}

          <div
            style={{
              backgroundColor: "#f280ca",
              borderRadius: "50%",
              width: "28px",
              height: "28px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={(e) => {
              DemoLink(`${item?.codeLink}`, e);
            }}
          >
            <Github size={20} color="#fff" />
          </div>
          <div
            style={{
              backgroundColor: "#f280ca",
              borderRadius: "50%",
              width: "28px",
              height: "28px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={(e) => {
              DemoLink(`${item?.blogLink}`, e);
            }}
          >
            <AppWindow size={20} color="#fff" />
          </div>

          <div
            style={{
              backgroundColor: "#f280ca",
              borderRadius: "50%",
              width: "28px",
              height: "28px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={(e) => {
              if (elementIndex === undefined) return;
              closeClick?.(elementIndex, e);
            }}
          >
            <X size={20} color="#fff" />
          </div>
        </div>
        <div className="main">
          <Introduce className="">
            <span className="">{introduce}</span>
          </Introduce>
          <img src={item?.img} alt="html"></img>

          <div className="infor-box">
            <span className="date">
              DATE : {StartDtToEndDt(item?.startDt, item?.endDt)}
            </span>
            <span className="position"> POSITION : {item?.position}</span>
            <span className="mywork">
              MYWORK :
              {item?.myWork.map((items, index) => {
                let itemText = items + ",";
                if (index === item?.myWork.length - 1) {
                  itemText = items;
                }
                return <em key={index}>{itemText} </em>;
              })}
            </span>
            <span className="skillText">
              SKILLS :
              {item?.skills?.map((items, index) => {
                return <em key={index}>{"#" + items} </em>;
              })}
            </span>
          </div>
        </div>
        <div className="sub">
          <span>상세 역할</span>
          <ul className="job-box">
            {item?.parts?.map((items, index) => {
              return <li key={index}>{items} </li>;
            })}
          </ul>
        </div>
      </div>
    </Popup>
  );
}

export default PopupContent;

const Popup = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999999 !important;
  background-color: rgba(0, 0, 0, 0.2);
`;

const Introduce = styled.div`
  box-sizing: border-box;
  & span {
    font-size: 1rem;
    color: #828282;
  }
`;
