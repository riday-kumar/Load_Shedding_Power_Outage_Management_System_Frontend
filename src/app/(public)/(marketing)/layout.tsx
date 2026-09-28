import Footer from "@/components/layout/public/Footer";
import Header from "@/components/layout/public/Header";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="">
      <Header />
      <div className="w-11/12 mx-auto flex flex-col h-screen">{children}</div>
      <Footer />
    </div>
  );
};

export default layout;
