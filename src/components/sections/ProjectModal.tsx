import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, X } from "lucide-react";
import type { IndividualProject } from "../../types";
import { useFocusTrap } from "../../hooks/useFocusTrap";
import { IconButton } from "../ui";

interface ProjectModalProps {
  project: IndividualProject;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const modalRef = useFocusTrap<HTMLDivElement>(true, onClose);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

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
        ref={modalRef}
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
            <IconButton label="닫기" onClick={onClose}>
              <X size={14} />
            </IconButton>
          </div>
        </div>

        <div className="modal__body">
          {!!project.isPrats?.length && (
            <ul className="modal__prat-list">
              {project.isPrats.map((item, i) => (
                <li key={`${item.info}-${i}`} className="modal__prat-item">
                  {item.info && <p className="modal__prat-info">{item.info}</p>}
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.info || "구현 예시"}
                      className="modal__prat-image"
                    />
                  )}
                  {item.code && <CollapsibleCode code={item.code} />}
                </li>
              ))}
            </ul>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

const COLLAPSED_LINES = 5;

function CollapsibleCode({ code }: { code: string }) {
  const [expanded, setExpanded] = useState(false);
  const canCollapse = code.split("\n").length > COLLAPSED_LINES;
  const collapsed = canCollapse && !expanded;

  return (
    <div className={`modal__prat-code-wrap${collapsed ? " is-collapsed" : ""}`}>
      <pre className="modal__prat-code">
        <code>{code}</code>
      </pre>
      {canCollapse && (
        <button
          type="button"
          className="modal__prat-code-toggle"
          onClick={() => setExpanded((prev) => !prev)}
          aria-expanded={expanded}
        >
          {expanded ? "접기" : "더보기"}
          <ChevronDown size={14} />
        </button>
      )}
    </div>
  );
}
