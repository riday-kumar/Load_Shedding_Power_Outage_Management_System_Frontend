"use client";
import Logo from "@/assets/svg/Logo";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/toast";
import { useLogout, useUserProfile } from "@/hooks";
import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";

const Header = () => {
  const { data, isLoading } = useUserProfile();
  const { mutate: logOut } = useLogout();

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

  const routes = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "About",
      url: "/about",
    },
    {
      name: "Profile",
      url: "/dashboard/profile",
    },
  ];
  return (
    <div className="sticky top-0 overflow-hidden  w-full h-20  bg-white shadow-xl">
      <div className="w-11/12 mx-auto h-full flex justify-between items-center">
        {/* logo */}
        <div>
          <Logo />
        </div>
        {/* navbar */}
        <nav className="flex gap-2 text-[18px] font-medium">
          {routes.map((route) => (
            <Link key={route.url} href={route.url}>
              {route.name}
            </Link>
          ))}
        </nav>
        {/* login & register button */}
        <div className="flex gap-2">
          {isLoading ? (
            <>
              <div className="h-10 w-20 animate-pulse rounded-md bg-gray-200" />
              <div className="h-10 w-20 animate-pulse rounded-md bg-gray-200" />
            </>
          ) : !data ? (
            <>
              <Button
                render={<Link href="/login" />}
                nativeButton={false}
                className="bg-green-primary text-white"
              >
                Login
              </Button>

              <Button
                render={<Link href="/register" />}
                nativeButton={false}
                className="bg-green-primary text-white"
              >
                SignUp
              </Button>
            </>
          ) : (
            <Button
              onClick={handleLogout}
              className="bg-red-primary text-white"
            >
              Logout
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
