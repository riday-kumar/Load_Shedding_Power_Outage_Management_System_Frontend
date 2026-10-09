import {
  allEmergencyOutagesForPowerOperator,
  allFeedersForPowerOperator,
  allLoadSheddingSchedule,
  createLoadShedding,
  publishSchedule,
} from "@/api/power-operator.api";
import { LoadSheddingGettingPayload } from "@/types/power-operator.type";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useAllFeedersForOperator = () => {
  return useQuery({
    queryKey: ["allFeedersForOperator"],
    queryFn: allFeedersForPowerOperator,
  });
};

export const useCreateLoadShedding = () => {
  return useMutation({
    mutationFn: createLoadShedding,
  });
};

export const useGetAllLoadShedding = (payload: LoadSheddingGettingPayload) => {
  return useQuery({
    queryKey: ["allLoadShedding", payload],
    queryFn: () => allLoadSheddingSchedule(payload),
  });
};

export const usePublishSchedule = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: publishSchedule,

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["allLoadShedding"],
      });
    },
  });
};

export const useAllEmergencyOutagesForPowerOperator = () => {
  return useQuery({
    queryKey: ["allEmergencyOutagesForPowerOperator"],
    queryFn: allEmergencyOutagesForPowerOperator,
  });
};
