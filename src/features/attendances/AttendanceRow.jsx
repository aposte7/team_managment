import { useContext, useState } from "react";
import { AttendanceContext } from "./Attendance";

const STATUS_COLORS = {
  P: "bg-green-100 text-green-700",
  A: "bg-red-100 text-red-700",
  E: "bg-yellow-100 text-yellow-800",
};

function AttendanceRow({ member, sessions, attendanceMap, row_num }) {
  const [editingCell, setEditingCell] = useState(null);
  const { editedStatus, setEditedStatus } = useContext(AttendanceContext);

  return (
    <tr>
      <td className="sticky left-0 bg-white px-4 py-2">{row_num}</td>
      <td className="sticky left-[60px] bg-white px-4 py-2 whitespace-nowrap">
        {member.name}
      </td>

      {sessions.map((session) => {
        const memberId = member.id;
        const sessionId = session.id;

        const attendanceData = attendanceMap?.[sessionId]?.[memberId];
        const attendanceId = attendanceData?.id;

        const original =
          attendanceData?.status ?? session.default_status ?? "A";
        const edited = editedStatus?.[attendanceId];
        const status = edited ?? original;

        const isEditing = editingCell === sessionId;
        const isEdited = edited !== undefined;

        return (
          <td key={sessionId} className="relative px-4 py-2 text-center">
            {isEditing ? (
              <div className="flex justify-center gap-1">
                {["P", "A", "E"].map((s) => (
                  <button
                    key={s}
                    onClick={() => {
                      if (attendanceId) {
                        setEditedStatus((prev) => ({
                          ...prev,
                          [attendanceId]: s,
                        }));
                      }
                      setEditingCell(null);
                    }}
                    className={`rounded px-2 py-1 text-xs font-medium ${STATUS_COLORS[s]}`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            ) : (
              <button
                onClick={() => setEditingCell(sessionId)}
                className={`relative inline-block rounded px-2 py-1 text-xs font-medium ${STATUS_COLORS[status]}`}
              >
                {status}
                {isEdited && (
                  <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-blue-500 ring-1 ring-white" />
                )}
              </button>
            )}
          </td>
        );
      })}
    </tr>
  );
}

export default AttendanceRow;
