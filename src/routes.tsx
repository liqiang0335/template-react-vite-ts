import { useRoutes, Navigate } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { Home } from "./routes/Home/Home";
import { Demo } from "./routes/Demo/Demo";

/**
 * 路由配置
 */
function Routes() {
  return useRoutes([
    {
      path: "/",
      element: <Navigate to="/Home" replace={true} />,
    },
    { path: "/Home", element: <Home /> },
    { path: "/Demo", element: <Demo /> },
  ]);
}

export function RoutePages() {
  return (
    <ErrorBoundary key={window.location.hash} fallback={<div>出错了</div>}>
      <Routes></Routes>
    </ErrorBoundary>
  );
}
