import { createClient } from "@supabase/supabase-js";
import type { Database } from "./database.types";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL ?? "";
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY ?? "";

if (!supabaseUrl || !supabaseKey) {
  console.error(
    "[Supabase] REACT_APP_SUPABASE_URL 또는 REACT_APP_SUPABASE_KEY가 없습니다. .env 확인 후 dev 서버를 재시작하세요."
  );
}

export const supabase = createClient<Database>(supabaseUrl, supabaseKey);

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseKey);
