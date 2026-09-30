import { supabase } from "./supabase";
import type {
  ExperienceItem,
  IndividualProject,
  InterviewItem,
  ProjectPratItem,
  SkillItem,
} from "../types";

export const queryKeys = {
  skills: ["skills"] as const,
  tools: ["tools"] as const,
  interviews: ["interviews"] as const,
  experiences: ["experiences"] as const,
  projects: ["individual-projects"] as const,
};

export async function fetchSkills(): Promise<SkillItem[]> {
  const { data, error } = await supabase
    .from("skills")
    .select("*")
    .order("order", { ascending: true });

  if (error) throw error;
  return data ?? [];
}

export async function fetchTools(): Promise<SkillItem[]> {
  const { data, error } = await supabase
    .from("tools")
    .select("*")
    .order("order", { ascending: true });

  if (error) throw error;
  return data ?? [];
}

export async function fetchInterviews(): Promise<InterviewItem[]> {
  const { data, error } = await supabase
    .from("interview")
    .select("*")
    .order("order", { ascending: true });

  if (error) throw error;
  return data ?? [];
}

export async function fetchExperiences(): Promise<ExperienceItem[]> {
  const { data, error } = await supabase
    .from("experiences")
    .select("*, projects(*)")
    .order("sort", { referencedTable: "projects", ascending: true });

  if (error) throw error;

  return ((data ?? []) as ExperienceItem[]).map((item) => ({
    ...item,
    projects: [...(item.projects ?? [])].sort((a, b) => a.sort - b.sort),
  }));
}

function normalizeIsPrats(value: unknown): ProjectPratItem[] {
  try {
    const parsed = typeof value === "string" ? JSON.parse(value) : value;
    if (!Array.isArray(parsed)) return [];

    return parsed.filter(
      (item): item is ProjectPratItem =>
        Boolean(item) &&
        typeof item === "object" &&
        typeof item.info === "string",
    );
  } catch {
    return [];
  }
}

export async function fetchIndividualProjects(): Promise<IndividualProject[]> {
  const { data, error } = await supabase
    .from("individual-projects")
    .select("*");

  if (error) throw error;
  return ((data ?? []) as IndividualProject[]).map((item) => ({
    ...item,
    isPrats: normalizeIsPrats(item.isPrats),
  }));
}
