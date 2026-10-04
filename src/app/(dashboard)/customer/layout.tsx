import RoleGuard from "@/components/auth/role-guard";
import DashboardShell from "@/components/dashboard/dashboard-shell";
import { ReactNode } from "react";

const CustomerDashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <RoleGuard roles={["CUSTOMER"]}>
      <DashboardShell role="CUSTOMER">{children}</DashboardShell>
    </RoleGuard>
  );
};

export default CustomerDashboardLayout;
