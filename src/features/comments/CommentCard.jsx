import { useState } from "react";
import { LuX } from "react-icons/lu";

function CommentCard({ comment }) {
  const [expanded, setExpanded] = useState(false);
  const date = new Date(comment.created_at).toLocaleString();

  return (
    <div
      onClick={() => setExpanded((prev) => !prev)}
      className="max-w-[50rem] cursor-pointer rounded-lg border border-gray-300 bg-white px-4 py-3 shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="flex items-start justify-between text-gray-700">
        <div>
          <p className="text-base font-semibold">{comment?.title}</p>
          <p className="text-sm text-gray-500">{comment?.subtitle}</p>
        </div>
        <p className="text-xs whitespace-nowrap text-gray-400">
          Last updated: {date}
        </p>
      </div>

      <p className="comment mt-3 max-h-11 w-full overflow-clip text-sm text-ellipsis text-gray-800">
        {comment.description}
      </p>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          expanded ? "mt-3 max-h-94 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <h3 className="my-4 border-b border-b-gray-300 text-sm">Todos</h3>

        <div
          className={`tags mt-1 h-28 w-full space-y-1 overflow-y-auto border-x border-x-slate-200 bg-white px-2 py-2 ${expanded ? "h-24" : "h-0"}`}
        >
          <p className="flex items-center justify-between rounded-md bg-blue-200 py-1 ps-2 pe-1 text-sm">
            <span>anything can goes here buddy yeas</span>
            <button
              type="button"
              className="ms-2 w-fit cursor-pointer rounded-md bg-orange-700 px-0.5 py-0.5 text-white"
            >
              <LuX size={20} />
            </button>
          </p>
          <p className="flex items-center justify-between rounded-md bg-blue-200 py-1 ps-2 pe-1 text-sm">
            <span>anything can goes here buddy yeas</span>
            <button
              type="button"
              className="ms-2 w-fit cursor-pointer rounded-md bg-orange-700 px-0.5 py-0.5 text-white"
            >
              <LuX size={20} />
            </button>
          </p>
          <p className="flex items-center justify-between rounded-md bg-blue-200 py-1 ps-2 pe-1 text-sm">
            <span>anything can goes here buddy yeas</span>
            <button
              type="button"
              className="ms-2 w-fit cursor-pointer rounded-md bg-orange-700 px-0.5 py-0.5 text-white"
            >
              <LuX size={20} />
            </button>
          </p>
          <p className="flex items-center justify-between rounded-md bg-blue-200 py-1 ps-2 pe-1 text-sm">
            <span>anything can goes here buddy yeas</span>
            <button
              type="button"
              className="ms-2 w-fit cursor-pointer rounded-md bg-orange-700 px-0.5 py-0.5 text-white"
            >
              <LuX size={20} />
            </button>
          </p>
          <p className="flex items-center justify-between rounded-md bg-blue-200 py-1 ps-2 pe-1 text-sm">
            <span>anything can goes here buddy yeas</span>
            <button
              type="button"
              className="ms-2 w-fit cursor-pointer rounded-md bg-orange-700 px-0.5 py-0.5 text-white"
            >
              <LuX size={20} />
            </button>
          </p>
          {/* {comment.todos?.map((todo, index) => (
            <p
              key={index}
              className="flex items-center justify-between rounded-md bg-blue-200 py-1 ps-2 pe-1 text-sm"
            >
              <span>{todo.task}</span>
              <button
                type="button"
                className="ms-2 w-fit cursor-pointer rounded-md bg-orange-700 px-0.5 py-0.5 text-white"
              >
                <LuX size={20} />
              </button>
            </p>
          ))} */}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between text-sm">
        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
          #{comment.tags?.[0] || "Tag"}
        </span>
        <button
          className="rounded-md border border-gray-300 px-3 py-1 text-sm text-gray-700 hover:bg-gray-100"
          onClick={(e) => {
            e.stopPropagation(); // prevent expanding when clicking edit
            // Handle edit logic here
          }}
        >
          Edit
        </button>
      </div>
    </div>
  );
}

export default CommentCard;
