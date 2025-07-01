import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createMember } from "../../services/apiMembers";

export function useCreateMember() {
  const queryClient = useQueryClient();

  const { mutate: createMemberMutation, isLoading: isCreating } = useMutation({
    mutationFn: createMember,
    onSuccess: () => {
      //   toast.success("New member successfully created");
      queryClient.invalidateQueries({ queryKey: ["members"] });
    },
    onError: (err) => {
      console.log("error from useCreateMember", err);
    },
  });

  return { isCreating, createMemberMutation };
}
