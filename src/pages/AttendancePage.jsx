import { useMembers } from "../features/members/useMembers";
import Spinner from "../components/Spinners";

const STATUS_OPTIONS = ["P", "A", "E"];
const STATUS_COLORS = {
  P: "bg-green-100 text-green-700",
  A: "bg-red-100 text-red-700",
  E: "bg-yellow-100 text-yellow-800",
};

const dates = Array.from(
  { length: 20 },
  (_, i) => `12/${String(i + 1).padStart(2, "0")}/25`,
);

export default function AttendancePage() {
  const { members, isLoading } = useMembers();

  if (isLoading) return <Spinner />;
  console.log(members);
  return (
    <div className="min-h-screen bg-white p-4">
      {/* Header */}
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <h1 className="text-xl font-semibold text-gray-800">Attendance</h1>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">
            Sessions: <strong>{dates.length}</strong>
          </span>
          <button
            className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-blue-700"
            onClick={() => {
              // Placeholder: Replace this with modal or date picker logic
              const nextSession = `12/${String(dates.length + 1).padStart(2, "0")}/25`;
              if (!dates.includes(nextSession)) {
                dates.push(nextSession); // Not reactive; see note below
                // To make it reactive, use useState for `dates`
                window.location.reload(); // Temporary re-render hack
              }
            }}
          >
            + Add Session
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-sm border border-gray-300 bg-white shadow">
        <div className="overflow-x-auto">
          <table className="min-w-max divide-y divide-gray-200 text-sm">
            <thead className="bg-slate-100 text-gray-700">
              <tr>
                <th className="sticky left-0 z-20 bg-slate-100 px-4 py-2 text-left font-semibold">
                  No
                </th>
                <th className="sticky left-[51px] z-20 bg-slate-100 px-4 py-2 text-left font-semibold">
                  Name
                </th>
                {dates.map((date) => (
                  <th
                    key={date}
                    className="px-4 py-2 text-left font-semibold whitespace-nowrap"
                  >
                    {date}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 bg-white">
              {members.map((member, idx) => (
                <tr className="hover:bg-slate-50" key={member.id || idx}>
                  <td className="sticky left-0 z-10 bg-white px-4 py-2">
                    {idx + 1}
                  </td>
                  <td className="sticky left-[51px] z-10 bg-white px-4 py-2 whitespace-nowrap">
                    {member.name}
                  </td>
                  {dates.map((date) => (
                    <td key={date} className="min-w-[100px] px-4 py-2">
                      <button className="rounded bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
                        Set
                      </button>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
