import apiClient from "@/lib/apiClient";
import { GetPowerStatus } from "@/types";

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
