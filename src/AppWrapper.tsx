import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { HashRouter } from "react-router-dom";
import { queryClient } from "./components/queryClient";
import { AntConfig } from "./components/common/AntConfig";
import { Toaster } from "@/components/ui/sonner";

export function AppWrapper({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <AntConfig>
        <HashRouter>{children}</HashRouter>
        <Toaster position="top-center" duration={1500} />
      </AntConfig>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
