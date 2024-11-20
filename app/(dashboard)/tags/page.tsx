"use client";

import { FloatingButton } from "@/components/buttons/floating-button";

import { TagButtonRender } from "@/components/redirect-buttons/tag-button-render";

export default function Tags() {
  return (
    <main className="w-full flex flex-col flex-1 relative p-4 pt-2 gap-200">
      <h2 className="text-2xl font-bold">Tags</h2>
      <TagButtonRender variant="mobile" />

      <FloatingButton onClick={() => console.log("teste")} />
    </main>
  );
}
