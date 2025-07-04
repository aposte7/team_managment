import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteMember as deleteMemberApi } from "../../services/apiMembers";

export function useDeleteMember() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteMember } = useMutation({
    mutationFn: deleteMemberApi,
    onSuccess: () => {
      //   toast.success("Cabin successfully deleted");

      queryClient.invalidateQueries({
        queryKey: ["members"],
      });
    },
  });

  return { isDeleting, deleteMember };
}
