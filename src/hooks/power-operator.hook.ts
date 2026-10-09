import {
  allFeedersForPowerOperator,
  createLoadShedding,
} from "@/api/power-operator.api";
import { useMutation, useQuery } from "@tanstack/react-query";

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
