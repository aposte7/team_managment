import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { getComment } from "../../services/apiComments";

export function useComments() {
  const { memberId } = useParams();

  const {
    isLoading,
    data: comments,
    error,
  } = useQuery({
    queryKey: ["comments", memberId],
    queryFn: () => getComment(memberId),
    retry: 3,
  });

  return { isLoading, error, comments };
}
