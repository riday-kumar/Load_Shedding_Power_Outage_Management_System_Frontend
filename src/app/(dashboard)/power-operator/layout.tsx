import RoleGuard from "@/components/auth/role-guard";
import { ReactNode } from "react";

const PowerOperatorDashboardLayout = ({
  children,
}: {
  children: ReactNode;
}) => {
  return <RoleGuard roles={["POWER_OPERATOR"]}>{children}</RoleGuard>;
};

export default PowerOperatorDashboardLayout;
