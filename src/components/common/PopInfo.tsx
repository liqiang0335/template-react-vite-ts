import { Popover } from "antd";
import SVGQuestion from "./icon/SVGQuestion";

export function PopInfo({ children, fill = "#717171" }: { children: React.ReactNode; fill?: string }) {
  const Content = () => {
    return <div>{children}</div>;
  };

  return (
    <Popover trigger="hover" content={<Content />}>
      <span className="mr-1 relative top-[-1px]">
        <SVGQuestion size={15}></SVGQuestion>
      </span>
    </Popover>
  );
}

export function PopInfoContext() {
  return (
    <PopInfo>
      <div className="text-gray-500 text-xs w-[250px]">
        在提问时，以往的问答内容会一起提交给GPT参考。如果新旧问题并无关联，建议您开启新的对话(点击数字)，既可以节省费用，回答又准确高效。
      </div>
    </PopInfo>
  );
}
