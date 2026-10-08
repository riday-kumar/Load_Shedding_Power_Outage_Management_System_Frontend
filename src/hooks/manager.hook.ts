import {
  addNewFeeder,
  addPowerOperator,
  addSubstation,
  getPowerOperatorOfManager,
  getSubstationOfManager,
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
