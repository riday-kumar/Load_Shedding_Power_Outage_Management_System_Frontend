import {
  logOut,
  user,
  userGoogleLogin,
  userLogin,
  userRegister,
  verifyAccount,
} from "@/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

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

export const useLogout = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  return useMutation({
    mutationFn: logOut,
    onSuccess: async () => {
      await queryClient.cancelQueries({ queryKey: ["user"] }); // stop in-flight user fetches
      queryClient.setQueryData(["user"], null); // clear user without refetching
      router.replace("/login"); // leave the page that uses useUserProfile
    },
  });
};
