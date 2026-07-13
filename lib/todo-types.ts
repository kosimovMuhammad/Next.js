// ---------------------------------------------------------------------------
// Shared types + the image-URL helper, split out of lib/api.ts so Client
// Components (e.g. components/TodoImages.tsx) can import `imageUrl` without
// pulling in lib/api.ts's `import "server-only"` guard, which would fail
// the build the moment anything client-side touched that module — even a
// pure string helper with no fetch/network code in it.
// ---------------------------------------------------------------------------

const API_BASE = "https://to-dos-api.softclub.tj";
const IMAGE_BASE = `${API_BASE}/images`;

export type TodoImage = {
  id: number;
  imageName: string;
};

export type Todo = {
  id: number;
  name: string;
  description: string;
  isCompleted: boolean;
  images: TodoImage[];
};

export function imageUrl(imageName: string): string {
  return `${IMAGE_BASE}/${imageName}`;
}
