import { useRoutes, Navigate } from "react-router-dom";
import { Home } from "./routes/Home/Home";
import { Demo } from "./routes/Demo/Demo";

/**
 * 路由配置
 */
export function RoutePages() {
  return useRoutes([
    {
      path: "/",
      element: <Navigate to="/Home" replace={true} />,
    },
    { path: "/Home", element: <Home /> },
    { path: "/Demo", element: <Demo /> },
  ]);
}
