import { componentConfig } from "@/config";
import { H5 } from "@/packages/ui";
import React, { HTMLAttributes } from "react";

interface IComponentShowcase extends HTMLAttributes<HTMLDivElement> {
  name: keyof typeof componentConfig.registry;
}

export function ComponentShowcase({ name }: IComponentShowcase) {
  const { preview: Preview, codeHtml } = componentConfig.registry[name];
  return (
    <div className="space-y-6">
      <div>
        <H5>Preview</H5>
        <div className="mt-2 border rounded p-6">
          <Preview />
        </div>
      </div>

      <div>
        <H5>Code</H5>
        <div className="mt-2 border relative rounded p-6 bg-[#222222] text-zinc-200 overflow-auto">
          <code>
            <pre>{codeHtml}</pre>
          </code>
        </div>
      </div>
    </div>
  );
}