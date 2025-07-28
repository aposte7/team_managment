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

export async function createAttendance(session) {
  const { data: members, error: memberError } = await supabaseClient
    .from("members")
    .select("id");

  if (memberError) throw memberError;

  const attendances = members.map((member) => ({
    session_id: session.id,
    member_id: member.id,
    status: session.default_status,
  }));

  const { data, error: attendanceError } = await supabaseClient
    .from("attendance")
    .insert(attendances);

  if (attendanceError) throw attendanceError;

  return data;
}
