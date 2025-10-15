export interface ExperienceItemsTypes {
  id: string;
  created_at: string;
  startDt: string;
  endDt: string;
  company: string;
  job: string;
  skills: string[];
  project_seq?: ProjectsItemsTypes[];
}

export interface ProjectsItemsTypes {
  id: string;
  created_at: string;
  startDt: string;
  endDt: string;
  seq: number;
  name: string;
  info: string;
  // result: string;
  parts: string[];
  skills_img: string[];
  pageLink: string;
}
