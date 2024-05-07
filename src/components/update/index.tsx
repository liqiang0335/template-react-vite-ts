import type { ProgressInfo } from "electron-updater";
import { memo, useEffect } from "react";
import { useReducerWrap } from "@/hook/useReducerWrap";
import { ipc } from "@/utils/ipc";
import { Popover } from "antd";
import { useQuery } from "@tanstack/react-query";
import { fetchUpdateInfo } from "@/utils/api";
import { InfoCircleFilled } from "@ant-design/icons";

interface State {
  updateAvailable: false;
  versionInfo?: VersionInfo;
  updateError?: ErrorType;
  progressInfo?: ProgressInfo;
  downloadOk: boolean;
}

/**
 * 更新信息弹窗
 */
export default function Update() {
  const [state, dispatch] = useReducerWrap<State>({
    updateAvailable: false,
    versionInfo: undefined,
    updateError: undefined,
    progressInfo: undefined,
    downloadOk: false,
  });

  useEffect(() => {
    ipc.on("update-error", (_, updateError) => dispatch({ updateError }));
    ipc.on("download-progress", (_: any, progressInfo) => dispatch({ progressInfo }));
    ipc.on("update-downloaded", () => dispatch({ downloadOk: true }));
    ipc.on("update-available", (_, data: VersionInfo) => {
      console.log("update-available");
      dispatch({ versionInfo: data });
    });
    ipc.on("update-not-available", () => console.log("update-not-available"));
  }, []);

  return (
    <div className="inline-flex items-center select-none ml-2">
      <VersionInfoBar newVersion={state.versionInfo?.newVersion}></VersionInfoBar>
      <Progressbar percent={state.progressInfo?.percent}></Progressbar>
      <InstallButton downloadOk={state.downloadOk}></InstallButton>
      <UpdateErrorInfo message={state.updateError?.message}></UpdateErrorInfo>
    </div>
  );
}

const InstallButton = ({ downloadOk }: { downloadOk: boolean }) => {
  if (!downloadOk) return null;
  const handler = () => ipc.invoke("quit-and-install");
  return (
    <a onClick={handler} className="text-red-500">
      安装新版本
    </a>
  );
};

const UpdateErrorInfo = ({ message }: { message: string | undefined }) => {
  if (!message) return null;
  return (
    <div className="text-red-500">
      <p>更新出错: {message.substring(0, 100) + ".."}</p>
    </div>
  );
};

/**
 * 下载进度条
 */
const Progressbar = ({ percent }: { percent: undefined | number }) => {
  const ok = typeof percent === "number" && percent > 0 && percent < 100;
  if (!ok) return null;

  return (
    <>
      <span className="mr-1">下载更新</span>
      <span>{(percent ?? 0).toString().substring(0, 4)}%</span>
    </>
  );
};

/**
 * 版本更新信息
 */
const VersionInfoBar = memo(({ newVersion }: { newVersion?: string }) => {
  const { data } = useQuery({ queryKey: ["version"], queryFn: fetchUpdateInfo });

  const ok = data && newVersion && data[newVersion];
  if (!ok) return null;

  const Content = () => {
    const list = data[newVersion] || [];
    return (
      <div className="w-[260px] overflow-auto">
        {list.map((item: string, index: number) => (
          <p className="text-xs text-gray-500" key={index}>
            <span className="mr-1">{index + 1}.</span>
            <span>{item}</span>
          </p>
        ))}
      </div>
    );
  };

  return (
    <Popover trigger="click" title={`${newVersion} 更新信息`} content={<Content />}>
      <p className="mx-2 cursor-pointer">
        <InfoCircleFilled />
        <span className="ml-1">新版本:</span>
        <span className="ml-1">{newVersion}</span>
      </p>
    </Popover>
  );
});
