import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getMembers } from "../../services/apiMembers";
import { useSearchParams } from "react-router";
import { PAGE_SIZE } from "../../utils/constants";

export function useMembers() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  const page = parseInt(searchParams.get("page")) || 1;

  const {
    isLoading,
    data: { data: members, count } = {},
    error,
  } = useQuery({
    queryKey: ["members", page],
    queryFn: () => getMembers({ page }),
  });

  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["members", page + 1],
      queryFn: () => getMembers({ page: page + 1 }),
    });

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["members", page - 1],
      queryFn: () => getMembers({ page: page - 1 }),
    });
  return { isLoading, error, members, count };
}
