/// <reference types="vite/client" />

declare module "*.css?url" {
  const content: string;
  export default content;
}

declare module "@tanstack/react-start/server-entry" {
  const entry: {
    fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
  };
  export default entry;
}

declare module "@vitejs/plugin-react" {
  import type { PluginOption } from "vite";
  export default function react(options?: unknown): PluginOption[];
}