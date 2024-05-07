import { Link } from "react-router-dom";

export function Demo() {
  return (
    <div className="space-x-3 p-2">
      <span>这里时Demo页面</span>
      <Link to="/" className="text-red-500">
        返回首页
      </Link>
    </div>
  );
}
