import {
  addNewFeeder,
  addNewTechnician,
  addPowerDistributionInSubstation,
  addPowerOperator,
  addSubstation,
  getPowerOperatorOfManager,
  getSubstationOfManager,
  getTechnicians,
  updateFeeder,
  updateSubstation,
} from "@/api";
import {
  AddPowerDistributionVariables,
  GetTechnicianPayload,
  PowerDistributionInSubstation,
} from "@/types/manager.type";
import { useMutation, useQuery } from "@tanstack/react-query";

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
