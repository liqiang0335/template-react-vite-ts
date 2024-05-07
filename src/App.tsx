import { AppWrapper } from "./AppWrapper";
import { RoutePages } from "./routes";
import { ErrorBoundary } from "react-error-boundary";

export function App() {
  return (
    <AppWrapper>
      <div>
        <div className="y-border-b text-center p-2">Header</div>
        <div className="bg-white p-2 min-h-[300px]">
          <ErrorBoundary key={window.location.hash} fallback={<div>出错了</div>}>
            <RoutePages></RoutePages>
          </ErrorBoundary>
        </div>
        <div className="y-border-t text-center p-2">Footer</div>
      </div>
    </AppWrapper>
  );
}
