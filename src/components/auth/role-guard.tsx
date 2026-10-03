"use client";
import { useUserProfile } from "@/hooks";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import AuthLoading from "./auth-loading";
import AccessDenied from "./access-denied";
import { IProps } from "@/types";

const RoleGuard = ({ children, roles }: IProps) => {
  const router = useRouter();

  const { data, isPending, isError } = useUserProfile();

  const user = data?.data;

  const isAuthorized = !!user && roles.includes(user.role);

  useEffect(() => {
    if (isPending) {
      return;
    }

    if (isError || !user) {
      return router.replace("/login");
    }
  }, [isPending, isError, user]);

  if (isPending) {
    return <AuthLoading />;
  }

  if (isError || !user) {
    return <AuthLoading />;
  }

  if (isAuthorized) {
    return <>{children}</>;
  }

  return <AccessDenied />;
};

export default RoleGuard;
