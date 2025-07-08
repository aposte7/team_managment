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

export async function createComment({ newCommentData, memberId }) {
  const { comment, todos = [], tags = [] } = newCommentData;
  console.log(newCommentData);

  const { error: commentError, data: commentData } = await supabaseClient
    .from("comments")
    .insert([{ ...comment, member_id: memberId }])
    .select()
    .single();

  if (commentError) {
    throw new Error("Comment could not be created");
  }

  const commentId = commentData.id;

  const todosWithCommentId = todos.map((task) => ({
    task,
    comment_id: commentId,
    is_done: false,
  }));

  const { error: todosError, data: todosData } = await supabaseClient
    .from("comment_todos")
    .insert(todosWithCommentId)
    .select();

  if (todosError) {
    throw new Error("Todos could not be created");
  }

  return {
    comment: commentData,
    todos: todosData,
  };
}
