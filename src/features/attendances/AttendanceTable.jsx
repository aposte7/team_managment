import Spinner from "../../components/Spinners";
import { useMembers } from "../members/useMembers";
import { useSession } from "../sessions/useSession";
import AttendanceRow from "./AttendanceRow";
import { useAttendance } from "./useAttendance";

function AttendanceTable() {
  const { members, isLoading: membersLoading } = useMembers();
  const { sessions, isLoading: sessionsLoading } = useSession();
  const { attendances, isLoading: attendanceLoading } = useAttendance();

  if (membersLoading || sessionsLoading || attendanceLoading)
    return <Spinner />;

  const attendanceMap = {};
  attendances.forEach((a) => {
    if (!attendanceMap[a.session_id]) attendanceMap[a.session_id] = {};
    attendanceMap[a.session_id][a.member_id] = a.status;
  });

  return (
    <table className="min-w-full divide-y divide-gray-200 text-sm">
      <thead className="bg-gray-50">
        <tr>
          <th className="sticky left-0 bg-gray-50 px-4 py-2 text-left font-medium">
            #
          </th>
          <th className="sticky left-[60px] bg-gray-50 px-4 py-2 text-left font-medium">
            Date
          </th>
          {members.map((member) => (
            <th key={member.id} className="px-4 py-2 whitespace-nowrap">
              {member.name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y bg-white">
        {sessions.map((session, idx) => (
          <AttendanceRow
            key={session.id}
            session={session}
            attendanceMap={attendanceMap}
            members={members}
            row_num={idx + 1}
          />
        ))}
      </tbody>
    </table>
  );
}

export default AttendanceTable;
