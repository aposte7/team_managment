import { useQuery } from "@tanstack/react-query";
import {} from "../../services/apiAttendance";
import { getSession } from "../../services/apiSession";

export function useSession() {
  const { data: sessions, isLoading } = useQuery({
    queryFn: getSession,
    queryKey: ["session"],
  });

  return { sessions, isLoading };
}
