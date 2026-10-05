export type UserRole =
  | "ADMIN"
  | "POWER_AUTH"
  | "DISTRIBUTOR_MANAGER"
  | "POWER_OPERATOR"
  | "TECHNICIAN"
  | "CUSTOMER";

export type User = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  address: string | null;
  feederId: string | null;
  role: UserRole;
  status: string;
  emailVerified: boolean;
  imageUrl: string | null;
};

export interface ProfileUpdatePayload {
  name?: string;
  phone?: string;
  address?: string;
  feederId?: string;
}
