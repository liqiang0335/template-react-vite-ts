import zhCN from "antd/es/locale/zh_CN";
import { ConfigProvider, App } from "antd";

/**
 * 根组件
 */
export function AntConfig({ children }: { children: React.ReactNode }) {
  return (
    <ConfigProvider
      locale={zhCN}
      componentSize="middle"
      theme={{
        token: {
          colorPrimary: "#2c2c2c", // 主色
          borderRadius: 2, // 圆角
        },
        components: {
          Select: {
            controlOutline: "none", // 控制项边框
            controlItemBgActive: "#fcfcfc", // 选中项背景色
          },
          Button: {
            defaultShadow: "none", // 默认按钮阴影
            primaryShadow: "none", // 主要按钮阴影
            dangerShadow: "none", // 危险按钮阴影
          },
          Input: {
            controlOutline: "none", // 控制项边框
          },
          InputNumber: {
            controlOutline: "none", // 控制项边框
          },
        },
      }}
    >
      <App className="h-full">{children}</App>
    </ConfigProvider>
  );
}
