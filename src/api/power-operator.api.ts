import apiClient from "@/lib/apiClient";

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
