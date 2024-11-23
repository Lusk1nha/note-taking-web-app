"use client";

import { SETTINGS_ROUTES } from "@/app/routes";

import { PathButton } from "@/components/buttons/path-button";
import { SettingsButton } from "@/components/buttons/settings-button";
import IconLogout from "@/components/icons/icon-logout";
import { SearchInput } from "@/components/inputs/search-input";
import { PageHeader } from "@/components/page-elements/page-header";
import PageMain from "@/components/page-elements/page-main";
import { PageTop } from "@/components/page-elements/page-top";
import PageWrapper from "@/components/page-elements/page-wrapper";
import { PathButtonRender } from "@/components/redirect-buttons/path-button-render";

export default function Page() {
  return (
    <PageWrapper className="gap-150 lg:gap-0">
      <PageHeader className="flex flex-col items-start gap-150">
        <PageTop className="hidden lg:flex" title="Settings">
          <SearchInput
            className="w-[300px] h-11 rounded-8 text-appTextTertiary border-border text-sm font-normal"
            placeholder="Search by title, content, or tags…"
          />

          <SettingsButton />
        </PageTop>
      </PageHeader>

      <PageMain className="flex flex-col lg:grid grid-cols-[258px_3fr] grid-rows-[repeat(5,1fr)] gap-x-0 gap-y-0">
        <div className="hidden lg:block w-full pb-2 lg:border-b border-border col-[1] row-[1_/_6] lg:border-r lg:py-5 lg:pl-8 lg:pr-4">
          <div className="border-b pb-2 mb-2">
            <PathButtonRender routes={SETTINGS_ROUTES} />
          </div>

          <PathButton href="/logout" label="Logout" icon={IconLogout} />
        </div>
      </PageMain>
    </PageWrapper>
  );
}
