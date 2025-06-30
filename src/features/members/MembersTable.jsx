import { HiEllipsisVertical } from "react-icons/hi2";

import Menus from "../../components/Menus";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";

function MembersTable() {
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
            <tr className="border-b border-slate-100 transition-colors hover:bg-slate-50">
              <td className="px-4 py-4 text-center font-medium text-slate-600">
                1
              </td>
              <td className="px-4 py-4 text-center">
                <div className="flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-500 font-semibold text-white">
                    OG
                  </div>
                </div>
              </td>
              <td className="px-4 py-4 font-medium text-slate-900">
                Kiyaa Gemechu
              </td>
              <td className="px-4 py-4 text-slate-700">Software Engineering</td>
              <td className="px-4 py-4 text-center text-slate-600">5</td>
              <td className="px-4 py-4 text-slate-700">0977336223</td>
              <td className="px-4 py-4 text-center">
                <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                  3.5
                </span>
              </td>
              <td className="px-4 py-4 text-center">
                <button className="flex h-8 w-8 items-center justify-center rounded p-0 transition-colors hover:bg-slate-200">
                  <HiEllipsisVertical className="h-4 w-4 text-slate-500" />
                </button>
              </td>
            </tr>
            <tr className="border-b border-slate-100 transition-colors hover:bg-slate-50">
              <td className="px-4 py-4 text-center font-medium text-slate-600">
                2
              </td>
              <td className="px-4 py-4 text-center">
                <div className="flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-500 font-semibold text-white">
                    SL
                  </div>
                </div>
              </td>
              <td className="px-4 py-4 font-medium text-slate-900">
                Simeraa Lenco
              </td>
              <td className="px-4 py-4 text-slate-700">Software Engineering</td>
              <td className="px-4 py-4 text-center text-slate-600">5</td>
              <td className="px-4 py-4 text-slate-700">0977336223</td>
              <td className="px-4 py-4 text-center">
                <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                  3.5
                </span>
              </td>
              <td className="relative px-4 py-4 text-center">
                <button className="flex h-8 w-8 items-center justify-center rounded p-0 transition-colors hover:bg-slate-200">
                  <HiEllipsisVertical className="h-4 w-4 text-slate-500" />
                </button>
                <Menus />
              </td>
            </tr>

            <tr className="border-b border-slate-100 transition-colors hover:bg-slate-50">
              <td className="px-4 py-4 text-center font-medium text-slate-600">
                2
              </td>
              <td className="px-4 py-4 text-center">
                <div className="flex justify-center">
                  <img
                    src="/kk"
                    alt="Nadhii Mebrate"
                    className="h-12 w-12 rounded-full object-cover"
                    onError={(e) => {
                      const target = e.target;
                      target.style.display = "none";
                      const fallback = target.nextElementSibling;
                      if (fallback) fallback.style.display = "flex";
                    }}
                  />
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 font-semibold text-white"
                    style={{ display: "none" }}
                  >
                    NM
                  </div>
                </div>
              </td>
              <td className="px-4 py-4 font-medium text-slate-900">
                Nadhii Mebrate
              </td>
              <td className="px-4 py-4 text-slate-700">
                Electrical Engineering
              </td>
              <td className="px-4 py-4 text-center text-slate-600">5</td>
              <td className="px-4 py-4 text-slate-700">0977336273</td>
              <td className="px-4 py-4 text-center">
                <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                  3.5
                </span>
              </td>
              <td className="relative px-4 py-4 text-center">
                <button className="flex h-8 w-8 items-center justify-center rounded p-0 transition-colors hover:bg-slate-200">
                  <HiEllipsisVertical className="h-4 w-4 text-slate-500" />
                </button>
              </td>
            </tr>

            <tr className="border-b border-slate-100 transition-colors hover:bg-slate-50">
              <td className="px-4 py-4 text-center font-medium text-slate-600">
                3
              </td>
              <td className="px-4 py-4 text-center">
                <div className="flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-600 font-semibold text-white">
                    NW
                  </div>
                </div>
              </td>
              <td className="px-4 py-4 font-medium text-slate-900">
                Naol Wendimu
              </td>
              <td className="px-4 py-4 text-slate-700">Civil Engineering</td>
              <td className="px-4 py-4 text-center text-slate-600">5</td>
              <td className="px-4 py-4 text-slate-700">0967377282</td>
              <td className="px-4 py-4 text-center">
                <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                  3.5
                </span>
              </td>
              <td className="relative px-4 py-4 text-center">
                <button className="flex h-8 w-8 items-center justify-center rounded p-0 transition-colors hover:bg-slate-200">
                  <HiEllipsisVertical className="h-4 w-4 text-slate-500" />
                </button>
              </td>
            </tr>
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
