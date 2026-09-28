import Logo from "@/assets/svg/Logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Header = () => {
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
          <Button
            render={<Link href="/login"></Link>}
            nativeButton={false}
            className="bg-blue-700"
          >
            Login
          </Button>
          <Button className="bg-blue-700">SignUp</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
