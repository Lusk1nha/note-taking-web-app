"use client";

import { FloatingButton } from "@/components/buttons/floating-button";

import { PageTop } from "@/components/page-elements/page-top";

import PageWrapper from "@/components/page-elements/page-wrapper";

import { TagButtonRender } from "@/components/redirect-buttons/tag-button-render";

export default function Tags() {
  return (
    <PageWrapper>
      <PageTop title="Tags" />
      <TagButtonRender variant="mobile" />
      <FloatingButton onClick={() => console.log("teste")} />
    </PageWrapper>
  );
}
