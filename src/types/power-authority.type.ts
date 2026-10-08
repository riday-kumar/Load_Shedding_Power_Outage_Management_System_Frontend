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
