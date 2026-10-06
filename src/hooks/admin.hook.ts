import { addPowerAuthority, allUsers } from "@/api";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useAllUsersForAdmin = (value: string) => {
  return useQuery({
    queryKey: ["allUsersForAdmin"],
    queryFn: () => allUsers(value),
  });
};

export const useAddPowerAuthority = () => {
  return useMutation({
    mutationFn: addPowerAuthority,
  });
};
