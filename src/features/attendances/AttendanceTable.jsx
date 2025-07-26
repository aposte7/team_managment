import { useContext, useEffect } from "react";
import Spinner from "../../components/Spinners";
import { useMembers } from "../members/useMembers";
import { useSession } from "../sessions/useSession";
import AttendanceRow from "./AttendanceRow";
import { useAttendance } from "./useAttendance";
import { AttendanceContext } from "./Attendance";

function AttendanceTable() {
  const { members, isLoading: membersLoading } = useMembers();
  const { sessions, isLoading: sessionsLoading } = useSession();
  const { attendances, isLoading: attendanceLoading } = useAttendance();
  const { setSessionLength } = useContext(AttendanceContext);

  useEffect(() => {
    setSessionLength(sessions?.length);
  }, [sessions, setSessionLength]);

  if (membersLoading || sessionsLoading || attendanceLoading)
    return <Spinner />;

  const attendanceMap = {};
  attendances.forEach((a) => {
    attendanceMap[a.session_id] ??= {};
    attendanceMap[a.session_id][a.member_id] = {
      id: a.id,
      status: a.status,
    };
  });

  return (
    <table className="min-w-full divide-y divide-gray-200 text-sm">
      <thead className="bg-gray-50">
        <tr>
          <th className="sticky left-0 bg-gray-50 px-4 py-2 text-left font-medium">
            #
          </th>
          <th className="sticky left-[60px] bg-gray-50 px-4 py-2 text-left font-medium">
            Name
          </th>
          {sessions.map((session) => (
            <th key={session.id} className="px-4 py-2 whitespace-nowrap">
              {new Date(session.date).toLocaleDateString()}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y bg-white">
        {members.map((member, idx) => (
          <AttendanceRow
            key={member.id}
            member={member}
            sessions={sessions}
            attendanceMap={attendanceMap}
            row_num={idx + 1}
          />
        ))}
      </tbody>
    </table>
  );
}

export default AttendanceTable;
