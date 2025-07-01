import React, { useState } from "react";
import { HiEllipsisVertical } from "react-icons/hi2";
import Menus from "../../components/Menus";

const MembersRow = ({ member, rowNumber }) => {
  const [showMenu, setShowMenu] = useState(false);

  const getInitials = (name) => {
    if (!name) return "";
    const parts = name.trim().split(" ");
    if (parts.length === 1) return parts[0][0]?.toUpperCase() || "";
    return (parts[0][0] + parts[1][0]).toUpperCase();
  };

  return (
    <>
      <tr className="transition-colors hover:bg-gray-50">
        <td className="px-6 py-4 text-center whitespace-nowrap">
          <div className="text-sm font-medium text-gray-900">{rowNumber}</div>
        </td>

        <td className="px-6 py-4 whitespace-nowrap">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-orange-600">
            {member.profilePicture ? (
              <img
                src={member.profilePicture}
                alt={`${member.name}'s profile`}
                className="h-10 w-10 rounded-full object-cover"
              />
            ) : (
              <span className="text-sm font-medium text-white">
                {getInitials(member.name)}
              </span>
            )}
          </div>
        </td>

        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm font-medium text-gray-900">{member.name}</div>
        </td>

        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-600">{member.department}</div>
        </td>

        <td className="px-6 py-4 text-center whitespace-nowrap">
          <div className="text-sm text-gray-600">{member.academicYear}</div>
        </td>

        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-600">{member.phoneNumber}</div>
        </td>

        <td className="px-6 py-4 text-center whitespace-nowrap">
          <span className="inline-flex rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-800">
            3.5 GPA
          </span>
        </td>

        <td className="px-6 py-4 text-center whitespace-nowrap">
          <div className="relative">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="rounded-md p-2 transition-colors hover:bg-gray-100"
            >
              <HiEllipsisVertical className="h-4 w-4 text-gray-500" />
            </button>

            {showMenu && <Menus setShowMenu={setShowMenu} />}
          </div>
        </td>
      </tr>
    </>
  );
};

export default MembersRow;
