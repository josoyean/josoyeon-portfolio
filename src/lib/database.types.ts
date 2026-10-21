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
      projects: {
        Row: {
          id: string;
          created_at: string;
          startDt: string;
          endDt: string;
          seq: number;
          sort: number;
          name: string;
          info: string;
          contribution: string[] | null;
          cases:
            | {
                title: string;
                problem: string;
                solution: string[];
                result: string;
              }[]
            | null;
          skills_img: string[];
          pageLink: string;
        };
      };
      "individual-projects": {
        Row: {
          id: string;
          linkName: string;
          skills: string[];
          title: string;
          startDt: string;
          endDt: string | null;
          blogLink: string;
          codeLink: string;
          contribution: string[] | null;
          introduce: string;
          pageLink: string | null;
          img: string;
          skillLists: { name: string; text: string }[] | null;
          infor: string | null;
          isPrats:
            | {
                title: string;
                problem: string;
                solution: string;
                result: string;
                image: string | null;
                code: string;
              }[]
            | null;
        };
      };
    };
  };
}
