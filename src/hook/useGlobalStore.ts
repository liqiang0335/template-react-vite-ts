import { create } from "zustand";
import { persist } from "zustand/middleware";

type AddDispatch<T> = {
  dispatch: (data: {
    [key in keyof T]?: T[key];
  }) => void;
} & T;

export interface GlobalStore {
  checkModels: string[]; // 选中的模型
}

/**
 * 全局store
 */
export const useGlobalStore = create<AddDispatch<GlobalStore>>()(
  persist(
    (set, get) => ({
      checkModels: [],
      dispatch: (data) => {
        set(data);
      },
    }),
    { name: "global-store" },
  ),
);
