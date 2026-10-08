import apiClient from "@/lib/apiClient";
import { ProfileUpdatePayload } from "@/types";

export const updateProfile = async (payload: ProfileUpdatePayload) => {
  return await apiClient("/user/profile-update", {
    method: "PATCH",
    body: payload,
  });
};

export const getAllFeeders = async (payload: string, id: string) => {
  return await apiClient(
    `/distributor-manager/feeder?area=${payload}&creator=${id}`,
  );
};

export const uploadProfilePhoto = async (formData: FormData) => {
  return await apiClient("/user/profile-image", {
    method: "PATCH",
    body: formData,
  });
};
