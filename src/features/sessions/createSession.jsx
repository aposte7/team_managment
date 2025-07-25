const STATUS_OPTIONS = [
  { value: "P", label: "Present" },
  { value: "A", label: "Absent" },
  { value: "E", label: "Excused" },
];

export default function CreateSession() {
  return (
    <form className="mx-auto w-full max-w-md space-y-4 rounded-lg border bg-white p-4 shadow">
      <h2 className="text-lg font-semibold text-gray-800">
        Create New Session
      </h2>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Date <span className="text-red-500">*</span>
        </label>
        <input
          type="date"
          name="date"
          className="w-full rounded border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Title <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="title"
          placeholder="e.g. Week 1 Lecture"
          className="w-full rounded border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          name="description"
          placeholder="Optional session notes..."
          className="w-full rounded border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500"
          rows={3}
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Default Attendance Status
        </label>
        <select
          name="status"
          className="w-full rounded border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          {STATUS_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="w-full rounded bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700"
      >
        Add Session
      </button>
    </form>
  );
}
