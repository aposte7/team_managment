import { createContext, useState } from "react";

export const AttendanceContext = createContext();

function Attendance({ children }) {
  const [editedStatus, setEditedStatus] = useState([]);
  const [sessionLength, setSessionLength] = useState("");
  return (
    <AttendanceContext.Provider
      value={{ editedStatus, setEditedStatus, sessionLength, setSessionLength }}
    >
      {children}
    </AttendanceContext.Provider>
  );
}

export default Attendance;
