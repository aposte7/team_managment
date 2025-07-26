const STATUS_COLORS = {
  present: "bg-green-100 text-green-700",
  absent: "bg-red-100 text-red-700",
  E: "bg-yellow-100 text-yellow-800",
};
function AttendanceRow({ session, attendanceMap, members, row_num }) {
  return (
    <tr>
      <td className="sticky left-0 bg-white px-4 py-2">{row_num}</td>
      <td className="sticky left-[60px] bg-white px-4 py-2 whitespace-nowrap">
        {new Date(session.date).toLocaleDateString()}
      </td>
      {members.map((member) => {
        const status =
          attendanceMap[session.id]?.[member.id] ||
          session.default_status ||
          "A";
        return (
          <td key={member.id} className="px-4 py-2 text-center">
            <span
              className={`inline-block rounded px-2 py-1 text-xs font-medium ${
                STATUS_COLORS[status] || STATUS_COLORS["A"]
              }`}
            >
              {status}
            </span>
          </td>
        );
      })}
    </tr>
  );
}

export default AttendanceRow;
