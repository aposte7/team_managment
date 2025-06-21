import { BiPlus } from "react-icons/bi";
import { CgAdd } from "react-icons/cg";
import { HiOutlineHome, HiOutlineUserGroup } from "react-icons/hi";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import { LuSettings } from "react-icons/lu";

import { RiAdminLine } from "react-icons/ri";

function App() {
  return (
    <div className="grid h-dvh grid-cols-[17rem_1fr] bg-amber-200">
      <aside className="h-full overflow-hidden bg-white">
        <div className="bg-blue-400 p-2 text-center text-[1.6rem] font-semibold text-white">
          Evangelism Team
        </div>

        <div className="space-y-2 px-5 py-10 text-[1.1rem] text-gray-600">
          <div className="flex items-center gap-3 rounded-md bg-stone-100 px-6 py-3">
            <HiOutlineHome size={23} />
            <span> Home</span>
          </div>
          <div className="flex items-center gap-3 rounded-md px-6 py-3 hover:bg-stone-100 hover:text-gray-800">
            <HiOutlineUserGroup size={23} />
            <span> Members</span>
          </div>
          <div className="flex items-center gap-3 rounded-md px-6 py-3 hover:bg-stone-100 hover:text-gray-800">
            <HiOutlineCalendarDays size={23} />
            <span> Plan</span>
          </div>
          <div className="flex items-center gap-3 rounded px-6 py-3 hover:bg-stone-100 hover:text-gray-800">
            <RiAdminLine size={23} />
            <span> Admins</span>
          </div>

          <div className="flex items-center gap-3 rounded-md px-6 py-3 hover:bg-stone-100 hover:text-gray-800">
            <LuSettings size={23} />
            <span> Setting</span>
          </div>
        </div>
      </aside>

      <main className="bg-stone-100 px-5 pt-4">
        {/* // Use This in the home page make user to make it mobile responsive
        
        <div className="h-full bg-gray-50">
          <div className="flex flex-wrap items-center justify-center gap-15">
            <div className="w-fit bg-white p-4">
              <p className="text-lg text-black">Fresh</p>
              <span className="font-light">12 members</span>
            </div>
            <div className="w-fit bg-white p-3">
              <p className="text-lg text-black">
                2<sup>nd</sup> Year
              </p>
              <span className="font-light">12 members</span>
            </div>
            <div className="w-fit bg-white p-3">
              <p className="text-lg text-black">
                3<sup>nd</sup> Year
              </p>
              <span className="font-light">12 members</span>
            </div>
            <div className="w-fit bg-white p-3">
              <p className="text-lg text-black">
                4<sup>nd</sup> Year
              </p>
              <span className="font-light">12 members</span>
            </div>
            <div className="w-fit bg-white p-3">
              <p className="text-lg text-black">
                5<sup>nd</sup> Year
              </p>
              <span className="font-light">21 members</span>
            </div>
          </div>
        </div>  */}
        <div className="bg-white p-1">
          <div className="space-y-10 px-4 py-3">
            {/* Main page with table and <search></search> */}
            <div className="grid grid-cols-[auto_auto_1fr_auto] gap-5">
              {/* settings => filter and search button */}
              <input
                type="search"
                placeholder="Search..."
                className="w-64 min-w-50 rounded-sm bg-gray-100/50 px-4 py-1.5 outline-2 outline-stone-500"
              />

              <div className="flex items-center gap-1">
                <span className="text-lg text-gray-800">Filter </span>
              </div>
              <button className="col-start-4 flex w-fit cursor-pointer items-center gap-2 rounded bg-black px-3 text-white">
                <span>Add</span> <BiPlus size={22} />
              </button>
            </div>
            <div>
              {/* Table */}
              <div className="grid grid-cols-[0.3fr_1fr_1.8fr_1.8fr_0.6fr_1.6fr_1.8fr_0.6fr] grid-rows-[auto] bg-white py-1">
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
              <div className="grid grid-cols-[0.3fr_1fr_1.8fr_1.8fr_0.6fr_1.6fr_1.8fr_0.6fr] py-2">
                {/* Table Row */}
                <div className="px-3 py-2">1</div>
                <div className="h-16 w-16 rounded-full bg-amber-500"></div>
                <div className="px-3 py-2">Olman Gemechu</div>
                <div className="px-3 py-2">Software Engineering</div>
                <div className="px-3 py-2">5</div>
                <div className="px-3 py-2">0977336223</div>

                <div className="px-3 py-2">3.5</div>
                <div className="px-3 py-2">Action</div>
              </div>
              <div className="grid grid-cols-[0.3fr_1fr_1.8fr_1.8fr_0.6fr_1.6fr_1.8fr_0.6fr] py-2">
                {/* Table Row */}
                <div className="px-3 py-2">2</div>
                <div className="h-16 w-16 rounded-full bg-blue-200"></div>
                <div className="px-3 py-2">Nadhii Mebrate</div>
                <div className="px-3 py-2">Electrical Engineering</div>
                <div className="px-3 py-2">5</div>
                <div className="px-3 py-2">0977336273</div>
                <div className="px-3 py-2">3.5</div>
                <div className="px-3 py-2">Action</div>
              </div>
              <div className="grid grid-cols-[0.3fr_1fr_1.8fr_1.8fr_0.6fr_1.6fr_1.8fr_0.6fr] py-2">
                {/* Table Row */}
                <div className="px-3 py-2">3</div>
                <div className="h-16 w-16 rounded-full bg-cyan-800"></div>
                <div className="px-3 py-2">Naol Wendimu</div>
                <div className="px-3 py-2">Civil Engineering</div>
                <div className="px-3 py-2">5</div>
                <div className="px-3 py-2">0967377282</div>

                <div className="px-3 py-2">3.5</div>
                <div className="px-3 py-2">Action</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
