import { supabaseKey, supabaseUrl } from "../supabase";
import axios from "axios";
export async function getProjects() {
  try {
    const response = await axios.get(
      `${supabaseUrl}/rest/v1/josoyeon-portfolio`,
      {
        headers: {
          apikey: supabaseKey,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("데이터 패칭 실패", error);
    return [];
  }
}
