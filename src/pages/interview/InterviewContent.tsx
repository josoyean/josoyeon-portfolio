import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { getInterviews } from "../../api/axios-index";
import type { InterviewContentTypes } from "./InterviewContent.types";
const InterviewContent = () => {
  const { data } = useQuery<InterviewContentTypes[], Error>({
    queryKey: ["getInterviews"], // 캐싱 key
    queryFn: getInterviews,
  });

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
      id="interview-label"
    >
      <div className="center interview-box">
        <ProfileText>INTERVIEWS</ProfileText>
        <Groups>
          {data?.map((item, index) => {
            return (
              <li key={item.id}>
                <div className="question">
                  <em>Q{index + 1}.</em> <span>{item.question}</span>
                </div>
                <div className="answer">
                  <span
                    dangerouslySetInnerHTML={{ __html: item.answer }}
                  ></span>
                </div>
              </li>
            );
          })}
        </Groups>
      </div>
    </motion.div>
  );
};
const ProfileText = styled.span`
  color: #101010;
  font-size: 30px;
  display: block;
  text-align: center;
  font-weight: 500;
`;

const Groups = styled.ul`
  width: calc(100% - 400px);
  margin: 50px auto 70px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  row-gap: 40px;

  li {
    padding: 20px 20px;
    border-radius: 5px;
    background-color: #ffffff;
    box-shadow: 1px 1px 8px 1px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    .question {
      display: flex;
      align-items: center;
      /* row-gap: 10px; */
      em {
        font-size: 2rem;
        font-weight: 900;
        margin-right: 7px;
      }
      span {
        font-size: 1.5rem;
        font-weight: 700;
      }
    }
    .answer {
      span {
        font-size: 1rem;
        font-weight: 400;
        line-height: 25px;
      }
      em {
        color: #f2b3dc;
      }
    }
  }
`;

export default InterviewContent;
