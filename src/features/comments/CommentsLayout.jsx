import { FiChevronDown } from "react-icons/fi";
import { HiArrowLeft, HiPlus } from "react-icons/hi2";
import { Link, useNavigate } from "react-router";
import CommentCard from "./CommentCard";
import CreateComment from "./CreateComment";
import Modal from "../../components/Modal";
import { useComments } from "./useComments";
import Spinner from "../../components/Spinners";

function CommentsLayout() {
  const navigate = useNavigate();

  const { isLoading, comments } = useComments();

  if (isLoading) return <Spinner />;
  return (
    <Modal>
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
            <Modal.Open name="add-comment">
              <button className="flex h-fit items-center gap-2 rounded bg-black px-3 py-1.5 text-sm text-white">
                <HiPlus size={17} /> Add
              </button>
            </Modal.Open>

            <label
              htmlFor="toggle-comment"
              className="cursor-pointer rounded bg-gray-300 p-1 hover:bg-gray-400"
            >
              <FiChevronDown size={23} />
            </label>
          </div>

          <Modal.View title="Add Comment" name="add-comment">
            <CreateComment />
          </Modal.View>
        </header>

        {/* Comment Card */}
        <div className="mx-auto mt-3 h-[calc(100%-4rem)] w-fit space-y-3 overflow-y-scroll border-x border-x-slate-300 px-4 py-4">
          {comments.map((comment) => (
            <CommentCard comment={comment} key={comment.id} />
          ))}
        </div>
      </div>
    </Modal>
  );
}

export default CommentsLayout;
