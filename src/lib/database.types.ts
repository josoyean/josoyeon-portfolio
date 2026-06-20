export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      skills: {
        Row: {
          created_at: string;
          name: string;
          img: string;
          key: string;
          order: number;
        };
      };
      tools: {
        Row: {
          created_at: string;
          name: string;
          img: string;
          key: string;
          order: number;
        };
      };
      interview: {
        Row: {
          id: string;
          created_at: string;
          question: string;
          answer: string;
          order: number;
        };
      };
      experiences: {
        Row: {
          id: string;
          created_at: string;
          startDt: string;
          endDt: string;
          company: string;
          job: string;
          skills: string[];
        };
      };
      project_seq: {
        Row: {
          id: string;
          created_at: string;
          startDt: string;
          endDt: string;
          seq: number;
          name: string;
          info: string;
          parts: string[];
          impact: string[] | null;
          skills_img: string[];
          pageLink: string;
        };
      };
      "individual-projects": {
        Row: {
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
          pageLink: string | null;
          img: string;
          skillLists: { name: string; text: string }[] | null;
          infor: string | null;
        };
      };
    };
  };
}
