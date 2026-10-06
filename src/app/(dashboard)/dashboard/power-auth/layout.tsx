import RoleGuard from "@/components/auth/role-guard";
import DashboardShell from "@/components/dashboard/dashboard-shell";
import { ReactNode } from "react";

const PowerAuthDashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <RoleGuard roles={["POWER_AUTH"]}>
      <DashboardShell role="POWER_AUTH">{children}</DashboardShell>
    </RoleGuard>
  );
};

export default PowerAuthDashboardLayout;
