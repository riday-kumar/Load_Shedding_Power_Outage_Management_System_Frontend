import RoleGuard from "@/components/auth/role-guard";
import { ReactNode } from "react";

const PowerAuthDashboardLayout = ({ children }: { children: ReactNode }) => {
  return <RoleGuard roles={["POWER_AUTH"]}>{children}</RoleGuard>;
};

export default PowerAuthDashboardLayout;
