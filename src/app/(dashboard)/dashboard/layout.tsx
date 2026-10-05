"use client";
import AuthLoading from "@/components/auth/auth-loading";
import RoleGuard from "@/components/auth/role-guard";
import DashboardShell from "@/components/dashboard/dashboard-shell";
import { useUserProfile } from "@/hooks";
import React, { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const { data, isLoading } = useUserProfile();
  if (isLoading) {
    return <AuthLoading />;
  }
  return (
    <RoleGuard
      roles={[
        "ADMIN",
        "CUSTOMER",
        "DISTRIBUTOR_MANAGER",
        "POWER_AUTH",
        "POWER_OPERATOR",
        "TECHNICIAN",
      ]}
    >
      <DashboardShell role={data.data.role}>{children}</DashboardShell>
    </RoleGuard>
  );
};

export default DashboardLayout;
