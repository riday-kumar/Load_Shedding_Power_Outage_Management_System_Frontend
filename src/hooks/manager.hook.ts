import {
  addNewFeeder,
  addNewTechnician,
  addPowerOperator,
  addSubstation,
  getPowerOperatorOfManager,
  getSubstationOfManager,
  getTechnicians,
  updateFeeder,
  updateSubstation,
} from "@/api";
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

export const useGetTechnicians = (managerId: string, substationId: string) => {
  return useQuery({
    queryKey: ["technicians", managerId, substationId],
    queryFn: () => getTechnicians(managerId, substationId),
  });
};

export const useAddTechnician = () => {
  return useMutation({
    mutationFn: addNewTechnician,
  });
};
