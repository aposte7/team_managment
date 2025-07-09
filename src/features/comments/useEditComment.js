import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editComment as editCommentApi } from "../../services/apiComments";
import { useParams } from "react-router";

export function useEditComment() {
  const queryClient = useQueryClient();
  const { memberId } = useParams();

  const { mutate: editComment, isLoading: isEditing } = useMutation({
    mutationFn: editCommentApi,
    onSuccess: () => {
      //   toast.success("New member successfully created");
      queryClient.invalidateQueries({ queryKey: ["comments", memberId] });
    },
    onError: (err) => {
      console.log("error from useCreateComment", err);
    },
  });

  return { editComment, isEditing };
}
