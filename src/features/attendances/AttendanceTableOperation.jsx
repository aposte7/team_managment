import { useContext } from "react";
import { AttendanceContext } from "./Attendance";
import Modal from "../../components/Modal";
import CreateSession from "../sessions/CreateSession";

function AttendanceTableOperation() {
  const { editedStatus, setEditedStatus, sessionLength } =
    useContext(AttendanceContext);

  const hasChanges = editedStatus.length > 0;

  const handleCancel = () => {
    const confirmReset = window.confirm("Discard all unsaved changes?");
    if (confirmReset) {
      setEditedStatus([]);
    }
  };

  return (
    <Modal>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div className="inline-flex h-fit items-center space-x-4">
          <h1 className="text-xl font-semibold text-gray-800">Attendance</h1>
          <span className="text text-gray-600">
            Sessions: <strong>{sessionLength}</strong>
          </span>
        </div>

        <div className="flex items-center space-x-3">
          {hasChanges && (
            <>
              <span className="rounded bg-yellow-100 px-2 py-1 text-xs text-yellow-800">
                Unsaved changes: {editedStatus.length}
              </span>

              <button
                className="rounded bg-gray-300 px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-400"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </>
          )}

          <button
            disabled={!hasChanges}
            className={`rounded px-3 py-1.5 text-sm font-medium transition ${
              hasChanges
                ? "bg-cyan-500 text-white hover:bg-cyan-600"
                : "cursor-not-allowed bg-gray-200 text-gray-500"
            }`}
            onClick={() => console.log("TODO: handle update")}
          >
            {hasChanges ? "Save Changes" : "No Changes"}
          </button>

          <Modal.Open name="create-session">
            <button className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-blue-700">
              + Add Session
            </button>
          </Modal.Open>
        </div>
      </div>

      <Modal.View title="Add Session" name="create-session">
        <CreateSession />
      </Modal.View>
    </Modal>
  );
}

export default AttendanceTableOperation;
