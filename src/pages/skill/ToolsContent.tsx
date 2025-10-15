import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import type { SkillItemsTypes } from "./SkillContent.types";
import { getTools } from "../../api/axios-index";
import { motion } from "framer-motion";
const ToolsContent = () => {
  const { data } = useQuery<SkillItemsTypes[], Error>({
    queryKey: ["getTools"], // 캐싱 key
    queryFn: getTools,
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
      id="tools-label"
    >
      <div className="center">
        <ProfileText style={{ display: "block" }}>TOOLS</ProfileText>
        <div className="profile-box tools-content " style={{ padding: "20px" }}>
          <ToolsBox className="tools-box">
            {data?.map((item) => {
              return (
                <li key={item.key}>
                  <img src={item.img} alt={item.name}></img>
                </li>
              );
            })}
          </ToolsBox>
        </div>
      </div>
    </motion.div>
  );
};

const ProfileText = styled.span`
  color: #101010;
  font-size: 30px;
  display: none;
  text-align: center;
  font-weight: 500;
`;

const ToolsBox = styled.ul`
  display: grid;
  gap: 40px 20px;
  grid-template-columns: repeat(5, 1fr);

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    row-gap: 15px;

    img {
      width: 100%;
      margin: auto;
    }
  }
  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default ToolsContent;
