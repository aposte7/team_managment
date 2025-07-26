import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createSession } from "../../services/apiSession";

export function useCreateSession() {
  const queryClient = useQueryClient();

  const { mutate: createSessionMutation, isLoading: isCreating } = useMutation({
    mutationFn: createSession,
    onSuccess: () => {
      //   toast.success("New member successfully created");
      queryClient.invalidateQueries({ queryKey: ["attendance"] });
      queryClient.invalidateQueries({ queryKey: ["session"] });
    },
    onError: (err) => {
      console.log("error from useCreateSession", err);
    },
  });

  return { isCreating, createSessionMutation };
}
