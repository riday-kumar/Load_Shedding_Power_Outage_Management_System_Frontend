import apiClient from "@/lib/apiClient";
import { LoginPayload } from "@/types";

export const userLogin = async (payload: LoginPayload) => {
  return await apiClient("/auth/login", {
    method: "POST",
    body: payload,
  });
};
