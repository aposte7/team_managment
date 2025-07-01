import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import { useMembers } from "./useMembers";
import MembersRow from "./MembersRow";
import Spinner from "../../components/Spinners";

function MembersTable() {
  const { isLoading, members } = useMembers();

  if (isLoading) return <Spinner />;
  return (
    <div className="w-full">
      <div className="rounded-lg border border-gray-100 bg-white">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-slate-200 bg-gradient-to-r from-slate-50 to-slate-100">
              <th className="w-16 px-4 py-3 text-center font-semibold text-slate-700">
                NO
              </th>
              <th className="w-32 px-4 py-3 text-center font-semibold text-slate-700">
                Photo
              </th>
              <th className="px-4 py-3 text-left font-semibold text-slate-700">
                Name
              </th>
              <th className="w-56 px-4 py-3 text-left font-semibold text-slate-700">
                Department
              </th>
              <th className="w-20 px-4 py-3 text-center font-semibold text-slate-700">
                Year
              </th>
              <th className="px-4 py-3 text-left font-semibold text-slate-700">
                Phone
              </th>
              <th className="px-4 py-3 text-center font-semibold text-slate-700">
                Participation
              </th>
              <th className="w-16 px-4 py-3 text-center font-semibold text-slate-700">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {members.map((member, index) => (
              <MembersRow member={member} key={`${index}${member.id}`} />
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-gradient-to-r from-slate-50 to-slate-100">
              <td className="px-4" colSpan="2">
                Page 1 / 14
              </td>
              <td colSpan="3"></td>

              <td className="px-4 py-2" colSpan="3">
                <div className="flex justify-end gap-5 text-white">
                  <button className="flex items-center gap-2 rounded-md bg-blue-500 px-3 py-2">
                    <FaLessThan /> <span>Previous</span>
                  </button>
                  <button className="flex items-center gap-2 rounded-md bg-blue-500 px-3 py-2">
                    <span>Next</span> <FaGreaterThan />
                  </button>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default MembersTable;
