import { useForm } from "react-hook-form";
import Menus from "../../components/Menus";
import FormFields from "../../components/FormFields";
import { LuX } from "react-icons/lu";

function CreateComment() {
  const { register, handleSubmit } = useForm();
  return (
    <form
      className="mx-auto w-fit space-y-4 rounded-lg bg-white px-5 py-8"
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
                {...register("comment-tags")}
                className="h-fit w-[20rem] rounded-md border border-gray-400 px-2 py-1.5 text-gray-600 focus:ring focus:ring-indigo-600 focus:outline-none"
                id="tags"
                type="text"
                placeholder="tags"
              />
            </Menus.Toggle>
            <Menus.MenuViews className="top-16.5 w-[20rem]" id="comment-tags">
              <Menus.Button label="Spiritual" />
              <Menus.Button label="Education" />
              <Menus.Button label="Relation Ship" />
            </Menus.MenuViews>
            <div className="flex w-[20rem] gap-3 overflow-x-scroll bg-blue-300 px-3 py-1.5">
              <p className="flex w-fit gap-2 rounded-2xl bg-black px-2.5 py-1 text-xs text-white">
                <span>Spiritual</span>
                <button>
                  <LuX size={15} />
                </button>
              </p>
              <p className="flex w-fit gap-2 rounded-2xl bg-black px-2.5 py-1 text-xs text-white">
                <span>Spiritual</span>
                <button>
                  <LuX size={15} />
                </button>
              </p>
              <p className="flex w-fit gap-2 rounded-2xl bg-black px-2.5 py-1 text-xs text-white">
                <span>Spiritual</span>
                <button>
                  <LuX size={15} />
                </button>
              </p>
              <p className="flex w-fit gap-2 rounded-2xl bg-black px-2.5 py-1 text-xs text-white">
                <span>Spiritual</span>
                <button>
                  <LuX size={15} />
                </button>
              </p>
              <p className="flex w-fit gap-2 rounded-2xl bg-black px-2.5 py-1 text-xs text-white">
                <span>Spiritual</span>
                <button>
                  <LuX size={15} />
                </button>
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <FormFields label="Description *">
            <textarea
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
          <label className="mb-2 text-sm text-gray-700" htmlFor="todo">
            Todo *
          </label>
          <div className="flex w-full rounded-md border border-gray-400 px-2 py-0.5 pe-0.5 focus-within:ring focus-within:ring-indigo-600 focus:outline-none">
            <input
              className="w-full pe-2 text-gray-600 focus:outline-none"
              id="todo"
              type="text"
              placeholder="todo"
            />
            <button className="w-fit rounded-md bg-black px-4 py-1.5 text-sm text-white">
              Add
            </button>
          </div>

          <div className="mt-1 h-28 w-full space-y-1 overflow-y-scroll rounded-md border border-slate-200 bg-white px-2 py-2 shadow-md">
            <p className="flex items-center justify-between rounded-md bg-blue-200 py-1 ps-2 pe-1 text-sm">
              <span>Bilbilif yeroo hundaa ganama ganam Bilbi</span>
              <button className="ms-2 w-fit rounded-md bg-orange-700 px-0.5 py-0.5 text-white">
                <LuX size={25} />
              </button>
            </p>
            <p className="flex items-center justify-between rounded-md bg-blue-200 py-1 ps-2 pe-1 text-sm">
              <span>Bilbilif yeroo hundaa ganama ganam Bilbi</span>
              <button className="ms-2 w-fit rounded-md bg-orange-700 px-0.5 py-0.5 text-white">
                <LuX size={25} />
              </button>
            </p>
            <p className="flex items-center justify-between rounded-md bg-blue-200 py-1 ps-2 pe-1 text-sm">
              <span>Bilbilif yeroo hundaa ganama ganam Bilbi</span>
              <button className="ms-2 w-fit rounded-md bg-orange-700 px-0.5 py-0.5 text-white">
                <LuX size={25} />
              </button>
            </p>
            <p className="flex items-center justify-between rounded-md bg-blue-200 py-1 ps-2 pe-1 text-sm">
              <span>Bilbilif yeroo hundaa ganama ganam Bilbi</span>
              <button className="ms-2 w-fit rounded-md bg-orange-700 px-0.5 py-0.5 text-white">
                <LuX size={25} />
              </button>
            </p>
          </div>
        </div>

        <div className="mt-10 flex justify-between gap-5">
          <button className="rounded-md border border-rose-400 bg-rose-700/80 px-4 py-1 text-white">
            Cancel
          </button>
          <button className="rounded-md border border-gray-300 px-4 py-1">
            Create
          </button>
        </div>
      </Menus>
    </form>
  );
}

export default CreateComment;
