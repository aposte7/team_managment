import { BiPlus } from "react-icons/bi";
import MembersTable from "../features/members/MembersTable";

function MembersPage() {
  return (
    <div className="space-y-10 bg-white p-1 px-4 py-3">
      {/* Main page with table and <search></search> */}
      <header className="grid grid-cols-[auto_auto_1fr_auto] gap-5">
        {/* settings => filter and search button */}
        <input
          type="search"
          placeholder="Search..."
          className="w-64 min-w-50 rounded-sm bg-gray-100/50 px-4 py-1.5 outline-2 outline-stone-500"
        />

        <div className="flex items-center gap-1">
          <span className="text-lg text-gray-800">Filter </span>
        </div>
        <button className="col-start-4 flex w-fit cursor-pointer items-center gap-2 rounded bg-black px-3 text-white">
          <span>Add</span> <BiPlus size={22} />
        </button>
      </header>

      <MembersTable />
    </div>
  );
}

export default MembersPage;
