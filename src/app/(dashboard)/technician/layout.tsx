import RoleGuard from "@/components/auth/role-guard";
import { ReactNode } from "react";

const TechnicianDashboardLayout = ({ children }: { children: ReactNode }) => {
  return <RoleGuard roles={["TECHNICIAN"]}>{children}</RoleGuard>;
};

export default TechnicianDashboardLayout;
