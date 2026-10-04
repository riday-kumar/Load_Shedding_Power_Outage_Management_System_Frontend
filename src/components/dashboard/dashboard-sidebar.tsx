"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import Logo from "@/assets/svg/Logo";
import Link from "next/link";
import { UserRole } from "@/types";
import { usePathname } from "next/navigation";
import { SidebarItems } from "@/types/sidebar.type";
import {
  adminRoutes,
  customerRoutes,
  distributorManagersRoutes,
  powerAuthorityRoutes,
  powerOperatorRoutes,
  technicianRoutes,
} from "@/routes";

// This is sample data.
const data = {
  navMain: [
    {
      title: "Getting Started",
      url: "#",
    },
    {
      title: "Build Your Application",
      url: "#",
    },
    {
      title: "API Reference",
      url: "#",
    },
    {
      title: "Architecture",
      url: "#",
    },
    {
      title: "Community",
      url: "#",
    },
  ],
};

const sidebarRoutes: Partial<Record<UserRole, SidebarItems>> = {
  ADMIN: adminRoutes,
  POWER_AUTH: powerAuthorityRoutes,
  DISTRIBUTOR_MANAGER: distributorManagersRoutes,
  POWER_OPERATOR: powerOperatorRoutes,
  TECHNICIAN: technicianRoutes,
  CUSTOMER: customerRoutes,
};

export function DashboardSidebar({ role }: { role: UserRole }) {
  const pathName = usePathname();
  const routes: SidebarItems = sidebarRoutes[role] || [];

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg">
              <Logo textSize={20} />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      {/* ===================== end sidebar header ================ */}
      <SidebarContent>
        {routes.map((item, index) => (
          <SidebarGroup key={index}>
            <SidebarMenu>
              {item.items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton>
                    <Link href={item.url} className="font-medium">
                      {item.title}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
