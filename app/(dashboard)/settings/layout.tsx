import { SettingsButton } from "@/components/buttons/settings-button";
import { SearchInput } from "@/components/inputs/search-input";
import { PageHeader } from "@/components/page-elements/page-header";
import { PageTop } from "@/components/page-elements/page-top";
import PageWrapper from "@/components/page-elements/page-wrapper";
import { ContentSettings } from "./_components/content-settings";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <PageWrapper>
      <PageHeader className="flex flex-col items-start gap-150">
        <PageTop className="hidden lg:flex" title="Settings">
          <SearchInput
            className="w-[300px] h-11 rounded-8 text-appTextTertiary border-border text-sm font-normal"
            placeholder="Search by title, content, or tags…"
          />

          <SettingsButton />
        </PageTop>
      </PageHeader>

      <ContentSettings>{children}</ContentSettings>
    </PageWrapper>
  );
}
