import { useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { AppWindow, ExternalLink, Github, X } from "lucide-react";
import type { IndividualProject } from "../../types";
import { formatPeriod } from "../../lib/dates";
import { openExternalLink } from "../../lib/utils";
import { IconButton } from "../ui";

interface ProjectModalProps {
  project: IndividualProject;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <motion.div
      className="modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <motion.div
        className="modal"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 8 }}
        transition={{ duration: 0.15 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal__header">
          <h3 id="project-modal-title" className="modal__title">
            {project.title || project.introduce}
          </h3>
          <div className="modal__actions">
            {project.pageLink && (
              <IconButton
                label="데모"
                onClick={(e) => openExternalLink(project.pageLink!, e)}
              >
                <ExternalLink size={14} />
              </IconButton>
            )}
            {project.codeLink && (
              <IconButton
                label="GitHub"
                onClick={(e) => openExternalLink(project.codeLink, e)}
              >
                <Github size={14} />
              </IconButton>
            )}
            {project.blogLink && (
              <IconButton
                label="블로그"
                onClick={(e) => openExternalLink(project.blogLink, e)}
              >
                <AppWindow size={14} />
              </IconButton>
            )}
            <IconButton label="닫기" variant="ghost" onClick={onClose}>
              <X size={14} />
            </IconButton>
          </div>
        </div>

        <div className="modal__body">
          <div className="modal__intro">
            <span>{project.introduce}</span>
            {project.infor && (
              <em dangerouslySetInnerHTML={{ __html: project.infor }} />
            )}
          </div>

          <img
            src={project.img}
            alt={project.title}
            className="modal__image"
          />

          <div className="modal__meta">
            <span>{formatPeriod(project.startDt, project.endDt)}</span>
            <span>{project.position}</span>
            {project.myWork?.length > 0 && (
              <span>{project.myWork.join(" · ")}</span>
            )}
          </div>

          {project.parts?.length > 0 && (
            <div className="modal__section">
              <h4 className="modal__section-title">Description</h4>
              <ul className="modal__list">
                {project.parts.map((part, i) => (
                  <li key={i}>{part}</li>
                ))}
              </ul>
            </div>
          )}

          {project.skillLists && project.skillLists.length > 0 && (
            <div className="modal__section">
              <h4 className="modal__section-title">Skills</h4>
              {project.skillLists.map((skill, i) => (
                <div key={i} className="modal__skills-row">
                  <span>{skill.name}</span>
                  <span>{skill.text}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
