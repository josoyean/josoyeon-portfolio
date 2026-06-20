import { ReactNode } from "react";

interface SectionTitleProps {
  title: string;
  badge?: string;
}

export function SectionTitle({ title, badge }: SectionTitleProps) {
  return (
    <h2 className="section-title">
      {title}
      {badge && <span className="section-badge">{badge}</span>}
    </h2>
  );
}

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export function SectionWrapper({ id, children, className = "" }: SectionWrapperProps) {
  return (
    <section id={id} className={`section ${className}`.trim()}>
      <div className="container">{children}</div>
    </section>
  );
}

export function LoadingState({ label = "불러오는 중..." }: { label?: string }) {
  return (
    <div className="state-message" role="status">
      <div className="spinner" aria-hidden />
      <span>{label}</span>
    </div>
  );
}

export function ErrorState({ message }: { message: string }) {
  return (
    <div className="state-message state-message--error" role="alert">
      <span>{message}</span>
    </div>
  );
}

export function EmptyState({ message }: { message: string }) {
  return (
    <div className="state-message" role="status">
      <span>{message}</span>
    </div>
  );
}

interface IconButtonProps {
  onClick?: (e: React.MouseEvent) => void;
  children: React.ReactNode;
  label: string;
  variant?: "default" | "ghost";
}

export function IconButton({
  onClick,
  children,
  label,
  variant = "default",
}: IconButtonProps) {
  return (
    <button
      type="button"
      className={`icon-btn ${variant === "ghost" ? "icon-btn--ghost" : ""}`}
      onClick={onClick}
      aria-label={label}
    >
      {children}
    </button>
  );
}
