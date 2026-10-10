"use client";
import Logo from "@/assets/svg/Logo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { toast } from "@/components/ui/toast";
import { useLogout, useUserProfile } from "@/hooks";
import { user } from "@/types";
import { useQueryClient } from "@tanstack/react-query";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Header = () => {
  const router = useRouter();
  const { data, isLoading } = useUserProfile();
  // console.log("profile data", data);
  const user: user = data?.data || [];
  const { mutate: logOut } = useLogout();
  const [open, setOpen] = useState(false);

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

  const role = user?.role;
  const handleDashboardRoute = () => {
    if (role === "ADMIN") {
      router.push("/dashboard/admin");
    } else if (role === "POWER_AUTH") {
      router.push("/dashboard/power-auth");
    } else if (role === "DISTRIBUTOR_MANAGER") {
      router.push("/dashboard/manager");
    } else if (role === "POWER_OPERATOR") {
      router.push("/dashboard/power-operator");
    } else if (role === "TECHNICIAN") {
      router.push("/dashboard/technician");
    } else if (role === "CUSTOMER") {
      router.push("/dashboard/customer");
    } else {
      router.push("/");
    }
  };

  const routes = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Profile", url: "/dashboard/profile" },
  ];

  // Shared by desktop header and mobile drawer
  const authButtons = (inDrawer = false) => {
    const close = () => inDrawer && setOpen(false);

    if (isLoading) {
      return (
        <>
          <div className="h-10 w-20 animate-pulse rounded-md bg-gray-200" />
          <div className="h-10 w-20 animate-pulse rounded-md bg-gray-200" />
        </>
      );
    }

    if (!data) {
      return (
        <>
          <Button
            render={<Link href="/login" onClick={close} />}
            nativeButton={false}
            className="bg-green-primary text-white"
          >
            Login
          </Button>

          <Button
            render={<Link href="/register" onClick={close} />}
            nativeButton={false}
            className="bg-green-primary text-white"
          >
            SignUp
          </Button>
        </>
      );
    }

    return (
      <>
        <Button
          onClick={() => {
            handleLogout();
            close();
          }}
          className="bg-red-primary text-white"
        >
          Logout
        </Button>
        <Button
          onClick={() => {
            handleDashboardRoute();
          }}
          className="bg-green-primary text-white"
        >
          Dashboard
        </Button>
      </>
    );
  };

  return (
    <div className="z-50 sticky top-0 overflow-hidden w-full h-20 bg-white shadow-xl">
      <div className="w-11/12 mx-auto h-full flex justify-between items-center">
        {/* logo */}
        <div>
          <Logo />
        </div>

        {/* desktop navbar */}
        <nav className="hidden md:flex gap-4 text-[18px] font-medium">
          {routes.map((route) => (
            <Link key={route.url} href={route.url}>
              {route.name}
            </Link>
          ))}
        </nav>

        {/* desktop auth buttons */}
        <div className="hidden md:flex gap-2">{authButtons()}</div>

        {/* mobile hamburger + drawer */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" aria-label="Open menu" />
              }
            >
              <Menu className="size-6" />
            </SheetTrigger>

            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle>
                  <Logo />
                </SheetTitle>
              </SheetHeader>

              <nav className="flex flex-col gap-4 px-4 text-lg font-medium">
                {routes.map((route) => (
                  <Link
                    key={route.url}
                    href={route.url}
                    onClick={() => setOpen(false)}
                  >
                    {route.name}
                  </Link>
                ))}
              </nav>

              <div className="mt-auto flex flex-col gap-2 p-4">
                {authButtons(true)}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Header;
