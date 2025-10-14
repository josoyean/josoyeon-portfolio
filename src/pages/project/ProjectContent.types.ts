export interface ProjectContentTypes {
  handleClick?: (idx: number, e: React.MouseEvent) => void;
  closeClick?: (idx: number, e: React.MouseEvent) => void;
  elementIndex?: number;
  LinkName?: string;
  introduce?: string;
  pageBtn?: boolean;
  selectItem?: boolean;
  item?: IndividualItemsTypes;
}
export interface IndividualItemsTypes {
  id: string;
  linkName: string;
  skills: string[];
  myWork: string[];
  position: string;
  title: string;
  startDt: string;
  endDt: string | null;
  blogLink: string;
  codeBtn: boolean;
  pageBtn: boolean;
  codeLink: string;
  parts: string[];
  introduce: string;
  pageLink?: string | undefined;
  img: string;
}
