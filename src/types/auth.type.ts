import { ReactNode } from "react";
import { UserRole } from "./user.type";

export interface LoginPayload {
  email: string;
  password: string;
}

export interface googleLoginPayload {
  idToken: string;
}

export interface registerPayload {
  name: string;
  email: string;
  phone?: string;
  address: string;
  password: string;
}

export interface IProps {
  children: ReactNode;
  roles: UserRole[];
}
