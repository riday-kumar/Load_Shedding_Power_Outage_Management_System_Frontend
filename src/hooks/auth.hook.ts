import {
  user,
  userGoogleLogin,
  userLogin,
  userRegister,
  verifyAccount,
} from "@/api";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useLogin = () => {
  return useMutation({
    mutationFn: userLogin,
  });
};

export const useGoogleLogin = () => {
  return useMutation({
    mutationFn: userGoogleLogin,
  });
};

export const useRegister = () => {
  return useMutation({
    mutationFn: userRegister,
  });
};

export const useVerifyAccount = () => {
  return useMutation({
    mutationFn: verifyAccount,
  });
};

export const useUserProfile = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: user,
    retry: false,
  });
};
