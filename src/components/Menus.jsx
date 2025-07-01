function Menus({ setShowMenu }) {
  return (
    <>
      <div className="fixed inset-0 z-10" onClick={() => setShowMenu(false)} />
      <div className="absolute right-0 z-20 mt-2 w-48 rounded-md border border-gray-200 bg-white shadow-lg">
        <div className="py-1">
          <button className="flex w-full items-center gap-2 px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50">
            Edit Member
          </button>
          <button className="flex w-full items-center gap-2 px-4 py-2 text-sm text-red-600 transition-colors hover:bg-gray-50">
            Delete Member
          </button>
        </div>
      </div>
    </>
  );
}

export default Menus;
