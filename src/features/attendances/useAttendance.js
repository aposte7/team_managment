import { useQuery } from "@tanstack/react-query";
import { getAttendance } from "../../services/apiAttendance";

function useAttendance() {
  const { data: attendances, isLoading } = useQuery({
    queryFn: getAttendance,
    queryKey: ["attendances"],
  });

  return { attendances, isLoading };
}

export { useAttendance };
