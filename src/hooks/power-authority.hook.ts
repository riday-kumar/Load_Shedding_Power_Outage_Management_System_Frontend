import { addPowerStatus, getPowerStatusInfo } from "@/api";
import { GetPowerStatus } from "@/types";
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
