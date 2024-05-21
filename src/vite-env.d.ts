/// <reference types="vite/client" />

interface Window {
  token?: string; // token
}

interface ImportMetaEnv {
  readonly VITE_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

type AddDispatch<T> = {
  dispatch: (data: {
    [key in keyof T]?: T[key];
  }) => void;
} & T;
