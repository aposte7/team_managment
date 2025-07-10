import { hasChanges } from "../utils/helpers";
import supabaseClient from "./supabase";

export async function getComment(memberId) {
  const { error, data } = await supabaseClient
    .from("comments")
    .select(
      `
      *,
      comment_todos(*)
    `,
    )
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

export async function editComment({ newCommentData, dbCommentData }) {
  const {
    comment: editedComment,
    todos: { newTodos = [], editedTodos = [] },
    tags: editedTags,
  } = newCommentData;

  const {
    comment: { id: commentId, ...dbComment },
    todos: dbTodos,
    tags: dbTags,
  } = dbCommentData;

  // Update comment only if changed
  const isCommentChanged = hasChanges(editedComment, dbComment);

  if (isCommentChanged) {
    const { error: updateError } = await supabaseClient
      .from("comments")
      .update(editedComment)
      .eq("id", commentId);

    if (updateError) throw new Error("Could not edit comment");
  }

  // Find deleted todos
  const deletedTodos = dbTodos.filter(
    (todo) => !editedTodos.some((edTodo) => edTodo.id === todo.id),
  );

  if (deletedTodos.length > 0) {
    const { error: deleteError } = await supabaseClient
      .from("todos")
      .delete()
      .in(
        "id",
        deletedTodos.map((todo) => todo.id),
      );

    if (deleteError) throw new Error("Failed to delete todos");
  }

  // Update edited todos (only if task changed)
  for (const edTodo of editedTodos) {
    const original = dbTodos.find((todo) => todo.id === edTodo.id);
    if (!original) continue;

    if (hasChanges(edTodo, original)) {
      const { error: updateError } = await supabaseClient
        .from("todos")
        .update({ task: edTodo.task })
        .eq("id", edTodo.id);

      if (updateError)
        throw new Error(`Failed to update todo with id ${edTodo.id}`);
    }
  }

  // Insert new todos
  if (newTodos.length > 0) {
    const insertData = newTodos.map((task) => ({
      task,
      comment_id: commentId,
    }));

    const { error: insertError } = await supabaseClient
      .from("todos")
      .insert(insertData);

    if (insertError) throw new Error("Failed to insert todos");
  }

  return true;
}
