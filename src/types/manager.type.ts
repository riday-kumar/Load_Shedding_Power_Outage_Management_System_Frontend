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
