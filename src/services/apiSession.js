import { createAttendance } from "./apiAttendance";
import supabaseClient from "./supabase";

export async function createSession(newData) {
  const { data, error } = await supabaseClient
    .from("session")
    .insert([newData])
    .select()
    .single();

  if (error) {
    console.error("Supabase insert error:", error);
    throw new Error(error);
  }
  await createAttendance(data);

  return data;
}

export async function getSession() {
  const { data: session, error } = await supabaseClient
    .from("session")
    .select("*");

  if (error) {
    console.error("Supabase insert error:", error);
    throw new Error(error);
  }

  return session;
}
