import {
  getAllFeeders,
  updateProfile,
  uploadProfilePhoto,
} from "@/api/profile.api";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useProfileUpdate = () => {
  return useMutation({
    mutationFn: updateProfile,
  });
};

export const useAllFeeders = (payload: string, managerId: string) => {
  return useQuery({
    queryKey: ["area-feeder", payload],
    queryFn: () => getAllFeeders(payload, managerId),
  });
};

export const useProfilePhoto = () => {
  return useMutation({
    mutationFn: uploadProfilePhoto,
  });
};
