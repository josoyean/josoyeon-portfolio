import { supabase } from "../supabase";

export const getSkills = async () => {
  const { data, error } = await supabase
    .from("skills")
    .select("*")
    .order("order", { ascending: true });

  if (error) throw error;
  return data;
};

export const getTools = async () => {
  const { data, error } = await supabase
    .from("tools")
    .select("*")
    .order("order", { ascending: true });

  if (error) throw error;
  return data;
};

export const getExperiences = async () => {
  const { data, error } = await supabase
    .from("experiences")
    .select("*,project_seq(*)");

  if (error) throw error;

  return data;
};

export const getIndividualProjects = async () => {
  const { data, error } = await supabase
    .from("individual-projects")
    .select("*");

  if (error) throw error;

  return data;
};
