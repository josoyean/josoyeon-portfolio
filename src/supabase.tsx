import { createClient } from "@supabase/supabase-js";
import type { Database } from "./supabase.types";

const supabase = createClient<Database>(
  `${process.env.REACT_APP_SUPABASE_URL}`,
  `${process.env.REACT_APP_SUPABASE_KEY}`
);
export { supabase };

export const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
export const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;
