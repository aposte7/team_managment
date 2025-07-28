import { useContext, useState, useEffect, useRef } from "react";
import { AttendanceContext } from "./Attendance";

const STATUS_COLORS = {
  P: "bg-green-100 text-green-700",
  A: "bg-red-100 text-red-700",
  E: "bg-yellow-100 text-yellow-800",
};

function AttendanceRow({ member, sessions, attendanceMap, row_num }) {
  const [editingCell, setEditingCell] = useState(null);
  const { editedStatus, setEditedStatus } = useContext(AttendanceContext);
  const editingRef = useRef(null);

  // Close editing when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (editingRef.current && !editingRef.current.contains(e.target)) {
        setEditingCell(null);
      }
    };
    if (editingCell !== null) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [editingCell]);

  return (
    <tr>
      <td className="sticky left-0 z-10 bg-white px-4 py-2">{row_num}</td>
      <td className="sticky left-[40px] z-10 bg-white px-4 py-2 whitespace-nowrap">
        {member.name}
      </td>

      {sessions.map((session) => {
        const memberId = member.id;
        const sessionId = session.id;

        const attendanceData = attendanceMap?.[sessionId]?.[memberId];
        const attendanceId = attendanceData?.id;

        const originalStatus =
          attendanceData?.status ?? session.default_status ?? "A";
        const edited = editedStatus?.map((ss) => {
          if (ss.attendanceId == attendanceId) return ss.status;
        })[0];
        const currentStatus = edited ?? originalStatus;

        const isEditing = editingCell === sessionId;
        const isEdited = edited !== undefined;

        return (
          <td
            key={sessionId}
            className={`relative px-4 py-2 text-center transition-all duration-150 ${
              isEditing ? "ring-2 ring-blue-400" : ""
            }`}
          >
            {!attendanceId ? (
              <span className="text-xs text-gray-400 italic">N/A</span>
            ) : isEditing ? (
              <div
                ref={editingRef}
                className="flex items-center justify-center gap-1"
              >
                {["P", "A", "E"].map((s) => (
                  <button
                    key={s}
                    aria-label={`Set status to ${s}`}
                    onClick={() => {
                      setEditedStatus((prev) => [
                        ...prev,
                        {
                          attendanceId,
                          status: s,
                        },
                      ]);
                      setEditingCell(null);
                    }}
                    className={`rounded px-2 py-1 text-xs font-medium ${STATUS_COLORS[s]} transition hover:brightness-95`}
                  >
                    {s}
                  </button>
                ))}
                <button
                  aria-label="Cancel edit"
                  onClick={() => setEditingCell(null)}
                  className="ml-1 text-sm text-gray-400 hover:text-gray-600"
                  title="Cancel"
                >
                  ✖
                </button>
              </div>
            ) : (
              <button
                onClick={() => setEditingCell(sessionId)}
                className={`relative inline-block rounded px-2 py-1 text-xs font-medium ${STATUS_COLORS[currentStatus]} transition hover:brightness-95`}
                aria-label={`Attendance status: ${currentStatus}, click to edit`}
              >
                {currentStatus}
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
