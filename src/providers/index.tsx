import { QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import QueryProvider from "./query.provider";
import GoogleProvider from "./google.provider";

const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <GoogleProvider>
      <QueryProvider>{children}</QueryProvider>
    </GoogleProvider>
  );
};

export default Provider;
