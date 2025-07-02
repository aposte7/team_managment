import supabaseClient, { supabaseUrl } from "./supabase";

export async function getMembers() {
  const { data, error } = await supabaseClient.from("members").select("*");

  if (error) {
    throw new Error("Members could not be loaded");
  }

  return data;
}

export async function createMember(newMember) {
  const imageName =
    `${Math.random()}-${newMember.profilePicture.name}`.replaceAll("/", "");

  delete newMember.firstName;
  delete newMember.fatherName;

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
