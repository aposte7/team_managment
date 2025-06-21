import { HiOutlineHome, HiOutlineUserGroup } from "react-icons/hi";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import { LuSettings } from "react-icons/lu";
import { RiAdminLine } from "react-icons/ri";

function App() {
  return (
    <div className="grid h-dvh grid-cols-[17rem_1fr] bg-amber-200">
      <aside className="bg-white">
        <div className="bg-blue-400 p-2 text-center text-[1.6rem] font-semibold text-white">
          Evangelism Team
        </div>

        <div className="h-full space-y-2 px-5 py-10 text-[1.1rem] text-gray-600">
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
      <div className="bg-stone-100 px-5 pt-4">
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
      </div>
    </div>
  );
}

export default App;
