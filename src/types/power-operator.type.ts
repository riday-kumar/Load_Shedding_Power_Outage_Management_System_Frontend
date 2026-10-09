import { FeederInfo } from "./manager.type";

export type LoadSheddingStatus =
  | "DRAFT"
  | "PENDING"
  | "APPROVED"
  | "PUBLISHED"
  | "REJECTED"
  | "COMPLETED";

export interface LoadSheddingGettingPayload {
  state?: LoadSheddingStatus;
  operator?: string;
}

export interface LoadShedding {
  id: string;
  feeder_id: string;
  powerOperator_id: string;
  date: string;
  start_time: string;
  end_time: string;
  reason: string;
  status: LoadSheddingStatus;
  plannedLoadShedding: string;
  approvedById: string;
  createdAt: string;
  updatedAt: string;
  feeders: {
    id: string;
    feeder_name: string;
    division: string;
    district: string;
    area: string;
    substation_id: string;
    createdBy: string;
    createdAt: string;
    updatedAt: string;
  };
  powerOperator: {
    id: string;
    substation_id: string;
    createdById: string;
    user_id: string;
  };
}
