import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateAttendance as updateAttendanceApi } from "../../services/apiAttendance";

export function useUpdateAttendance() {
  const queryClient = useQueryClient();

  const { mutate: updateAttendanceMutation, isLoading: isUpdating } =
    useMutation({
      mutationFn: (data) => updateAttendanceApi(data),
      onSuccess: () => {
        //   toast.success("New member successfully created");
        queryClient.invalidateQueries({ queryKey: ["attendance"] });
      },
      onError: (err) => {
        console.log("error from useCreateMember", err);
      },
    });

  return { updateAttendanceMutation, isUpdating };
}
