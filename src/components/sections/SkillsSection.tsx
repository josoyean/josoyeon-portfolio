import { useQuery } from "@tanstack/react-query";
import { fetchSkills, fetchTools, queryKeys } from "../../lib/queries";
import { getErrorMessage } from "../../lib/utils";
import {
  EmptyState,
  ErrorState,
  LoadingState,
  SectionTitle,
  SectionWrapper,
} from "../ui";
import type { SkillItem } from "../../types";

function SkillGrid({ items }: { items: SkillItem[] }) {
  return (
    <ul className="skills-grid">
      {items.map((item) => (
        <li key={item.key} className="skills-grid__item">
          <img src={item.img} alt={item.name} loading="lazy" />
          <span className="skills-grid__label">{item.name}</span>
        </li>
      ))}
    </ul>
  );
}

export function SkillsSection() {
  const skillsQuery = useQuery({
    queryKey: queryKeys.skills,
    queryFn: fetchSkills,
  });

  const toolsQuery = useQuery({
    queryKey: queryKeys.tools,
    queryFn: fetchTools,
  });

  const isLoading = skillsQuery.isLoading || toolsQuery.isLoading;
  const isError = skillsQuery.isError || toolsQuery.isError;
  const error = skillsQuery.error ?? toolsQuery.error;
  const isEmpty =
    !isLoading &&
    !isError &&
    (skillsQuery.data?.length ?? 0) === 0 &&
    (toolsQuery.data?.length ?? 0) === 0;

  return (
    <SectionWrapper id="skills">
      <SectionTitle title="Skills" />

      {isLoading && <LoadingState />}
      {isError && (
        <ErrorState
          message={`스킬 데이터를 불러오지 못했습니다. (${getErrorMessage(error)})`}
        />
      )}
      {isEmpty && (
        <EmptyState message="등록된 스킬·도구가 없습니다. Supabase 테이블 데이터와 RLS 정책을 확인하세요." />
      )}

      {(skillsQuery.data?.length ?? 0) > 0 && (
        <>
          <h3 className="skills-section__subheading">Skills</h3>
          <SkillGrid items={skillsQuery.data!} />
        </>
      )}

      {(toolsQuery.data?.length ?? 0) > 0 && (
        <>
          <hr className="skills-section__divider" />
          <h3 className="skills-section__subheading">Tools</h3>
          <SkillGrid items={toolsQuery.data!} />
        </>
      )}
    </SectionWrapper>
  );
}
