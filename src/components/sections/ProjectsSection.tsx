import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { AnimatePresence } from "framer-motion";
import { fetchIndividualProjects, queryKeys } from "../../lib/queries";
import { getErrorMessage } from "../../lib/utils";
import {
  EmptyState,
  ErrorState,
  LoadingState,
  SectionTitle,
  SectionWrapper,
} from "../ui";
import { ProjectModal } from "./ProjectModal";
import type { IndividualProject } from "../../types";

export function ProjectsSection() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: queryKeys.projects,
    queryFn: fetchIndividualProjects,
  });

  const [selected, setSelected] = useState<IndividualProject | null>(null);

  return (
    <SectionWrapper id="projects">
      <SectionTitle title="Projects" />

      {isLoading && <LoadingState />}
      {isError && (
        <ErrorState
          message={`프로젝트 데이터를 불러오지 못했습니다. (${getErrorMessage(error)})`}
        />
      )}
      {!isLoading && !isError && data?.length === 0 && (
        <EmptyState message="등록된 프로젝트가 없습니다. Supabase individual-projects 테이블을 확인하세요." />
      )}

      {!!data?.length && (
        <ul className="projects-grid">
          {data.map((project) => (
            <li key={project.id}>
              <button
                type="button"
                className="project-card"
                onClick={() => setSelected(project)}
                aria-label={`${project.introduce} 상세 보기`}
              >
                <div className="project-card__thumb-wrap">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="project-card__thumb"
                    loading="lazy"
                  />
                </div>
                <div>
                  <p className="project-card__title">{project.introduce}</p>
                  <p className="project-card__position">{project.position}</p>
                </div>
              </button>
            </li>
          ))}
        </ul>
      )}

      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
