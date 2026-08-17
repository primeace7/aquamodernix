/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FUNCTIONS_BASE_URL: string;
  readonly VITE_DEVTO_USERNAME: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
