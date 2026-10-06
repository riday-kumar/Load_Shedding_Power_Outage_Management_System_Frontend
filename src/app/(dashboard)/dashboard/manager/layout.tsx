import RoleGuard from "@/components/auth/role-guard";
import DashboardShell from "@/components/dashboard/dashboard-shell";
import { ReactNode } from "react";

const DistributorManagerDashboardLayout = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <RoleGuard roles={["DISTRIBUTOR_MANAGER"]}>
      <DashboardShell role="DISTRIBUTOR_MANAGER">{children}</DashboardShell>
    </RoleGuard>
  );
};

export default DistributorManagerDashboardLayout;
