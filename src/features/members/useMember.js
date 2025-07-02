import { useQuery } from "@tanstack/react-query";
import { getMember } from "../../services/apiMembers";
import { useParams } from "react-router";

export function useMember() {
  const { memberId } = useParams();

  const {
    isLoading,
    data: member,
    error,
  } = useQuery({
    queryKey: ["member", memberId],
    queryFn: () => getMember(memberId),
    retry: false,
  });

  return { isLoading, error, member };
}
