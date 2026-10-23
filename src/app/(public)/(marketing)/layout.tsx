"use client";
import Footer from "@/components/layout/public/Footer";
import Header from "@/components/layout/public/Header";
import HeroSection from "@/components/modules/home/Hero";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  const pathName = usePathname();
  return (
    <div className="">
      <Header />
      {pathName === "/" && <HeroSection />}
      <div className="w-11/12 mx-auto flex flex-col min-h-screen">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default layout;
