import { useRoutes, Navigate } from "react-router-dom";
import { Home } from "./routes/Home/Home";

/**
 * 页面
 */

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
  ]);
}
