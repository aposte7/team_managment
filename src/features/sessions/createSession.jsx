import { useForm } from "react-hook-form";
import { useCreateSession } from "./useCreateSession";

const STATUS_OPTIONS = [
  { value: "P", label: "Present" },
  { value: "A", label: "Absent" },
  { value: "E", label: "Excused" },
];

export default function CreateSession({ closeModal }) {
  const { reset, handleSubmit, register } = useForm();
  const { isCreating, createSessionMutation } = useCreateSession();

  function onSubmit(data) {
    const date = new Date(`${data.date}T00:00:00`).toISOString();

    data = { ...data, date };
    console.log(data);
    createSessionMutation(data, {
      onSuccess: () => {
        reset();
        closeModal();
      },
    });
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto w-md space-y-4 rounded-lg bg-white p-4 shadow"
    >
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Date <span className="text-red-500">*</span>
        </label>
        <input
          type="date"
          {...register("date")}
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
          {...register("title")}
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
          {...register("description")}
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
          {...register("default_status")}
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
