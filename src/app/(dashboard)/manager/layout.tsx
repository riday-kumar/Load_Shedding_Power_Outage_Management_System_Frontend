import RoleGuard from "@/components/auth/role-guard";
import { ReactNode } from "react";

const DistributorManagerDashboardLayout = ({
  children,
}: {
  children: ReactNode;
}) => {
  return <RoleGuard roles={["DISTRIBUTOR_MANAGER"]}>{children}</RoleGuard>;
};

export default DistributorManagerDashboardLayout;
