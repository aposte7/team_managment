function CommentCard() {
  return (
    <div className="max-w-[50rem] rounded-lg border border-gray-300 bg-white px-4 py-3 shadow-sm">
      <div className="flex items-start justify-between text-gray-700">
        <div>
          <p className="text-base font-semibold">Title of Comment</p>
          <p className="text-sm text-gray-500">Subtitle content</p>
        </div>
        <p className="text-xs whitespace-nowrap text-gray-400">
          Last updated: 12-02-2025
        </p>
      </div>

      <p className="comment mt-3 max-h-11 w-full overflow-clip text-sm text-ellipsis text-gray-800">
        It includes a comprehensive collection of prebuilt components ready for
        use in production and customizable to match your design system. use in
        production and customizable to match your design system. use in
        production and customizable to match your design system.
      </p>

      <div className="mt-4 flex items-center justify-between text-sm">
        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
          #UI
        </span>
        <button className="rounded-md border border-gray-300 px-3 py-1 text-sm text-gray-700 hover:bg-gray-100">
          Edit
        </button>
      </div>
    </div>
  );
}

export default CommentCard;
