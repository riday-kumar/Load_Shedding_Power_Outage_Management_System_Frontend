import {
  addDistributorCompany,
  addPowerAuthority,
  allDistributorCompany,
  allUsers,
  deleteDistributorCompany,
  updateUserStatus,
} from "@/api";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useAllUsersForAdmin = (value: string) => {
  return useQuery({
    queryKey: ["allUsersForAdmin"],
    queryFn: () => allUsers(value),
  });
};

export const useAddPowerAuthority = () => {
  return useMutation({
    mutationFn: addPowerAuthority,
  });
};

export const useUpdateUserStatus = () => {
  return useMutation({
    mutationFn: updateUserStatus,
  });
};

export const useAllDistributorCompanyForAdmin = () => {
  return useQuery({
    queryKey: ["allDistributorForAdmin"],
    queryFn: allDistributorCompany,
  });
};

export const useDeleteDistributorCompany = () => {
  return useMutation({
    mutationFn: deleteDistributorCompany,
  });
};

export const useAddDistributorCompany = () => {
  return useMutation({
    mutationFn: addDistributorCompany,
  });
};
