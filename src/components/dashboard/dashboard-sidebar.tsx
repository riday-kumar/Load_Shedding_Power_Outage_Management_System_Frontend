"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
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
import { SidebarItems, UserRole } from "@/types";
import { usePathname, useRouter } from "next/navigation";
// import { SidebarItems } from "@/types/sidebar.type";
import {
  adminRoutes,
  customerRoutes,
  distributorManagersRoutes,
  powerAuthorityRoutes,
  powerOperatorRoutes,
  technicianRoutes,
} from "@/routes";
import { Button } from "../ui/button";
import { useLogout } from "@/hooks";
import { toast } from "../ui/toast";
import { useQueryClient } from "@tanstack/react-query";

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
  const { mutate: logOut } = useLogout();

  const pathName = usePathname();
  const router = useRouter();

  const routes: SidebarItems = sidebarRoutes[role] ?? {
    navMain: [],
  };
  // console.log("routes", routes);

  const queryClient = useQueryClient();

  const handleLogout = () => {
    logOut(undefined, {
      onSuccess: () => {
        toast.add({
          title: "LogOut!",
          description: "Logged out successfully",
          type: "success",
        });

        queryClient.removeQueries({
          queryKey: ["user"],
        });

        router.push("/");
      },

      onError: () => {
        toast.add({
          title: "Logout failed",
          description: "Something Went Wrong",
          type: "error",
        });
      },
    });
  };

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
        {/* {routes.map((item, index) => (
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
        ))} */}
        <SidebarGroup>
          <SidebarMenu>
            {routes.navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton render={<a href={item.url} />}>
                  {item.title}
                </SidebarMenuButton>
                {item.items?.length ? (
                  <SidebarMenuSub>
                    {item.items.map((item) => (
                      <SidebarMenuSubItem key={item.title}>
                        <SidebarMenuSubButton render={<a href={item.url} />}>
                          {item.title}
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      {/* ===================== end sidebar content ================ */}
      <SidebarRail />
      {/* ===================== start sidebar footer ================== */}
      <SidebarFooter>
        <Button onClick={handleLogout} variant={"destructive"}>
          Logout
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
