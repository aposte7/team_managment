import { HiOutlineHome, HiOutlineUserGroup } from "react-icons/hi";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import { LuSettings } from "react-icons/lu";
import { RiAdminLine } from "react-icons/ri";
import { NavLink } from "react-router";
import CustomNavLink from "./CustomNavLink";
import { FaRegChartBar } from "react-icons/fa";

const BASE_URL = "admin";

function SideBar() {
  return (
    <aside className="h-full overflow-hidden bg-white">
      <div className="bg-blue-400 p-2 text-center text-[1.6rem] font-semibold text-white">
        Evangelism Team
      </div>

      <div className="space-y-2 px-5 py-10 text-[1.05rem] text-gray-600">
        <CustomNavLink to={`${BASE_URL}/dashboard`}>
          <HiOutlineHome size={23} />
          <span> Home</span>
        </CustomNavLink>

        <CustomNavLink to={`${BASE_URL}/members`}>
          <HiOutlineUserGroup size={23} />
          <span> Members</span>
        </CustomNavLink>
        <CustomNavLink to={`${BASE_URL}/attendance`}>
          <FaRegChartBar size={23} />
          <span> Attendance</span>
        </CustomNavLink>
        <CustomNavLink to={`${BASE_URL}/plans`}>
          <HiOutlineCalendarDays size={23} />
          <span> Plans</span>
        </CustomNavLink>
        <CustomNavLink to={`${BASE_URL}/admins`}>
          <RiAdminLine size={23} />
          <span> Admins</span>
        </CustomNavLink>

        <CustomNavLink to={`${BASE_URL}/settings`}>
          <LuSettings size={23} />
          <span> Settings</span>
        </CustomNavLink>
      </div>
    </aside>
  );
}

export default SideBar;
