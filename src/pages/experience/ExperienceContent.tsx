import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getExperiences } from "../../api/axios-index";
import type { ExperienceItemsTypes } from "./ExperienceContent.types";
import { motion } from "framer-motion";
import { Link } from "lucide-react";
import moment from "moment";
import { DemoLink, StartDtToEndDt } from "../../bin/common";
function ExperienceContent() {
  const [startToEnd, setStartToEnd] = useState<string>("");
  const { data } = useQuery<ExperienceItemsTypes[], Error>({
    queryKey: ["getExperiences"], // 캐싱 key
    queryFn: getExperiences,
  });
  useEffect(() => {
    if (data) {
      let totalMonths = 0;
      data.forEach(({ startDt, endDt }) => {
        const start = moment(startDt);
        const end = moment(!endDt ? new Date() : endDt);
        const diffMonths = end.diff(start, "month", true); // 개월 단위 차이 (소수점 포함)
        totalMonths += diffMonths;
      });

      const years = Math.floor(totalMonths / 12);
      const months = Math.round(totalMonths % 12);

      setStartToEnd(
        `${years > 0 ? `${years}년` : ""} ${
          months === 0 ? "" : months + "개월"
        }`
      );
    }
  }, [data]);

  const handleDt = (startDt: string, endDt: string) => {
    const totalMonths = moment(!endDt ? new Date() : endDt).diff(
      moment(startDt),
      "months"
    );

    const years = Math.floor(totalMonths / 12); // 1년
    const months = totalMonths % 12; // 7개월

    return `${years}년 ${months === 0 ? "" : months + "개월"}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{
        ease: "easeInOut",
        duration: 0.5,
        y: { duration: 1 },
      }}
      id="experience-label"
    >
      <div className="center">
        <ProfileText>
          EXPERIENCE <em>총 {startToEnd}</em>
        </ProfileText>
        <div className="profile-box experience-box">
          {data?.map((item) => (
            <div className="item-box" key={item.id}>
              <div
                style={{
                  display: "flex",
                  marginBottom: "5px",
                  alignItems: "center",
                }}
              >
                <span className="name">{item.company}</span>
                <span className="date">
                  <em>{handleDt(item.startDt, item.endDt)}</em>
                </span>
              </div>
              <span className="position">{item.job}</span>

              <div className="list-box">
                {item?.project_seq?.map((project) => (
                  <div className="list" key={project.id}>
                    <span className="title">
                      {project.name}
                      {project?.pageLink && (
                        <div
                          style={{
                            backgroundColor: "#f280ca",
                            borderRadius: "50%",
                            width: "20px",
                            height: "20px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            cursor: "pointer",
                          }}
                          onClick={(e) => {
                            DemoLink(project?.pageLink, e);
                          }}
                        >
                          <Link size={13} color="#fff" />
                        </div>
                      )}
                    </span>
                    <em>{project.info}</em>
                    <span className="date">
                      {StartDtToEndDt(project?.startDt, project?.endDt)}
                    </span>

                    <div className="">
                      <span>성과 - {project.result}</span>
                    </div>
                    <div className="">
                      <span>
                        역할
                        <ul>
                          {project?.parts?.map((part, index) => (
                            <li key={index}>{part}</li>
                          ))}
                        </ul>
                      </span>
                    </div>
                    <SkillsGroup className="skill">
                      {project?.skills_img?.map((skill, index) => (
                        <img src={skill} alt="skill" key={index} />
                      ))}
                    </SkillsGroup>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default ExperienceContent;

const ProfileText = styled.span`
  color: #101010;
  font-size: 1.9rem;
  font-weight: 500;
  display: flex;
  gap: 7px;
  align-items: center;
  justify-content: center;
  > em {
    font-size: 0.7rem;
    margin-left: 7px;
    padding: 2px 5px;
    box-sizing: border-box;
    background-color: #bababa;
    color: #fff;
    border-radius: 3px;
  }
`;
const SkillsGroup = styled.span`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 7px;
  align-items: center;
  img {
    width: 24px;
    height: 24px;
  }
`;
