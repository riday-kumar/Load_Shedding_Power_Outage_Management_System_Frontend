import apiClient from "@/lib/apiClient";
import { googleLoginPayload, LoginPayload, registerPayload } from "@/types";

export const userLogin = async (payload: LoginPayload) => {
  return await apiClient("/auth/login", {
    method: "POST",
    body: payload,
  });
};

export const userGoogleLogin = async (payload: googleLoginPayload) => {
  return await apiClient("/auth/google", {
    method: "POST",
    body: payload,
  });
};

export const userRegister = async (payload: registerPayload) => {
  return await apiClient("/auth/register", {
    method: "POST",
    body: payload,
  });
};

export const verifyAccount = async (payload: {
  otp: string;
  email: string;
}) => {
  return await apiClient("/auth/verify-email", {
    method: "POST",
    body: payload,
  });
};

export const user = async () => {
  return await apiClient("/user/profile");
};

export const logOut = async () => {
  return await apiClient("/auth/logout", {
    method: "post",
  });
};
