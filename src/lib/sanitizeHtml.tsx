import DOMPurify from "dompurify";

const ALLOWED_TAGS = [
  "p",
  "br",
  "strong",
  "em",
  "b",
  "i",
  "ul",
  "ol",
  "li",
  "a",
  "span",
] as const;

const ALLOWED_ATTR = ["href", "target", "rel", "class"] as const;

const handleLinkAttributes = (node: Element) => {
  if (node.tagName === "A") {
    node.setAttribute("target", "_blank");
    node.setAttribute("rel", "noopener noreferrer");
  }
};

if (typeof window !== "undefined") {
  DOMPurify.removeHook("afterSanitizeAttributes", handleLinkAttributes);
  DOMPurify.addHook("afterSanitizeAttributes", handleLinkAttributes);
}

export function sanitizeHtml(html: string): string {
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: [...ALLOWED_TAGS],
    ALLOWED_ATTR: [...ALLOWED_ATTR],
  });
}

interface SanitizedHtmlProps {
  html: string;
  className?: string;
  as?: keyof HTMLElementTagNameMap;
}

export function SanitizedHtml({
  html,
  className,
  as: Tag = "div",
}: SanitizedHtmlProps) {
  return (
    <Tag
      className={className}
      dangerouslySetInnerHTML={{ __html: sanitizeHtml(html) }}
    />
  );
}
