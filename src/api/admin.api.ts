import apiClient from "@/lib/apiClient";
import { PowerAuthorityData } from "@/types";

export const allUsers = async (value: string | null) => {
  return await apiClient("/admin/all-users", {
    query: {
      role: value,
    },
  });
};

export const addPowerAuthority = async (payload: PowerAuthorityData) => {
  return await apiClient("/admin/create-power-authority", {
    method: "POST",
    body: payload,
  });
};
