import supabaseClient from "./supabase";

export async function getComment(memberId) {
  const { error, data } = await supabaseClient
    .from("comments")
    .select("*")
    .eq("member_id", memberId);

  if (error) {
    throw error;
  }

  return data;
}
