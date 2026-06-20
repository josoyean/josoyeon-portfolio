import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { ExternalLink } from "lucide-react";
import { fetchExperiences, queryKeys } from "../../lib/queries";
import {
  diffMonths,
  formatDuration,
  formatPeriod,
  getDurationLabel,
} from "../../lib/dates";
import { openExternalLink } from "../../lib/utils";
import {
  ErrorState,
  IconButton,
  LoadingState,
  SectionTitle,
  SectionWrapper,
} from "../ui";

export function ExperienceSection() {
  const { data, isLoading, isError } = useQuery({
    queryKey: queryKeys.experiences,
    queryFn: fetchExperiences,
  });

  const totalDuration = useMemo(() => {
    if (!data?.length) return "";
    const totalMonths = data.reduce(
      (sum, item) => sum + diffMonths(item.startDt, item.endDt),
      0
    );
    return formatDuration(totalMonths);
  }, [data]);

  return (
    <SectionWrapper id="experience" className="section--alt">
      <SectionTitle
        title="Experience"
        badge={totalDuration ? totalDuration : undefined}
      />

      {isLoading && <LoadingState />}
      {isError && (
        <ErrorState message="경력 데이터를 불러오지 못했습니다." />
      )}

      {data && (
        <ul className="experience-list">
          {data.map((company) => (
            <li key={company.id} className="experience-company">
              <div className="experience-company__header">
                <h3 className="experience-company__name">{company.company}</h3>
                <span className="experience-company__duration">
                  {getDurationLabel(company.startDt, company.endDt)}
                </span>
              </div>
              <p className="experience-company__role">{company.job}</p>

              <div className="experience-projects">
                {company.project_seq?.map((project) => (
                  <article key={project.id} className="experience-project">
                    <div className="experience-project__title-row">
                      <h4 className="experience-project__title">
                        {project.name}
                      </h4>
                      {project.pageLink && (
                        <IconButton
                          label="데모 링크"
                          onClick={(e) =>
                            openExternalLink(project.pageLink, e)
                          }
                        >
                          <ExternalLink size={14} />
                        </IconButton>
                      )}
                    </div>
                    <em className="experience-project__desc">{project.info}</em>
                    <time className="experience-project__period">
                      {formatPeriod(project.startDt, project.endDt)}
                    </time>
                    {project.parts?.length > 0 && (
                      <div className="experience-project__detail">
                        <span>Role</span>
                        <ul>
                          {project.parts.map((part, i) => (
                            <li key={i}>{part}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {project.impact && project.impact.length > 0 && (
                      <div className="experience-project__detail">
                        <span>Impact</span>
                        <ul>
                          {project.impact.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {project.skills_img?.length > 0 && (
                      <div className="experience-project__skills">
                        {project.skills_img.map((src, i) => (
                          <img key={i} src={src} alt="" loading="lazy" />
                        ))}
                      </div>
                    )}
                  </article>
                ))}
              </div>
            </li>
          ))}
        </ul>
      )}
    </SectionWrapper>
  );
}
