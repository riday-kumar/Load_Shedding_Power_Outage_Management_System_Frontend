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
