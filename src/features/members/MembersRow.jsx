import { HiEllipsisVertical } from "react-icons/hi2";

function MembersRow({ member }) {
  // Get initials from member.name
  const getInitials = (name) => {
    if (!name) return "";
    const parts = name.trim().split(" ");
    if (parts.length === 1) return parts[0][0]?.toUpperCase() || "";
    return (parts[0][0] + parts[1][0]).toUpperCase();
  };

  return (
    <tr className="border-b border-slate-100 transition-colors hover:bg-slate-50">
      <td className="px-4 py-4 text-center font-medium text-slate-600">1</td>
      <td className="px-4 py-4 text-center">
        <div className="flex justify-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-500 font-semibold text-white">
            {getInitials(member.name)}
          </div>
        </div>
      </td>
      <td className="px-4 py-4 font-medium text-slate-900">{member.name}</td>
      <td className="px-4 py-4 text-slate-700">{member.department}</td>
      <td className="px-4 py-4 text-center text-slate-600">
        {member.academicYear}
      </td>
      <td className="px-4 py-4 text-slate-700">{member.phoneNumber}</td>
      <td className="px-4 py-4 text-center">
        <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
          3.5
        </span>
      </td>
      <td className="px-4 py-4 text-center">
        <button className="flex h-8 w-8 items-center justify-center rounded p-0 transition-colors hover:bg-slate-200">
          <HiEllipsisVertical className="h-4 w-4 text-slate-500" />
        </button>
      </td>
    </tr>
  );
}

export default MembersRow;
