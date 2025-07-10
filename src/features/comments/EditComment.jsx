import { useForm } from "react-hook-form";
import Menus from "../../components/Menus";
import FormFields from "../../components/FormFields";
import { LuX } from "react-icons/lu";
import { useState } from "react";
import Spinner from "../../components/Spinners";
import { useEditComment } from "./useEditComment";
import { AiFillEdit } from "react-icons/ai";
import { FiX } from "react-icons/fi";

const defaultTags = ["Spiritual", "Relation", "Secular"];

function EditComment({ closeModal, commentToEdit = {} }) {
  const { register, reset, handleSubmit } = useForm({
    defaultValues: commentToEdit?.comment,
  });
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const [todoInput, setTodoInput] = useState({ id: "", task: "" }); // can store both todos from DB for edit and from client or new todos
  const [todos, setTodos] = useState([]);
  const [dbTodos, setDbTodos] = useState(() => commentToEdit?.todos || []);
  const { editComment, isEditing } = useEditComment();

  const onSubmit = (data) => {
    delete data?.id;
    const newCommentData = {
      comment: data,
      tags,
      todos: {
        newTodos: todos,
        dbTodos,
      },
    };

    editComment(
      {
        newCommentData,
        commentId: commentToEdit.comment.id,
      },
      {
        onSuccess: () => {
          reset();
          closeModal();
        },
      },
    );
  };

  const filteredSuggestions = defaultTags.filter(
    (tag) =>
      tag.toLowerCase().includes(tagInput.toLowerCase()) && !tags.includes(tag),
  );

  const handleSelectTag = (tag) => {
    setTags((prev) => [...prev, tag]);
    setTagInput("");
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags((prev) => prev.filter((tag) => tag !== tagToRemove));
  };

  function handleAddTodo() {
    if (!todoInput.id) {
      const trimmed = todoInput.task.trim();
      if (!trimmed || todos.includes(trimmed)) return;
      setTodos([...todos, trimmed]);
    } else {
      const editedTodoDb = dbTodos.map((todo) =>
        todo.id === todoInput.id ? { ...todo, task: todoInput.task } : todo,
      );

      setDbTodos(editedTodoDb);
    }
    setTodoInput({
      id: "",
      task: "",
    });
  }

  function handleRemoveTodo(todoDel) {
    const isTodoDb = typeof todoDel === "object";
    if (isTodoDb) {
      const modTodoDb = dbTodos.filter((todo) => todo.id !== todoDel.id);
      setDbTodos(modTodoDb);
      return;
    }
    setTodos((todos) => todos.filter((t) => t !== todoDel));
  }

  if (isEditing) return <Spinner />;
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto w-fit space-y-4 rounded-lg px-6 pb-6"
      action=""
    >
      <Menus>
        <div className="flex gap-10">
          <FormFields label="Title *">
            <input
              {...register("title")}
              className="h-fit w-[20rem] rounded-md border border-gray-400 px-2 py-1.5 text-gray-600 focus:ring focus:ring-indigo-600 focus:outline-none"
              type="text"
              placeholder="title"
            />
          </FormFields>
          <FormFields label="Subtitle ">
            <input
              {...register("subtitle")}
              className="h-fit w-[20rem] rounded-md border border-gray-400 px-2 py-1.5 text-gray-600 focus:ring focus:ring-indigo-600 focus:outline-none"
              id="subtitle"
              type="text"
              placeholder="subtitle"
            />
          </FormFields>
        </div>
        <div className="relative flex w-fit flex-col">
          <label className="mb-2 text-sm text-gray-700" htmlFor="tags">
            Tags *
          </label>
          <div className="flex gap-10">
            <Menus.Toggle id="comment-tags">
              <input
                id="tags"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                className="h-fit w-[20rem] rounded-md border border-gray-400 px-2 py-1.5 text-gray-600 focus:ring focus:ring-indigo-600 focus:outline-none"
                type="text"
                placeholder="tags"
              />
            </Menus.Toggle>
            {filteredSuggestions.length > 0 && (
              <Menus.MenuViews className="top-16.5 w-[20rem]" id="comment-tags">
                {tagInput && (
                  <Menus.Button
                    onClick={() => handleSelectTag(tagInput)}
                    label={tagInput}
                  />
                )}
                {filteredSuggestions.map((tag, index) => (
                  <Menus.Button
                    onClick={() => handleSelectTag(tag)}
                    key={`${index} ${tag}`}
                    label={tag}
                  />
                ))}
              </Menus.MenuViews>
            )}

            {tags.length > 0 && (
              <div className="tags flex w-[20rem] gap-3 overflow-x-scroll border-x border-gray-100 px-3 py-1.5">
                {tags.map((tag, index) => (
                  <p
                    key={`${index + 10} ${tag}s`}
                    className="flex w-fit gap-2 rounded-2xl bg-black px-2.5 py-1 text-xs text-white"
                  >
                    <span>{tag}</span>
                    <button
                      className="cursor-pointer"
                      onClick={() => handleRemoveTag(tag)}
                      type="button"
                    >
                      <LuX size={15} color="#f87171" />
                    </button>
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col">
          <FormFields label="Description *">
            <textarea
              {...register("description")}
              rows="4"
              cols="90"
              className="w-fit rounded-md border border-gray-400 px-2 py-1.5 text-gray-600 focus:ring focus:ring-indigo-600 focus:outline-none"
              id="description"
              type="text"
              placeholder="description"
            ></textarea>
          </FormFields>
        </div>

        <div className="flex flex-col">
          <label className="mb-2 text-sm text-gray-700" htmlFor="todos">
            Todo *
          </label>
          <div className="flex w-full items-center justify-between rounded-md border border-gray-400 px-2 py-0.5 pe-0.5 focus-within:ring focus-within:ring-indigo-600 focus:outline-none">
            <input
              id="todos"
              className="w-[82.5%] pe-2 text-gray-600 focus:outline-none"
              type="text"
              value={todoInput.task}
              onChange={(e) =>
                setTodoInput({
                  id: todoInput.id,
                  task: e.target.value,
                })
              }
              placeholder="todo"
            />
            <button
              type="button"
              onClick={handleAddTodo}
              className="w-fit rounded-md bg-black px-4 py-1.5 text-sm text-white"
            >
              {todoInput.id ? "Update Task" : "Add New Task"}
            </button>
          </div>

          {(todos.length !== 0 || dbTodos.length !== 0) && (
            <div className="tags mt-1 max-h-28 w-full space-y-1 overflow-y-scroll rounded-md border border-slate-200 bg-white px-2 py-2 shadow-md">
              {dbTodos.map((todo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-md bg-blue-50 py-1 ps-2 pe-1 text-sm"
                >
                  <p>{todo.task}</p>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setTodoInput(todo)}
                      type="button"
                      className="ms-2 w-fit cursor-pointer rounded px-0.5 py-0.5 text-blue-400 transition-all duration-300 hover:bg-blue-400 hover:text-gray-200"
                    >
                      <AiFillEdit size={22} />
                    </button>
                    <button
                      onClick={() => handleRemoveTodo(todo)}
                      type="button"
                      className="ms-2 w-fit cursor-pointer rounded px-0.5 py-0.5 text-rose-400 transition-all duration-300 hover:bg-rose-400 hover:text-white"
                    >
                      <FiX size={22} strokeWidth={3} />
                    </button>
                  </div>
                </div>
              ))}
              {todos.map((task, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-md bg-blue-50 py-1 ps-2 pe-1 text-sm"
                >
                  <p>{task}</p>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => handleRemoveTodo(task)}
                      type="button"
                      className="ms-2 w-fit cursor-pointer rounded px-0.5 py-0.5 text-rose-400 transition-all duration-300 hover:bg-rose-400 hover:text-white"
                    >
                      <FiX size={22} strokeWidth={3} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-10 flex justify-between gap-5">
          <button
            type="button"
            onClick={closeModal}
            className="cursor-pointer rounded-md border border-rose-400 bg-rose-700/80 px-4 py-1 text-white"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="cursor-pointer rounded-md border border-gray-300 px-4 py-1"
          >
            Confirm
          </button>
        </div>
      </Menus>
    </form>
  );
}

export default EditComment;
