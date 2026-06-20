import { createClient } from "@supabase/supabase-js";
import type { Database } from "./database.types";

const configuredUrl = process.env.REACT_APP_SUPABASE_URL ?? "";
const configuredKey = process.env.REACT_APP_SUPABASE_KEY ?? "";

export const isSupabaseConfigured = Boolean(configuredUrl && configuredKey);

if (!isSupabaseConfigured && process.env.NODE_ENV !== "test") {
  console.error(
    "[Supabase] REACT_APP_SUPABASE_URL 또는 REACT_APP_SUPABASE_KEY가 없습니다. .env 확인 후 dev 서버를 재시작하세요."
  );
}

// createClient는 빈 URL을 허용하지 않아, 미설정 시 placeholder로 초기화합니다.
// 실제 요청은 isSupabaseConfigured가 false일 때 UI에서 막거나, 쿼리 실패로 처리됩니다.
export const supabase = createClient<Database>(
  configuredUrl || "https://placeholder.supabase.co",
  configuredKey || "placeholder-anon-key"
);
