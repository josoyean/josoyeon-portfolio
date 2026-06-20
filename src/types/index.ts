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

export interface ProjectSeqItem {
  id: string;
  created_at: string;
  startDt: string;
  endDt: string;
  seq: number;
  name: string;
  info: string;
  parts: string[];
  impact?: string[];
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
  project_seq?: ProjectSeqItem[];
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
  introduce: string;
  pageLink?: string;
  img: string;
  skillLists?: { name: string; text: string }[];
  infor?: string;
}
