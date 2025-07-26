import Modal from "../components/Modal";
import Spinner from "../components/Spinners";
import { useAttendance } from "../features/attendances/useAttendance";
import { useMembers } from "../features/members/useMembers";
import CreateSession from "../features/sessions/createSession";
import { useSession } from "../features/sessions/useSession";

const STATUS_OPTIONS = ["P", "A", "E"];
const STATUS_COLORS = {
  present: "bg-green-100 text-green-700",
  absent: "bg-red-100 text-red-700",
  E: "bg-yellow-100 text-yellow-800",
};

export default function AttendancePage() {
  const { members, isLoading: membersLoading } = useMembers();
  const { sessions, isLoading: sessionsLoading } = useSession();
  const { attendances, isLoading: attendanceLoading } = useAttendance();

  if (membersLoading || sessionsLoading || attendanceLoading)
    return <Spinner />;

  // Build attendance map: session_id => { member_id: status }
  const attendanceMap = {};
  attendances.forEach((a) => {
    if (!attendanceMap[a.session_id]) attendanceMap[a.session_id] = {};
    attendanceMap[a.session_id][a.member_id] = a.status;
  });

  return (
    <div className="min-h-screen bg-white p-4">
      <Modal>
        <div className="mb-4 flex items-center justify-between">
          <h1 className="text-xl font-semibold text-gray-800">Attendance</h1>
          <div className="space-x-5">
            <span className="text-sm text-gray-600">
              Sessions: <strong>{sessions.length}</strong>
            </span>
            <Modal.Open name="create-session">
              <button className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-blue-700">
                + Add Session
              </button>
            </Modal.Open>

            <Modal.View title="Add Session" name="create-session">
              <CreateSession />
            </Modal.View>
          </div>
        </div>
      </Modal>

      <div className="overflow-x-auto rounded border border-gray-200 shadow">
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
              <tr key={session.id}>
                <td className="sticky left-0 bg-white px-4 py-2">{idx + 1}</td>
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
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
