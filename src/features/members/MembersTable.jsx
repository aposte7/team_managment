import { HiEllipsisVertical } from "react-icons/hi2";

import Menus from "../../components/Menus";

function MembersTable() {
  return (
    <>
      {/* Table */}
      <div className="grid grid-cols-[3.5rem_1fr_1.8fr_1.8fr_0.6fr_1.6fr_1.8fr_0.6fr] grid-rows-[auto] bg-white py-1">
        {/* Table Header */}
        <div className="bg-lime-100 px-3 py-2">NO</div>
        <div className="bg-lime-200 px-3 py-2">Photo</div>
        <div className="bg-lime-300 px-3 py-2">Name</div>
        <div className="bg-lime-400 px-3 py-2">Department</div>
        <div className="bg-lime-500 px-3 py-2">Year</div>
        <div className="bg-lime-900 px-3 py-2">phone</div>
        <div className="bg-lime-700 px-3 py-2">Participation</div>
        <div className="bg-lime-800 px-3 py-2">Action</div>
      </div>
      <div className="grid grid-cols-[3.5rem_1fr_1.8fr_1.8fr_0.6fr_1.6fr_1.8fr_0.6fr] py-2">
        {/* Table Row */}
        <div className="px-3 py-2">1</div>
        <div className="h-16 w-16 self-center rounded-full bg-amber-500"></div>
        <div className="px-3 py-2">Olman Gemechu</div>
        <div className="px-3 py-2">Software Engineering</div>
        <div className="px-3 py-2">5</div>
        <div className="px-3 py-2">0977336223</div>

        <div className="px-3 py-2">3.5</div>
        <div className="px-3 py-2 text-center">
          <button className="cursor-pointer rounded p-1.5 hover:bg-gray-200">
            <HiEllipsisVertical size={22} />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-[3.5rem_1fr_1.8fr_1.8fr_0.6fr_1.6fr_1.8fr_0.6fr] py-2">
        {/* Table Row */}
        <div className="px-3 py-2">2</div>
        <div className="">
          <img
            src="/kk"
            alt=""
            className="h-16 w-16 rounded-full bg-blue-200"
          />
        </div>
        <div className="px-3 py-2">Nadhii Mebrate</div>
        <div className="px-3 py-2">Electrical Engineering</div>
        <div className="px-3 py-2">5</div>
        <div className="px-3 py-2">0977336273</div>
        <div className="px-3 py-2">3.5</div>
        <div className="px-3 py-2 text-center">
          <button className="cursor-pointer rounded p-1.5 hover:bg-gray-200">
            <HiEllipsisVertical size={22} />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-[3.5rem_1fr_1.8fr_1.8fr_0.6fr_1.6fr_1.8fr_0.6fr] py-2">
        {/* Table Row */}
        <div className="px-3 py-2">3</div>
        <div className="h-16 w-16 rounded-full bg-cyan-800"></div>
        <div className="px-3 py-2">Naol Wendimu</div>
        <div className="px-3 py-2">Civil Engineering</div>
        <div className="px-3 py-2">5</div>
        <div className="px-3 py-2">0967377282</div>

        <div className="px-3 py-2">3.5</div>
        <div className="relative px-3 py-2 text-center">
          <button className="cursor-pointer rounded p-1.5 hover:bg-gray-200">
            <HiEllipsisVertical size={22} />
          </button>

          <Menus />
        </div>
      </div>
    </>
  );
}

export default MembersTable;
