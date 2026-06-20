import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useActiveSection } from "../../hooks/useActiveSection";
import { useScrollProgress } from "../../hooks/useScrollProgress";
import { asset, scrollToSection } from "../../lib/utils";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Interviews", href: "#interviews" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
] as const;

const SECTION_IDS = NAV_ITEMS.map(({ href }) => href);

export function Header() {
  const progress = useScrollProgress();
  const activeSection = useActiveSection(SECTION_IDS);
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = (href: string) => {
    scrollToSection(href);
    setMenuOpen(false);
  };

  const isActive = (href: string) =>
    activeSection === href.replace("#", "");

  return (
    <header className="header">
      <div className="container header__inner">
        <button
          type="button"
          className="header__brand"
          onClick={() => navigate("#about")}
          aria-label="홈으로"
        >
          <img
            src={asset("/images/josoyeon.png")}
            alt=""
            className="header__logo"
            aria-hidden
          />
          <span>조소연</span>
        </button>

        <nav className="header__nav" aria-label="주요 섹션">
          {NAV_ITEMS.map(({ label, href }) => (
            <button
              key={href}
              type="button"
              className={`header__nav-link ${isActive(href) ? "header__nav-link--active" : ""}`}
              onClick={() => navigate(href)}
              aria-current={isActive(href) ? "true" : undefined}
            >
              {label}
            </button>
          ))}
        </nav>

        <button
          type="button"
          className="header__menu-btn"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div className="header__progress" style={{ width: `${progress}%` }} />

      <nav
        className={`header__mobile-menu ${menuOpen ? "is-open" : ""}`}
        aria-label="모바일 메뉴"
        aria-hidden={!menuOpen}
      >
        {NAV_ITEMS.map(({ label, href }) => (
          <button
            key={href}
            type="button"
            className={`header__mobile-link ${isActive(href) ? "header__mobile-link--active" : ""}`}
            onClick={() => navigate(href)}
            aria-current={isActive(href) ? "true" : undefined}
          >
            {label}
          </button>
        ))}
      </nav>
    </header>
  );
}
