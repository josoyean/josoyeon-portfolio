export interface ProjectContentTypes {
  handleClick?: (idx: number, e: React.MouseEvent) => void;
  closeClick?: (idx: number, e: React.MouseEvent) => void;
  elementIndex?: number;
  LinkName?: string;
  introduce?: string;
  pageBtn?: boolean;
  selectItem?: boolean;
  item?: ProjectItemsTypes;
}
export interface ProjectItemsTypes {
  id: string;
  LinkName: string;
  SkillText: string[];
  MyWork: string[];
  Position: string;
  Title: string;
  ItemDate: string;
  blogLink: string;
  CodeBtn: boolean;
  pageBtn: boolean;
  codeLink: string;
  part: string[];
  introduce: string;
  pageLink?: string | undefined;
}
