export interface Substation {
  id: string;
  station_name: string;
  distributor_id: string;
  createdById: string;
  distributor: {
    company_name: string;
  };
}

export interface SubstationAddFormProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  managerSubstationRefetch: () => Promise<unknown>;
  substation?: Substation | null;
}

export interface UpdateSubstationPayload {
  substationId: string;
  station_name: string;
  distributor_id: string;
}

export interface CreatePowerOperatorPayload {
  name: string;
  email: string;
  address: string;
  password: string;
  substation_id: string;
}

export interface PowerOperatorFormProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  managerPowerOperatorRefetch: () => Promise<unknown>;
}

export interface PowerOperator {
  id: string;
  substation_id: string;
  createdById: string;
  user_id: string;
  substation: Substation;
  user: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };
}

export interface FeederInfo {
  id: string;
  feeder_name: string;
  division: string;
  district: string;
  area: string;
  substation_id: string;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
  substation: {
    station_name: string;
  };
}

export interface FeederAddFormProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  feederRefetch: () => Promise<unknown>;
  feeder?: FeederInfo | null;
}

export interface FeederAddPayload {
  feeder_name: string;
  division?: string;
  district?: string;
  area: string;
  substation_id: string;
}
export interface FeederUpdatePayload {
  id: string;
  feeder_name: string;
  division?: string;
  district?: string;
  area: string;
  substation_id: string;
}

export interface Technician {
  id: string;
  status: string;
  skill: string;
  user_id: string;
  createdBy: string;
  substationId: string;
  users: {
    name: string;
    email: string;
    phone: string | null;
  };
  substation: {
    station_name: string;
  };
}

export interface TechnicianFormProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  techniciansRefetch: () => Promise<unknown>;
}

export interface TechnicianAddPayload {
  name: string;
  email: string;
  password: string;
  address: string;
  skill: string;
  substationId: string;
}
