import supabaseClient from "./supabase";

export async function createSession(newData) {
  const { data, error } = await supabaseClient
    .from("session")
    .insert([newData]);

  if (error) {
    console.error("Supabase insert error:", error);
    throw new Error(error);
  }
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
