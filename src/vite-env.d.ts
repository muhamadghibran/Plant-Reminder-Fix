/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GEMINI_API_KEY: string;
  // tambahkan variable lain kalau ada
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
