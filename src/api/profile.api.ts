import apiClient from "@/lib/apiClient";
import { ProfileUpdatePayload } from "@/types";

export const updateProfile = async (payload: ProfileUpdatePayload) => {
  return await apiClient("/user/profile-update", {
    method: "PATCH",
    body: payload,
  });
};

export const getAllFeeders = async () => {
  return await apiClient("/distributor-manager/feeder");
};
