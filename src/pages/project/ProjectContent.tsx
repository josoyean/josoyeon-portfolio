import React, { useState } from "react";
import styled from "styled-components";
import ContentItem from "./ContentItem";
import type { IndividualItemsTypes } from "./ProjectContent.types";
import { useQuery } from "@tanstack/react-query";
import { getIndividualProjects } from "../../api/axios-index";
import { motion } from "framer-motion";
function ProjectContent() {
  const [isProfileSelect, setIsProfileSelect] = useState<boolean[]>([]);

  const { data } = useQuery<IndividualItemsTypes[], Error>({
    queryKey: ["getIndividualProjects"], // 캐싱 key
    queryFn: getIndividualProjects,
  });

  const handleClick = (idx: number, e: React.MouseEvent) => {
    e.preventDefault();
    if (idx === undefined) return;
    const newArr = Array(data?.length).fill(false) as boolean[];
    newArr[idx] = true;
    setIsProfileSelect(newArr);
  };

  const closeClick = (idx: number, e: React.MouseEvent) => {
    e.stopPropagation();
    const newArr = Array(data?.length).fill(false);
    setIsProfileSelect(newArr);
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
      id="project-label"
    >
      <div className="center">
        <ProfileText>PROJECTS</ProfileText>
        <div className="profile-box projects-box">
          {data?.map((item, index) => {
            return (
              <ContentItem
                selectItem={isProfileSelect[index]}
                handleClick={handleClick}
                closeClick={closeClick}
                key={item.id}
                introduce={item.introduce}
                elementIndex={index}
                item={item}
                LinkName={item.linkName}
                pageBtn={item.pageBtn}
              ></ContentItem>
            );
          })}
        </div>
      </div>
    </motion.div>
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
