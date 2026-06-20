export function openExternalLink(url: string, event?: React.MouseEvent): void {
  event?.preventDefault();
  event?.stopPropagation();
  window.open(url, "_blank", "noopener,noreferrer");
}

export function asset(path: string): string {
  return `${process.env.PUBLIC_URL}${path}`;
}

export function scrollToSection(selector: string, offset = 72): void {
  const element = document.querySelector<HTMLElement>(selector);
  if (!element) return;

  const top = element.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: "smooth" });
}
