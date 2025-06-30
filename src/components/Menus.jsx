function Menus() {
  return (
    <div className="absolute top-13 left-1/2 z-10 w-32 -translate-x-1/2 rounded bg-white py-3 text-base shadow">
      <button className="w-full px-4 py-1.5 text-start hover:bg-gray-100">
        Duplicate
      </button>
      <button className="w-full px-4 py-1.5 text-start hover:bg-gray-100">
        Edit
      </button>
      <button className="w-full px-4 py-1.5 text-start hover:bg-gray-100">
        Delete
      </button>
    </div>
  );
}

export default Menus;
