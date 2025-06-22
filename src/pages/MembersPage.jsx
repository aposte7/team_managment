import { BiPlus } from "react-icons/bi";
import MembersTable from "../features/members/MembersTable";
import TableOperation from "../components/TableOperation";

function MembersPage() {
  return (
    <div className="space-y-10 bg-white p-1 px-4 py-3">
      {/* Main page with table and <search></search> */}
      <TableOperation />

      <MembersTable />
    </div>
  );
}

export default MembersPage;
