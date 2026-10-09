import {
  createComplaint,
  createEmergencyOutage,
  createSubscription,
  getSubscriptions,
  payForSubscriptions,
} from "@/api";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useCreateSubscription = () => {
  return useMutation({
    mutationFn: createSubscription,
  });
};

export const useGetSubscriptions = () => {
  return useQuery({
    queryKey: ["allSubscriptions"],
    queryFn: getSubscriptions,
  });
};

export const usePayForSubscription = () => {
  return useMutation({
    mutationFn: payForSubscriptions,
  });
};

export const useCreateComplaint = () => {
  return useMutation({
    mutationFn: createComplaint,
  });
};

export const useCreateEmergencyOutage = () => {
  return useMutation({
    mutationFn: createEmergencyOutage,
  });
};
