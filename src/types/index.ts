export interface SkillItem {
  created_at: string;
  name: string;
  img: string;
  key: string;
  order: number;
}

export interface InterviewItem {
  id: string;
  created_at: string;
  question: string;
  answer: string;
  order: number;
}

export interface ProjectProblemItem {
  title: string;
  problem: string;
  solution: string[];
  result: string;
}

export interface ProjectSeqItem {
  id: string;
  created_at: string;
  startDt: string;
  endDt: string;
  seq: number;
  sort: number;
  name: string;
  info: string;
  contribution?: string[] | null;
  cases?: ProjectProblemItem[] | null;
  skills_img: string[];
  pageLink: string;
}

export interface ExperienceItem {
  id: string;
  created_at: string;
  startDt: string;
  endDt: string;
  company: string;
  job: string;
  skills: string[];
  projects?: ProjectSeqItem[];
}

export interface ProjectPratItem {
  problem: string;
  solution: string;
  result: string;
  image: string | null;
  code: string;
}

export interface IndividualProject {
  id: string;
  linkName: string;
  skills: string[];
  myWork: string[];
  position: string;
  title: string;
  startDt: string;
  endDt: string | null;
  blogLink: string;
  codeLink: string;
  parts: string[];
  contribution?: string[] | null;
  introduce: string;
  pageLink?: string;
  img: string;
  skillLists?: { name: string; text: string }[];
  infor?: string;
  isPrats?: ProjectPratItem[];
}
