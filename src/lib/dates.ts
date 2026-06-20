function parseDate(value: string | null | undefined): Date | null {
  if (!value) return null;
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? null : date;
}

export function formatPeriod(
  startDt: string | null | undefined,
  endDt: string | null | undefined
): string {
  if (!startDt) return "";

  const start = parseDate(startDt);
  if (!start) return "";

  const format = (date: Date) =>
    `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, "0")}`;

  const end = endDt ? parseDate(endDt) : null;
  const endLabel = end ? format(end) : "진행중";

  return `${format(start)} ~ ${endLabel}`;
}

export function diffMonths(
  startDt: string,
  endDt: string | null | undefined
): number {
  const start = parseDate(startDt);
  const end = endDt ? parseDate(endDt) : new Date();
  if (!start || !end) return 0;

  return (
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth())
  );
}

export function formatDuration(totalMonths: number): string {
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  const parts: string[] = [];

  if (years > 0) parts.push(`${years}년`);
  if (months > 0) parts.push(`${months}개월`);

  return parts.join(" ") || "0개월";
}

export function getDurationLabel(
  startDt: string,
  endDt: string | null | undefined
): string {
  return formatDuration(diffMonths(startDt, endDt));
}
