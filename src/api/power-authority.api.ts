import apiClient from "@/lib/apiClient";
import {
  GetAllPowerDistributedDataPayload,
  GetPowerStatus,
  PowerDistribution,
} from "@/types";

export const getPowerStatusInfo = async (payload: GetPowerStatus) => {
  return await apiClient("power-auth/national-level-electricity", {
    query: {
      today: payload.today || undefined,
    },
  });
};

export const addPowerStatus = async (payload: {
  generatedPowerMW: number;
  demand: number;
}) => {
  return await apiClient("/power-auth/national-level-electricity", {
    method: "POST",
    body: payload,
  });
};

export const createPowerDistribution = async (payload: PowerDistribution[]) => {
  return await apiClient("/power-auth/power-distribution", {
    method: "POST",
    body: payload,
  });
};

export const allPowerDistributedData = async (
  payload: GetAllPowerDistributedDataPayload,
) => {
  return await apiClient("/power-auth/power-distribution", {
    query: {
      today: payload.today || undefined,
      companyId: payload.companyId || undefined,
    },
  });
};
