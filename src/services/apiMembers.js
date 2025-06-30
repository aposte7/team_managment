import supabaseClient from "./supabase";

export async function getMembers() {
  const { data, error } = await supabaseClient.from("members").select("*");

  if (error) {
    console.error(error);
    throw new Error("Members could not be loaded");
  }

  return data;
}
