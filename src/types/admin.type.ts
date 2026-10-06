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
