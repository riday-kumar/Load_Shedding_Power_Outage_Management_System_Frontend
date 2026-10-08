import apiClient from "@/lib/apiClient";

export const getSubstationOfManager = async () => {
  return await apiClient("/distributor-manager/substation");
};

export const addSubstation = async (payload: { station_name: string }) => {
  return await apiClient("/distributor-manager/substation", {
    method: "POST",
    body: payload,
  });
};

interface UpdateSubstationPayload {
  substationId: string;
  station_name: string;
  distributor_id: string;
}

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
