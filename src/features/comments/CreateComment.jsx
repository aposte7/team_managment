import { useForm } from "react-hook-form";
import Menus from "../../components/Menus";
import FormFields from "../../components/FormFields";
import { LuX } from "react-icons/lu";
import { useState } from "react";
import { useCreateComment } from "./useCreateComment";
import { useParams } from "react-router";
import Spinner from "../../components/Spinners";

const defaultTags = ["Spiritual", "Relation", "Secular"];

function CreateComment({ closeModal }) {
  const { register, reset, handleSubmit } = useForm();
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);
  const { createComment, isCreating } = useCreateComment();
  const { memberId } = useParams();

  const onSubmit = (data) => {
    const newCommentData = {
      comment: data,
      tags,
      todos,
    };

    createComment(
      {
        newCommentData,
        memberId,
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
    const trimmed = todoInput.trim();
    if (!trimmed || todos.includes(trimmed)) return;

    setTodos([...todos, trimmed]);
    setTodoInput("");
  }

  function handleRemoveTodo(todo) {
    setTodos((todos) => todos.filter((t) => t !== todo));
  }

  if (isCreating) return <Spinner />;

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
                      <LuX size={15} />
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
          <div className="flex w-full rounded-md border border-gray-400 px-2 py-0.5 pe-0.5 focus-within:ring focus-within:ring-indigo-600 focus:outline-none">
            <input
              id="todos"
              className="w-full pe-2 text-gray-600 focus:outline-none"
              type="text"
              value={todoInput}
              onChange={(e) => setTodoInput(e.target.value)}
              placeholder="todo"
            />
            <button
              type="button"
              onClick={handleAddTodo}
              className="w-fit rounded-md bg-black px-4 py-1.5 text-sm text-white"
            >
              Add
            </button>
          </div>

          {todos.length > 0 && (
            <div className="tags mt-1 max-h-28 w-full space-y-1 overflow-y-scroll rounded-md border border-slate-200 bg-white px-2 py-2 shadow-md">
              {todos.map((todo, index) => (
                <p
                  key={index}
                  className="flex items-center justify-between rounded-md bg-blue-200 py-1 ps-2 pe-1 text-sm"
                >
                  <span>{todo}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveTodo(todo)}
                    className="ms-2 w-fit cursor-pointer rounded-md bg-orange-700 px-0.5 py-0.5 text-white"
                  >
                    <LuX size={20} />
                  </button>
                </p>
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
            Create
          </button>
        </div>
      </Menus>
    </form>
  );
}

export default CreateComment;
