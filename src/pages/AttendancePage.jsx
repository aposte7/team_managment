import Spinner from "../components/Spinners";
import { useAttendance } from "../features/attendances/useAttendance";

const STATUS_OPTIONS = ["P", "A", "E"];
const STATUS_COLORS = {
  present: "bg-green-100 text-green-700",
  absent: "bg-red-100 text-red-700",
  E: "bg-yellow-100 text-yellow-800",
};

export default function AttendancePage() {
  const { attendances, isLoading } = useAttendance();

  if (isLoading) return <Spinner />;

  const sessionDates = [...new Set(attendances.map((a) => a.session?.date))];

  const grouped = {};
  attendances.forEach((a) => {
    const memberId = a.member_id;
    if (!grouped[memberId]) {
      grouped[memberId] = {
        member: a.members,
        records: {},
      };
    }
    grouped[memberId].records[a.session?.date] = a.status;
  });

  const memberList = Object.values(grouped);

  return (
    <div className="min-h-screen bg-white p-4">
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-xl font-semibold text-gray-800">Attendance</h1>
        <div className="space-x-5">
          <span className="text-sm text-gray-600">
            Sessions: <strong>{sessionDates.length}</strong>
          </span>
          <button
            className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-blue-700"
            onClick={() => {}}
          >
            + Add Session
          </button>
        </div>
      </div>

      <div className="overflow-x-auto rounded border border-gray-200 shadow">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="sticky left-0 bg-gray-50 px-4 py-2 text-left font-medium">
                No
              </th>
              <th className="sticky left-[60px] bg-gray-50 px-4 py-2 text-left font-medium">
                Name
              </th>
              {sessionDates.map((date) => (
                <th key={date} className="px-4 py-2 whitespace-nowrap">
                  {date}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y bg-white">
            {memberList.map(({ member, records }, idx) => (
              <tr key={member.id}>
                <td className="sticky left-0 bg-white px-4 py-2">{idx + 1}</td>
                <td className="sticky left-[60px] bg-white px-4 py-2 whitespace-nowrap">
                  {member.name}
                </td>
                {sessionDates.map((date) => (
                  <td key={date} className="px-4 py-2">
                    <span
                      className={`inline-block rounded px-2 py-1 text-xs font-medium ${
                        STATUS_COLORS[records[date] || "A"]
                      }`}
                    >
                      {records[date] || "A"}
                    </span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
