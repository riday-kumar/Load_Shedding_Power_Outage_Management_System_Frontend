import apiClient from "@/lib/apiClient";
import {
  CreatePowerOperatorPayload,
  FeederAddPayload,
  FeederUpdatePayload,
  UpdateSubstationPayload,
} from "@/types/manager.type";

export const getSubstationOfManager = async () => {
  return await apiClient("/distributor-manager/substation");
};

export const addSubstation = async (payload: { station_name: string }) => {
  return await apiClient("/distributor-manager/substation", {
    method: "POST",
    body: payload,
  });
};

export const updateSubstation = async ({
  substationId,
  station_name,
  distributor_id,
}: UpdateSubstationPayload) => {
  return await apiClient(`/distributor-manager/substation/${substationId}`, {
    method: "PATCH",
    body: {
      station_name,
      distributor_id,
    },
  });
};

export const getPowerOperatorOfManager = async () => {
  return await apiClient("/distributor-manager/power-operator");
};

export const addPowerOperator = async (payload: CreatePowerOperatorPayload) => {
  return await apiClient("/distributor-manager/power-operator", {
    method: "POST",
    body: payload,
  });
};

export const addNewFeeder = async (payload: FeederAddPayload) => {
  return await apiClient("/distributor-manager/feeder", {
    method: "POST",
    body: payload,
  });
};

export const updateFeeder = async (payload: FeederUpdatePayload) => {
  return await apiClient(`/distributor-manager/feeder`, {
    method: "PATCH",
    body: payload,
  });
};
