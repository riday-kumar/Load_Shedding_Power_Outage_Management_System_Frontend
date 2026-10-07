export interface PowerAuthorityData {
  name: string;
  email: string;
  address: string;
  password: string;
  phone: string;
}

export interface PowerAuthorityFormProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  allUsersDataForAdminRefetch: () => Promise<unknown>;
}

export interface DistributorCompany {
  id: string;
  company_name: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
}
