import { getAllFeeders, updateProfile } from "@/api/profile.api";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useProfileUpdate = () => {
  return useMutation({
    mutationFn: updateProfile,
  });
};

export const useAllFeeders = () => {
  return useQuery({
    queryKey: ["feeders"],
    queryFn: getAllFeeders,
  });
};
