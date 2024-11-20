"use client";

import { SETTINGS_ROUTES } from "@/app/routes";
import { PageHeader } from "@/components/page-elements/page-header";
import PageMain from "@/components/page-elements/page-main";

import PageWrapper from "@/components/page-elements/page-wrapper";
import { PathButtonRender } from "@/components/redirect-buttons/path-button-render";

export default function Settings() {
  return (
    <PageWrapper>
      <PageHeader title="Settings" />
      <PageMain>
        <div className="w-full pb-2 border-b border-border">
          <PathButtonRender routes={SETTINGS_ROUTES} />
        </div>
      </PageMain>
    </PageWrapper>
  );
}
