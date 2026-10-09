import apiClient from "@/lib/apiClient";
import { ProfileUpdatePayload } from "@/types";
import { GetAllFeeders } from "@/types/manager.type";

export const updateProfile = async (payload: ProfileUpdatePayload) => {
  return await apiClient("/user/profile-update", {
    method: "PATCH",
    body: payload,
  });
};

export const getAllFeeders = async (payload: GetAllFeeders) => {
  return await apiClient("/distributor-manager/feeder", {
    query: {
      area: payload.area ?? undefined,
      creator: payload.creator ?? undefined,
      page: payload.page ?? undefined,
      limit: payload.limit ?? undefined,
    },
  });
};

export const uploadProfilePhoto = async (formData: FormData) => {
  return await apiClient("/user/profile-image", {
    method: "PATCH",
    body: formData,
  });
};

export const passwordReset = async (payload: {
  currentPassword: string;
  newPassword: string;
}) => {
  return await apiClient("/user/update-password", {
    method: "PATCH",
    body: payload,
  });
};
