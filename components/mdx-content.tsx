import * as runtime from "react/jsx-runtime";
import { runSync, type RunOptions } from "@mdx-js/mdx";
import type { MDXComponents } from "mdx/types";

interface MDXContentProps {
  code: string;
  components?: MDXComponents;
}

export function MDXContent({ code, components }: MDXContentProps) {
  const { default: Content } = runSync(code, runtime as unknown as RunOptions);
  return <Content components={components} />;
}
