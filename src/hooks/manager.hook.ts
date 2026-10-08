import { addSubstation, getSubstationOfManager, updateSubstation } from "@/api";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useSubstationOfManager = () => {
  return useQuery({
    queryKey: ["managerSubstation"],
    queryFn: getSubstationOfManager,
  });
};

export const useAddSubstation = () => {
  return useMutation({
    mutationFn: addSubstation,
  });
};

export const useUpdateSubstation = () => {
  return useMutation({
    mutationFn: updateSubstation,
  });
};
