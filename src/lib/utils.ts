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

export function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  return "알 수 없는 오류";
}

export function splitParagraphs(text: string): string[] {
  return text
    .replace(/<br\s*\/?>/gi, "\n")
    .split(/\n+|(?<=다\.|요\.|습니다\.|니다\.)\s+/)
    .map((part) => part.replace(/<[^>]+>/g, "").trim())
    .filter(Boolean);
}
