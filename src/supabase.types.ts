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
        };
      };
    };
  };
}
