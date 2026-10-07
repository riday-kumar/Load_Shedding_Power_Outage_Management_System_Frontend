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
  return await apiClient("/admin/power-authority", {
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

export const allDistributorCompany = async () => {
  return await apiClient("/admin/distributor");
};

export const deleteDistributorCompany = async (id: string) => {
  return await apiClient(`/admin/distributor/${id}/status`, {
    method: "PATCH",
  });
};

export const addDistributorCompany = async (payload: {
  company_name: string;
}) => {
  return await apiClient("/admin/distributor", {
    method: "POST",
    body: payload,
  });
};
