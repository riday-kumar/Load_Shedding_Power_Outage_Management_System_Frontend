"use client";
import { useUserProfile } from "@/hooks";
import { ReactNode, useEffect } from "react";
import AuthLoading from "./auth-loading";
import { useRouter } from "next/navigation";

const AuthGuard = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const { isError, isPending, data } = useUserProfile();

  const user = data?.data;

  useEffect(() => {
    if (isPending) {
      return;
    }
    if (isError || !user) {
      router.replace("/login");
    }
  }, [isPending, isError, user]);

  if (isPending) {
    return <AuthLoading />;
  }

  if (isError || !user) {
    return <AuthLoading />;
  }

  return <>{children}</>;
};

export default AuthGuard;
