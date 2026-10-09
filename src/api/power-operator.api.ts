import apiClient from "@/lib/apiClient";
import {
  LoadSheddingGettingPayload,
  LoadSheddingStatus,
} from "@/types/power-operator.type";

export const allFeedersForPowerOperator = async () => {
  return await apiClient("/load-shedding/power-operator/feeders");
};

export const createLoadShedding = async (payload: {
  feeder_id: string;
  start_time: string;
  end_time: string;
  plannedLoadShedding: number;
}) => {
  return await apiClient("/load-shedding/schedule", {
    method: "POST",
    body: payload,
  });
};

export const allLoadSheddingSchedule = async (
  payload: LoadSheddingGettingPayload,
) => {
  return await apiClient("/load-shedding/schedule", {
    query: {
      state: payload.state || undefined,
      operator: payload.operator || undefined,
    },
  });
};

export const publishSchedule = async (id: string) => {
  return await apiClient(`/load-shedding/schedule/${id}/publish`, {
    method: "PATCH",
  });
};

export const allEmergencyOutagesForPowerOperator = async () => {
  return await apiClient("/emergency-outage");
};
