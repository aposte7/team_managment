import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import { useSearchParams } from "react-router";
import { PAGE_SIZE } from "../utils/constants";

function Pagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const pageCount = Math.ceil(count / PAGE_SIZE);

  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;

    searchParams.set("page", next);
    setSearchParams(searchParams);
  }

  function prevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;

    searchParams.set("page", prev);
    setSearchParams(searchParams);
  }
  return (
    <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
      <div className="text-sm text-gray-600">
        Showing page <span className="font-medium">1</span> of{" "}
        <span className="font-medium">14</span>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={prevPage}
          className="flex cursor-pointer items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 disabled:opacity-50"
        >
          <HiArrowNarrowLeft size={16} />
          <span>Previous</span>
        </button>

        <button
          onClick={nextPage}
          className="flex cursor-pointer items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 disabled:opacity-50"
        >
          <span>Next</span>
          <HiArrowNarrowRight size={16} />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
