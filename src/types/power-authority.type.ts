import { UseQueryResult } from "@tanstack/react-query";

export interface GetPowerStatus {
  today?: string;
}

export interface PowerStatusInfo {
  id: string;
  date: string;
  generatedPowerMW: string;
  demand: string;
  createdById: string;
  createdAt: string;
  updatedAt: string;
}

export interface PowerStatusFormProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  powerStatusInfoRefetch: UseQueryResult["refetch"];
}

export interface PowerDistribution {
  expected_need: number;
  allocated: number;
  distributor_id: string;
}

export type PowerDistributionForm = {
  distributions: {
    expected_need: number;
    allocated: number;
    distributor_id: string;
  }[];
};

export interface PowerDistributionDataInfo {
  id: string;
  allocatedAt: string;
  expected_need: string;
  allocated: string;
  distributor_id: string;
  distributor: {
    company_name: string;
  };
}
