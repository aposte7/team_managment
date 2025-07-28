import { PAGE_SIZE } from "../utils/constants";
import supabaseClient, { supabaseUrl } from "./supabase";

export async function getMembers({ page }) {
  let query = supabaseClient.from("members").select("*", { count: "exact" });

  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;

  if (error) {
    throw new Error("Members could not be loaded");
  }

  return { data, error, count };
}

export async function createMember(newMember) {
  const imageName =
    `${Math.random()}-${newMember.profilePicture.name}`.replaceAll("/", "");

  const imagePath = `${supabaseUrl}/storage/v1/object/public/profile-picture/${imageName}`;

  let query = supabaseClient
    .from("members")
    .insert([{ ...newMember, profilePicture: imagePath }]);

  // create members
  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Members could not be created");
  }

  // upload image
  const { error: storageError } = await supabaseClient.storage
    .from("profile-picture")
    .upload(imageName, newMember.profilePicture);

  //  Delete the member IF there was an error uplaoding image
  if (storageError) {
    await supabaseClient.from("members").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error(
      "Member image could not be uploaded and the member was not created",
    );
  }

  return data;
}

export async function getMember(memberId) {
  const { data, error } = await supabaseClient
    .from("members")
    .select()
    .eq("id", memberId)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Member could not be loaded");
  }

  return data;
}

export async function deleteMember(memberId) {
  const { error: attendanceError } = await supabaseClient
    .from("attendance")
    .delete()
    .eq("member_id", memberId);

  if (attendanceError) {
    console.error(attendanceError);
    throw new Error("Could not delete member's attendance");
  }

  const { data, error: memberError } = await supabaseClient
    .from("members")
    .delete()
    .eq("id", memberId);

  if (memberError) {
    console.error(memberError);
    throw new Error("Member could not be deleted");
  }

  return data;
}

export async function editMember(memberData) {
  let query = supabaseClient.from("members");
  const id = memberData.id;
  delete memberData.id;

  const hasProfileChanged =
    memberData?.profilePicture.startsWith?.(supabaseUrl);

  const imageName =
    `${Math.random()}-${memberData.profilePicture?.name}`.replaceAll("/", "");

  const imagePath = hasProfileChanged
    ? memberData.profilePicture
    : `${supabaseUrl}/storage/v1/object/public/profile-picture/${imageName}`;

  query = query
    .update({ ...memberData, profilePicture: imagePath })
    .eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    console.log(error);
    throw new Error("Member information not be edited");
  }

  if (hasProfileChanged) return data;

  const { error: storageError } = await supabaseClient.storage
    .from("profile-picture")
    .upload(imageName, memberData.profilePicture);

  // 3. Delete the cabin IF there was an error uplaoding image
  if (storageError) {
    await supabaseClient.from("members").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error(
      "Member's image could not be uploaded and the Member information was not edited",
    );
  }

  return data;
}
