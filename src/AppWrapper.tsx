import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { HashRouter } from "react-router-dom";
import { queryClient } from "./components/queryClient";
import { AntConfig } from "./components/common/AntConfig";
import { Toaster } from "@/components/ui/sonner";
import { ErrorBoundary } from "react-error-boundary";

export function AppWrapper({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <AntConfig>
        <HashRouter>
          <ErrorBoundary key={window.location.hash} fallback={<div>出错了</div>}>
            {children}
          </ErrorBoundary>
          <Toaster position="top-center" duration={1500} />
        </HashRouter>
      </AntConfig>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
