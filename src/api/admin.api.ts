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

export const updateUserStatus = async (payload: {
  userId: string;
  status: string;
}) => {
  return await apiClient(`/admin/users/${payload.userId}/status`, {
    method: "PATCH",
    body: {
      status: payload.status,
    },
  });
};
