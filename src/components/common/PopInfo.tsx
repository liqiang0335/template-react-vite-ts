import { Popover } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";

export function PopInfo({ children }: { children: React.ReactNode }) {
  return (
    <Popover trigger="hover" content={children}>
      <span className="mr-1 relative top-[-1px]">
        <QuestionCircleOutlined style={{ fontSize: "15px" }} />
      </span>
    </Popover>
  );
}
