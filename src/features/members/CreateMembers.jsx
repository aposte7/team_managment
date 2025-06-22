import { GrClose } from "react-icons/gr";

function CreateMembers({ closeModal }) {
  return (
    <div className="p-4">
      <h3 className="font-me text-lg">Add New Members</h3>

      <form action="" className="mt-5 space-y-6">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <label className="block text-gray-700" htmlFor="firstName">
              First name
            </label>
            <input
              className="rounded-xs bg-white px-2 py-1 outline-2 outline-slate-200 focus:outline-slate-500"
              type="text"
              id="firstName"
              placeholder="first name"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-gray-700" htmlFor="fatherName">
              Father name
            </label>
            <input
              className="rounded-xs bg-white px-2 py-1 outline-2 outline-slate-200 focus:outline-slate-500"
              type="text"
              id="fatherName"
              placeholder="father name"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label className="block text-gray-700" htmlFor="department">
            Phone
          </label>

          <div className="flex">
            <p className="rounded-l-xs border-2 border-r-0 border-slate-200 bg-slate-300 py-1 pr-1 pl-2">
              +251
            </p>
            <input
              className="w-[9.2rem] rounded-r-xs border-2 border-l-0 border-slate-200 bg-white px-1 py-1 outline-none"
              type="text"
              id="department"
              placeholder="98453..."
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <label className="block text-gray-700" htmlFor="department">
              Department
            </label>
            <input
              className="rounded-xs bg-white px-2 py-1 outline-2 outline-slate-200 focus:outline-slate-500"
              type="text"
              id="department"
              placeholder="department"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-gray-700" htmlFor="year">
              Year
            </label>
            <div className="flex w-full items-center text-lg">
              <span className="cursor-pointer rounded-tl rounded-bl border border-r-0 border-gray-400 bg-white px-[0.9rem] py-1 hover:bg-slate-200">
                1
              </span>
              <span className="cursor-pointer border border-r-0 border-gray-400 bg-white px-[0.9rem] py-1 hover:bg-slate-200">
                2
              </span>
              <span className="cursor-pointer border border-r-0 border-gray-400 bg-white px-[0.9rem] py-1 hover:bg-slate-200">
                3
              </span>
              <span className="cursor-pointer border border-r-0 border-gray-400 bg-white px-[0.9rem] py-1 hover:bg-slate-200">
                4
              </span>
              <span className="cursor-pointer rounded-tr rounded-br border border-gray-400 bg-white px-[0.9rem] py-1 hover:bg-slate-200">
                5
              </span>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <label className="block text-gray-700" htmlFor="department">
            Date of joining
          </label>
          <input
            className="rounded-xs bg-white px-2 py-1 outline-2 outline-slate-200 focus:outline-slate-500"
            type="text"
            id="calender"
            placeholder="12/3/2017"
          />
        </div>
      </form>
    </div>
  );
}

export default CreateMembers;
