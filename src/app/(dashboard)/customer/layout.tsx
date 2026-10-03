import RoleGuard from "@/components/auth/role-guard";
import { ReactNode } from "react";

const CustomerDashboardLayout = ({ children }: { children: ReactNode }) => {
  return <RoleGuard roles={["CUSTOMER"]}>{children}</RoleGuard>;
};

export default CustomerDashboardLayout;
