import { QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import QueryProvider from "./query.provider";
import GoogleProvider from "./google.provider";
import { TooltipProvider } from "@/components/ui/tooltip";

const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <GoogleProvider>
      <QueryProvider>
        <TooltipProvider>{children}</TooltipProvider>
      </QueryProvider>
    </GoogleProvider>
  );
};

export default Provider;
