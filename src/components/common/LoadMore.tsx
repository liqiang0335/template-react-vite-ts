import { LoadingOutlined } from "@ant-design/icons";

/**
 * 加载更多
 */
export function LoadMore({ isPending, hasNextPage, onClick }: { isPending: boolean; hasNextPage: boolean; onClick: () => void }) {
  if (!hasNextPage) {
    return <div className="text-center text-sm py-2 text-gray-400 select-none">没有更多数据</div>;
  }

  if (isPending) {
    return (
      <div className="text-center my-2 text-gray-300 select-none">
        <LoadingOutlined />
      </div>
    );
  }

  return (
    <div className="text-center text-sm pt-2 pb-8 text-gray-400 select-none" onClick={onClick}>
      <span className="cursor-pointer">加载更多</span>
    </div>
  );
}
