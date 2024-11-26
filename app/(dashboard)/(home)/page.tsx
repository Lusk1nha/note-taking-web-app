import { SettingsButton } from "@/components/buttons/settings-button";
import { SearchInput } from "@/components/inputs/search-input";
import { PageTop } from "@/components/page-elements/page-top";
import PageWrapper from "@/components/page-elements/page-wrapper";

export default function HomePage() {
  return (
    <PageWrapper>
      <PageTop title="All Notes">
        <SearchInput
          className="w-[300px] h-11 rounded-8 text-appTextTertiary border-border text-sm font-normal"
          placeholder="Search by title, content, or tags…"
        />

        <SettingsButton />
      </PageTop>
    </PageWrapper>
  );
}
