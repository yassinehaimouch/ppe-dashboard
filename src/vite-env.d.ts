/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WORKERS_API: string;
  readonly VITE_PRODUCTS_API: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}