import {
  addNewFeeder,
  addNewTechnician,
  addPowerDistributionInSubstation,
  addPowerOperator,
  addSubstation,
  approveSchedule,
  getLoadSheddingForManager,
  getPowerOperatorOfManager,
  getSubstationOfManager,
  getTechnicians,
  rejectSchedule,
  updateFeeder,
  updateSubstation,
} from "@/api";
import {
  AddPowerDistributionVariables,
  GetTechnicianPayload,
  PowerDistributionInSubstation,
} from "@/types/manager.type";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useSubstationOfManager = () => {
  return useQuery({
    queryKey: ["managerSubstation"],
    queryFn: getSubstationOfManager,
  });
};

export const useAddSubstation = () => {
  return useMutation({
    mutationFn: addSubstation,
  });
};

export const useUpdateSubstation = () => {
  return useMutation({
    mutationFn: updateSubstation,
  });
};

export const usePowerOperatorOfManager = () => {
  return useQuery({
    queryKey: ["managerPowerOperator"],
    queryFn: getPowerOperatorOfManager,
  });
};

export const useAddPowerOperator = () => {
  return useMutation({
    mutationFn: addPowerOperator,
  });
};

export const useAddFeeder = () => {
  return useMutation({
    mutationFn: addNewFeeder,
  });
};

export const useUpdateFeeder = () => {
  return useMutation({
    mutationFn: updateFeeder,
  });
};

export const useGetTechnicians = (payload: GetTechnicianPayload) => {
  return useQuery({
    queryKey: ["technicians", payload],
    queryFn: () => getTechnicians(payload),
  });
};

export const useAddTechnician = () => {
  return useMutation({
    mutationFn: addNewTechnician,
  });
};

export const useAddPowerDistributionInSubstation = () => {
  return useMutation({
    mutationFn: ({ companyId, payload }: AddPowerDistributionVariables) =>
      addPowerDistributionInSubstation(companyId, payload),
  });
};

export const useLoadSheddingForManager = () => {
  return useQuery({
    queryKey: ["managerLoadShedding"],
    queryFn: getLoadSheddingForManager,
  });
};

export const useApproveSchedule = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: approveSchedule,

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["managerLoadShedding"],
      });
    },
  });
};

export const useRejectSchedule = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: rejectSchedule,

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["managerLoadShedding"],
      });
    },
  });
};
