import { Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

/**
 * 操作确认
 */
export function confirmer(content = "确定要删除吗", title = "操作确认") {
  return new Promise((resolve, reject) => {
    Modal.confirm({
      okText: "确定",
      cancelText: "取消",
      icon: <ExclamationCircleOutlined style={{ color: "red" }} />,
      title: title,
      content: content,
      async onOk() {
        resolve(true);
      },
      onCancel() {
        reject();
      },
    });
  });
}
