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
