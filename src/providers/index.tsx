import { QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import QueryProvider from "./query.provider";

const Provider = ({ children }: { children: ReactNode }) => {
  return <QueryProvider>{children}</QueryProvider>;
};

export default Provider;
