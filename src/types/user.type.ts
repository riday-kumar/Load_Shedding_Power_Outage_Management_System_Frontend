export type UserRole =
  | "ADMIN"
  | "POWER_AUTH"
  | "DISTRIBUTOR_MANAGER"
  | "POWER_OPERATOR"
  | "TECHNICIAN"
  | "CUSTOMER";

export interface user {
  id: string;
  name: string;
  email: string;
  phone: any;
  address: any;
  feederId: any;
  googleId: any;
  authProvider: string;
  emailVerified: boolean;
  status: UserStatus;
  role: string;
  imageUrl: string;
  imagePublicId: string;
  isDeleted: boolean;
  deletedAt: any;
  createdAt: string;
  updatedAt: string;
  distributorManager: {
    id: string;
    user_id: string;
    distributor_id: string;
    distributor: {
      id: string;
      company_name: string;
    };
  };
}

type UserStatus = "ACTIVE" | "BLOCK" | "DELETED";

export interface ProfileUpdatePayload {
  name?: string;
  phone?: string;
  address?: string;
  feederId?: string;
}
