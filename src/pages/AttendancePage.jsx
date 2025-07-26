import Modal from "../components/Modal";
import Spinner from "../components/Spinners";
import AttendanceTable from "../features/attendances/AttendanceTable";
import CreateSession from "../features/sessions/createSession";
import { useSession } from "../features/sessions/useSession";

export default function AttendancePage() {
  const { sessions, isLoading: sessionsLoading } = useSession();

  if (sessionsLoading) return <Spinner />;
  return (
    <div className="min-h-screen bg-white p-4">
      <Modal>
        <div className="mb-4 flex items-center justify-between">
          <h1 className="text-xl font-semibold text-gray-800">Attendance</h1>
          <div className="space-x-5">
            <span className="text-sm text-gray-600">
              Sessions: <strong>{sessions.length}</strong>
            </span>
            <Modal.Open name="create-session">
              <button className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-blue-700">
                + Add Session
              </button>
            </Modal.Open>

            <Modal.View title="Add Session" name="create-session">
              <CreateSession />
            </Modal.View>
          </div>
        </div>
      </Modal>

      <div className="overflow-x-auto rounded border border-gray-200 shadow">
        <AttendanceTable />
      </div>
    </div>
  );
}
