import Attendance from "../features/attendances/Attendance";
import AttendanceTable from "../features/attendances/AttendanceTable";
import AttendanceTableOperation from "../features/attendances/AttendanceTableOperation";

export default function AttendancePage() {
  return (
    <Attendance>
      <div className="min-h-screen bg-white p-4">
        <AttendanceTableOperation />

        <div className="overflow-x-auto rounded border border-gray-200 shadow">
          <AttendanceTable />
        </div>
      </div>
    </Attendance>
  );
}
