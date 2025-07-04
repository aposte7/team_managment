import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editMember } from "../../services/apiMembers";

export function useEditMember() {
  const queryClient = useQueryClient();
  const { isLoading: isEditing, mutate: editMemberMutation } = useMutation({
    mutationFn: editMember,
    onSuccess: () => {
      //   toast.success("Cabin successfully edited");
      console.log("successfully edited");
      queryClient.invalidateQueries({ queryKey: ["members"] });
    },
    onError: (err) => console.error(err.message),
  });

  return { isEditing, editMemberMutation };
}
