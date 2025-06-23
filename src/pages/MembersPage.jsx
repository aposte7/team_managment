import { BiPlus } from "react-icons/bi";
import MembersTable from "../features/members/MembersTable";
import TableOperation from "../components/TableOperation";

function MembersPage() {
  return (
    <div className="h-fit space-y-10 bg-white p-4">
      {/* Main page with table and <search></search> */}
      <TableOperation />

      <MembersTable />
    </div>
  );
}

export default MembersPage;
