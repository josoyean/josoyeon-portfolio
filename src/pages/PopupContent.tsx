import styled from "styled-components";
import type { ProjectContentTypes } from "./project/ProjectContent.types";
import { Github, Link, AppWindow, X } from "lucide-react";
import { DemoLink, StartDtToEndDt } from "../bin/common";
import React from "react";
function PopupContent({
  item,
  closeClick,
  elementIndex = undefined,
  introduce,
}: ProjectContentTypes) {
  
  return (
    <Popup className="popup">
      <div className="content">
        <div className="btn-box">
          {item?.pageLink && (
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
          {item?.codeLink && (
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
          )}
          {item?.blogLink && (
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
            <br />
            <em dangerouslySetInnerHTML={{ __html: item?.infor || '' }}>
              
            </em>
          </Introduce>
          <img src={item?.img} alt="html"></img>

          <div className="infor-box">
            <span className="date">
              {StartDtToEndDt(item?.startDt, item?.endDt)}
            </span>
            <span className="position"> {item?.position}</span>
            <span className="mywork">
              {item?.myWork.map((items, index) => {
                let itemText = items + ",";
                if (index === item?.myWork.length - 1) {
                  itemText = items;
                }
                return <em key={index}>{itemText} </em>;
              })}
            </span>
          </div>
        </div>
        <div className="sub">
          <span>Description</span>
          <ul className="job-box">
            {item?.parts?.map((items, index) => {
              return <li key={index}>{items} </li>;
            })}
          </ul>
        </div>
        <div className="sub" style={{borderTop: "1px solid #aaaaaa"}}>
           <span>Skills</span>
        <SkillsImg>
          {item?.skillLists?.map((items: {name: string, text: string}, index) => {
            return (<div key={index}><span>{items.name}</span> : <span>{items.text}</span></div>)
          })}
        </SkillsImg>
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
  .content{
    /* max-height: 700px; */
    height: 85vh;
    overflow-y: auto;
  }
`;

const Introduce = styled.div`
  box-sizing: border-box;
  text-align: center;
  & em {
    font-size: 0.8rem;
    color: #828282;
  }
  & span {
    font-size: 1rem;
    color: #828282;
  }
`;

const SkillsImg = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 5px; 
 span {
    font-size: 1rem;
    color: #828282;
  }
`;
