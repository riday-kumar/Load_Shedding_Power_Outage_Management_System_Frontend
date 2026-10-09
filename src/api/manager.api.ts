import apiClient from "@/lib/apiClient";
import {
  AddPowerDistributionPayload,
  CreatePowerOperatorPayload,
  FeederAddPayload,
  FeederUpdatePayload,
  GetTechnicianPayload,
  PowerDistributionInSubstation,
  TechnicianAddPayload,
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

export const getTechnicians = async (payload: GetTechnicianPayload) => {
  return await apiClient("/distributor-manager/technician", {
    query: {
      managerId: payload.managerId || undefined,
      substationId: payload.substationId || undefined,
    },
  });
};

export const addNewTechnician = async (payload: TechnicianAddPayload) => {
  return await apiClient("/distributor-manager/technician", {
    method: "POST",
    body: payload,
  });
};

export const addPowerDistributionInSubstation = async (
  companyId: string,
  payload: AddPowerDistributionPayload[],
) => {
  return await apiClient(
    "/distributor-manager/power-allocate-into-substation",
    {
      query: {
        distributor_company_id: companyId,
      },
      method: "POST",
      body: payload,
    },
  );
};

export const getLoadSheddingForManager = async () => {
  return await apiClient("/load-shedding/schedule/manager");
};

export const approveSchedule = async (id: string) => {
  return await apiClient(`/load-shedding/schedule/${id}/approve`, {
    method: "PATCH",
  });
};

export const rejectSchedule = async (id: string) => {
  return await apiClient(`/load-shedding/schedule/${id}/reject`, {
    method: "PATCH",
  });
};
