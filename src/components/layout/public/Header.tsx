"use client";
import Logo from "@/assets/svg/Logo";
import { Button } from "@/components/ui/button";
import { useUserProfile } from "@/hooks";
import Link from "next/link";

const Header = () => {
  const { data, isLoading } = useUserProfile();
  const routes = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "About",
      url: "/about",
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
          {isLoading && (
            <>
              <div className="h-10 w-20 animate-pulse rounded-md bg-gray-200" />
              <div className="h-10 w-20 animate-pulse rounded-md bg-gray-200" />
            </>
          )}
          {!isLoading && !data && (
            <>
              <Button
                render={<Link href="/login"></Link>}
                nativeButton={false}
                className="bg-green-primary text-white"
              >
                Login
              </Button>
              <Button
                render={<Link href="/register"></Link>}
                nativeButton={false}
                className="bg-green-primary text-white"
              >
                SignUp
              </Button>
            </>
          )}
          {!isLoading && data && (
            <Button className="bg-red-primary text-white">Logout</Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
