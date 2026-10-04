import RoleGuard from "@/components/auth/role-guard";
import DashboardShell from "@/components/dashboard/dashboard-shell";
import { ReactNode } from "react";

const PowerOperatorDashboardLayout = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <RoleGuard roles={["POWER_OPERATOR"]}>
      <DashboardShell role="POWER_OPERATOR">{children}</DashboardShell>
    </RoleGuard>
  );
};

export default PowerOperatorDashboardLayout;
