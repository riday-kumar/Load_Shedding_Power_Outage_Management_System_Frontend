import RoleGuard from "@/components/auth/role-guard";
import DashboardShell from "@/components/dashboard/dashboard-shell";
import { ReactNode } from "react";

const TechnicianDashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <RoleGuard roles={["TECHNICIAN"]}>
      <DashboardShell role="TECHNICIAN">{children}</DashboardShell>
    </RoleGuard>
  );
};

export default TechnicianDashboardLayout;
