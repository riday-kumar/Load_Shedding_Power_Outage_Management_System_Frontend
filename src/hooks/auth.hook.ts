import { userGoogleLogin, userLogin, userRegister } from "@/api";
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
