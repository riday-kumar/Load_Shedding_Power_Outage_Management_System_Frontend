import apiClient from "@/lib/apiClient";

export const createSubscription = async () => {
  return await apiClient("/subscription", {
    method: "POST",
  });
};

export const getSubscriptions = async () => {
  return await apiClient("/subscription");
};

export const payForSubscriptions = async (payload: {
  subscriptionId: string;
}) => {
  return await apiClient("/subscription/pay-subscription", {
    method: "POST",
    body: payload,
  });
};

export const createComplaint = async (payload: {
  complaintMessage: string;
  feeder_id: string;
}) => {
  return await apiClient("/complaint", {
    method: "POST",
    body: payload,
  });
};

export const createEmergencyOutage = async (payload: {
  feeder_id: string;
  reason: string;
  startedAt: string;
}) => {
  return await apiClient("/emergency-outage", {
    method: "POST",
    body: payload,
  });
};
