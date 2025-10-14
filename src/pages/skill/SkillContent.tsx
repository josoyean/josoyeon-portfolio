import styled from "styled-components";
import { getSkills } from "../../api/axios-index";
import { useQuery } from "@tanstack/react-query";
import type { SkillItemsTypes } from "./SkillContent.types";
import { motion } from "framer-motion";
function SkillContent() {
  const { data } = useQuery<SkillItemsTypes[], Error>({
    queryKey: ["skills"], // 캐싱 key
    queryFn: getSkills,
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
      id="skills-label"
    >
      <div className="center">
        <ProfileText style={{ display: "block" }}>SKILLS</ProfileText>
        <div
          className="profile-box skills-content "
          style={{ padding: "20px" }}
        >
          <SkillBox className="skill-box">
            {data?.map((item) => {
              return (
                <li key={item.key}>
                  <img src={item.img} alt={item.name}></img>
                </li>
              );
            })}
          </SkillBox>
        </div>
      </div>
    </motion.div>
  );
}

export default SkillContent;

const ProfileText = styled.span`
  color: #101010;
  font-size: 30px;
  display: none;
  text-align: center;
  font-weight: 500;
`;

const SkillBox = styled.ul`
  display: grid;
  gap: 40px;
  grid-template-columns: repeat(5, 1fr);

  li {
    display: flex;
    align-items: center;
    flex-direction: column;
    row-gap: 15px;

    img {
      width: 100%;
      margin: auto;
    }
  }
`;
