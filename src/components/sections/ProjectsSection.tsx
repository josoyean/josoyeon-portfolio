import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { AnimatePresence } from "framer-motion";
import { fetchIndividualProjects, queryKeys } from "../../lib/queries";
import {
  getErrorMessage,
  openExternalLink,
  splitParagraphs,
} from "../../lib/utils";
import { SanitizedHtml } from "../../lib/sanitizeHtml";
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

  // 상세 모달은 유지하되, 카드 클릭으로는 열지 않습니다.
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
        <ul className="projects-list">
          {data.map((project, index) => (
            <li key={project.id}>
              <ProjectFeatureCard project={project} reversed={index % 2 === 1} />
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

function ProjectFeatureCard({
  project,
  reversed,
}: {
  project: IndividualProject;
  reversed: boolean;
}) {
  const title = project.title || project.introduce;
  const summary = project.title ? project.introduce : "";
  const summaryParagraphs = summary ? splitParagraphs(summary) : [];
  const highlights = project.parts?.slice(0, 3) ?? [];
  const techNames =
    project.skillLists?.map((skill) => skill.name).filter(Boolean) ?? [];
  const skillIcons = (project.skills ?? []).filter((src) =>
    /^https?:\/\//.test(src)
  );

  return (
    <article
      className={`project-feature${reversed ? " project-feature--alt" : ""}`}
    >
      <div className="project-feature__media">
        <img
          src={project.img}
          alt={title}
          className="project-feature__image"
          loading="lazy"
        />
      </div>

      <div className="project-feature__body">
        <h3 className="project-feature__title">{title}</h3>

        {techNames.length > 0 && (
          <p className="project-feature__tech">TECH: {techNames.join(", ")}</p>
        )}
        {techNames.length === 0 && skillIcons.length > 0 && (
          <div className="project-feature__tech-icons">
            {skillIcons.map((src) => (
              <img key={src} src={src} alt="" />
            ))}
          </div>
        )}

        <div className="project-feature__desc">
          {summaryParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {project.infor && (
            <SanitizedHtml html={project.infor} className="project-feature__infor" />
          )}
        </div>

        {highlights.length > 0 && (
          <div className="project-feature__highlights">
            {highlights.map((part) => (
              <p key={part}>
                <strong>{part}</strong>
              </p>
            ))}
          </div>
        )}

        <div className="project-feature__links">
          {project.codeLink && (
            <button
              type="button"
              className="project-feature__link"
              onClick={(e) => openExternalLink(project.codeLink, e)}
            >
              Github →
            </button>
          )}
          {project.pageLink && (
            <button
              type="button"
              className="project-feature__link"
              onClick={(e) => openExternalLink(project.pageLink!, e)}
            >
              Demo →
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
