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
