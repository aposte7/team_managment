import { FiChevronDown } from "react-icons/fi";
import { HiArrowLeft, HiPlus } from "react-icons/hi2";
import { Link, useNavigate } from "react-router";

function CommentsLayout() {
  const navigate = useNavigate();
  return (
    <div className="absolute top-full left-0 h-full w-full rounded-t-xl bg-white transition-all duration-700 ease-in peer-checked:top-0">
      {/* Comment Header */}
      <header className="grid grid-cols-[10rem_1fr_10rem] items-center border-b border-gray-200 bg-white px-4 py-2">
        <div className="flex items-center justify-start">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="flex cursor-pointer items-center gap-3 text-gray-900 hover:text-gray-500"
          >
            <HiArrowLeft size={25} strokeWidth={0.3} />
          </button>
        </div>

        <div className="flex items-center justify-center gap-5">
          <input
            type="text"
            placeholder="Search..."
            className="block w-80 rounded-full border border-gray-300 px-3 py-1.5 text-base text-gray-900 placeholder-gray-400 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 sm:text-sm"
          />
          <Link className="text-gray-500">Comment</Link>
          <Link className="text-gray-500">Todo</Link>
        </div>

        <div className="flex items-center justify-end gap-3">
          <button className="flex h-fit items-center gap-2 rounded bg-black px-3 py-1.5 text-sm text-white">
            <HiPlus size={17} /> Add
          </button>

          <label
            htmlFor="toggle-comment"
            className="cursor-pointer rounded bg-gray-300 p-1 hover:bg-gray-400"
          >
            <FiChevronDown size={23} />
          </label>
        </div>
      </header>

      {/* Comment Card */}
      <div className="m-8 rounded-md border border-slate-300 px-4 py-8">
        <div className="max-w-[50rem] rounded-lg border border-gray-300 bg-white px-4 py-3 shadow-sm">
          <div className="flex items-start justify-between text-gray-700">
            <div>
              <p className="text-base font-semibold">Title of Comment</p>
              <p className="text-sm text-gray-500">Subtitle content</p>
            </div>
            <p className="text-xs whitespace-nowrap text-gray-400">
              Last updated: 12-02-2025
            </p>
          </div>

          <p className="mt-3 text-sm text-gray-800">
            It includes a comprehensive collection of prebuilt components ready
            for use in production and customizable to match your design system.
          </p>

          <div className="mt-4 flex items-center justify-between text-sm">
            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
              #UI
            </span>
            <button className="rounded-md border border-gray-300 px-3 py-1 text-sm text-gray-700 hover:bg-gray-100">
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentsLayout;
