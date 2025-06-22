import { HiOutlineHome, HiOutlineUserGroup } from "react-icons/hi";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import { LuSettings } from "react-icons/lu";
import { RiAdminLine } from "react-icons/ri";
import { NavLink } from "react-router";

function SideBar() {
  return (
    <aside className="h-full overflow-hidden bg-white">
      <div className="bg-blue-400 p-2 text-center text-[1.6rem] font-semibold text-white">
        Evangelism Team
      </div>

      <div className="space-y-2 px-5 py-10 text-[1.05rem] text-gray-600">
        <NavLink
          to="/"
          className="flex items-center gap-3 rounded-md bg-stone-100 px-6 py-3"
        >
          <HiOutlineHome size={23} />
          <span> Home</span>
        </NavLink>
        <NavLink
          to="/members"
          className="flex items-center gap-3 rounded-md px-6 py-3 hover:bg-stone-100 hover:text-gray-800"
        >
          <HiOutlineUserGroup size={23} />
          <span> Members</span>
        </NavLink>
        <NavLink
          to="/plans"
          className="flex items-center gap-3 rounded-md px-6 py-3 hover:bg-stone-100 hover:text-gray-800"
        >
          <HiOutlineCalendarDays size={23} />
          <span> Plans</span>
        </NavLink>
        <NavLink
          to="/admins"
          className="flex items-center gap-3 rounded px-6 py-3 hover:bg-stone-100 hover:text-gray-800"
        >
          <RiAdminLine size={23} />
          <span> Admins</span>
        </NavLink>

        <NavLink
          to="settings"
          className="flex items-center gap-3 rounded-md px-6 py-3 hover:bg-stone-100 hover:text-gray-800"
        >
          <LuSettings size={23} />
          <span> Settings</span>
        </NavLink>
      </div>
    </aside>
  );
}

export default SideBar;
