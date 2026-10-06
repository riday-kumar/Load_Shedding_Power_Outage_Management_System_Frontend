"use client";
import AuthLoading from "@/components/auth/auth-loading";
import RoleGuard from "@/components/auth/role-guard";
import DashboardShell from "@/components/dashboard/dashboard-shell";
import { useUserProfile } from "@/hooks";
import { ReactNode } from "react";

const PowerOperatorDashboardLayout = ({
  children,
}: {
  children: ReactNode;
}) => {
  const { data: userData, isLoading: profileLoading } = useUserProfile();

  const user = userData.data;

  if (profileLoading) {
    return <AuthLoading />;
  }

  return (
    <RoleGuard
      roles={[
        "POWER_OPERATOR",
        "ADMIN",
        "CUSTOMER",
        "DISTRIBUTOR_MANAGER",
        "POWER_AUTH",
        "TECHNICIAN",
      ]}
    >
      <DashboardShell role={user.role}>{children}</DashboardShell>
    </RoleGuard>
  );
};

export default PowerOperatorDashboardLayout;
