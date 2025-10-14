import moment from "moment";

export const StartDtToEndDt = (
  startDt: string | null = null,
  endDt: string | null = null
): string | null => {
  if (!startDt) return "";
  return `${moment(startDt).format("YYYY.MM")} ~ ${
    !endDt ? "진행중" : moment(endDt).format("YYYY.MM")
  }`;
};

export const DemoLink = (link: string, e: React.MouseEvent) => {
  e.preventDefault();
  window.open(link, "_blank");
};
