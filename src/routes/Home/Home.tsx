import { Button } from "antd";
import { Link } from "react-router-dom";
/**
 * 首页
 */
export function Home() {
  return (
    <div className="space-x-2 p-2">
      <span>这里是首页</span>
      <Link to="/Demo" className="text-red-500 ">
        <Button>Demo</Button>
      </Link>
    </div>
  );
}
