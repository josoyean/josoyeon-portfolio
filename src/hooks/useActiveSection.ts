import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: readonly string[]) {
  const [activeSection, setActiveSection] = useState(
    sectionIds[0]?.replace("#", "") ?? ""
  );

  useEffect(() => {
    const sections = sectionIds
      .map((href) => document.getElementById(href.replace("#", "")))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        const nextId = visible[0]?.target.id;
        if (nextId) setActiveSection(nextId);
      },
      {
        rootMargin: "-72px 0px -55% 0px",
        threshold: [0, 0.15, 0.4],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [sectionIds]);

  return activeSection;
}
