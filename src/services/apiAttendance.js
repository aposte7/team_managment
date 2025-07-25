import supabaseClient from "./supabase";

export async function getAttendance() {
  const { data, error } = await supabaseClient
    .from("attendance")
    .select("*,members(id,name),session(id,date,title)");

  if (error) {
    throw error;
  }
  return data;
}
