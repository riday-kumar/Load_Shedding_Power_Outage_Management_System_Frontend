import {
  addPowerStatus,
  allPowerDistributedData,
  createPowerDistribution,
  getPowerStatusInfo,
} from "@/api";
import { GetAllPowerDistributedDataPayload, GetPowerStatus } from "@/types";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useGetPowerStatusInfo = (payload: GetPowerStatus) => {
  return useQuery({
    queryKey: ["powerStatus", payload],
    queryFn: () => getPowerStatusInfo(payload),
  });
};

export const useAddPowerStatus = () => {
  return useMutation({
    mutationFn: addPowerStatus,
  });
};

export const useAddPowerDistribution = () => {
  return useMutation({
    mutationFn: createPowerDistribution,
  });
};

export const useAllPowerDistributionInfo = (
  payload: GetAllPowerDistributedDataPayload,
) => {
  return useQuery({
    queryKey: ["powerDistributionData", payload],
    queryFn: () => allPowerDistributedData(payload),
  });
};
