import {
  getAllFeeders,
  passwordReset,
  updateProfile,
  uploadProfilePhoto,
} from "@/api/profile.api";
import { GetAllFeeders } from "@/types/manager.type";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useProfileUpdate = () => {
  return useMutation({
    mutationFn: updateProfile,
  });
};

export const useAllFeeders = (payload: GetAllFeeders) => {
  return useQuery({
    queryKey: ["area-feeder", payload],
    queryFn: () => getAllFeeders(payload),
  });
};

export const useProfilePhoto = () => {
  return useMutation({
    mutationFn: uploadProfilePhoto,
  });
};

export const usePasswordReset = () => {
  return useMutation({
    mutationFn: passwordReset,
  });
};
