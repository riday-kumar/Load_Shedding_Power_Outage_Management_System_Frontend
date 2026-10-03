import RoleGuard from "@/components/auth/role-guard";
import { ReactNode } from "react";

const AdminDashboardLayout = ({ children }: { children: ReactNode }) => {
  return <RoleGuard roles={["ADMIN"]}>{children}</RoleGuard>;
};

export default AdminDashboardLayout;
