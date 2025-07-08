import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router";
import { createComment as createCommentApi } from "../../services/apiComments";

export function useCreateComment() {
  const queryClient = useQueryClient();
  const { memberId } = useParams();

  const { mutate: createComment, isLoading: isCreating } = useMutation({
    mutationFn: createCommentApi,

    onSuccess: () => {
      //   toast.success("New member successfully created");
      queryClient.invalidateQueries({ queryKey: ["comments", memberId] });
    },
    onError: (err) => {
      console.log("error from useCreateComment", err);
    },
  });

  return { createComment, isCreating };
}
