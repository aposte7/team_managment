import { useMembers } from "./useMembers";
import MembersRow from "./MembersRow";
import Spinner from "../../components/Spinners";

import Pagination from "../../components/Pagination";

function MembersTable() {
  const { isLoading, members, count } = useMembers();

  if (isLoading) return <Spinner />;
  return (
    <div className="w-full">
      <div className="rounded-lg border border-gray-100 bg-white">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-slate-200 bg-gradient-to-r from-slate-50 to-slate-100">
              <th className="px-4 py-3 text-center font-semibold text-slate-700">
                NO
              </th>
              <th className="px-4 py-3 text-left font-semibold text-slate-700">
                Photo
              </th>
              <th className="px-4 py-3 text-left font-semibold text-slate-700">
                Name
              </th>
              <th className="px-4 py-3 text-left font-semibold text-slate-700">
                Department
              </th>
              <th className="px-4 py-3 text-center font-semibold text-slate-700">
                Year
              </th>
              <th className="px-4 py-3 text-left font-semibold text-slate-700">
                Phone
              </th>
              <th className="px-4 py-3 text-center font-semibold text-slate-700">
                Participation
              </th>
              <th className="px-4 py-3 text-center font-semibold text-slate-700">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {members.map((member, index) => (
              <MembersRow
                member={member}
                rowNumber={index + 1}
                key={`${index}${member.id}`}
              />
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-gradient-to-r from-slate-50 to-slate-100">
              <td colSpan="8" className="px-6 py-2">
                <Pagination count={count} />
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default MembersTable;
