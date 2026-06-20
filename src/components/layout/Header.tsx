import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useScrollProgress } from "../../hooks/useScrollProgress";
import { asset, scrollToSection } from "../../lib/utils";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Interviews", href: "#interviews" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
] as const;

export function Header() {
  const progress = useScrollProgress();
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = (href: string) => {
    scrollToSection(href);
    setMenuOpen(false);
  };

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
              className="header__nav-link"
              onClick={() => navigate(href)}
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
            className="header__mobile-link"
            onClick={() => navigate(href)}
          >
            {label}
          </button>
        ))}
      </nav>
    </header>
  );
}
