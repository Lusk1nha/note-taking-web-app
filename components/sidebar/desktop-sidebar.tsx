import IconLogo from "../icons/logo";
import IconHome from "../icons/icon-home";
import IconArchive from "../icons/icon-archive";

import { PathButton } from "../buttons/path-button";
import { SearchTagButton } from "../buttons/search-tag-button";

export function DesktopSidebar() {
  return (
    <aside className="w-[272px] h-full flex flex-col border-r border-appBorder gap-y-4">
      <div className="py-6 px-4">
        <IconLogo className="w-[95px] h-7 text-appForeground" />
      </div>

      <nav className="w-full h-full flex flex-col flex-1 gap-y-2 px-4">
        <div className="w-full flex flex-col gap-y-50">
          <PathButton href="/" label="All Notes" icon={IconHome} />
          <PathButton
            href="/archived"
            label="Archived Notes"
            icon={IconArchive}
          />
        </div>

        <div className="w-full flex flex-col border-t border-border p-100 gap-y-100">
          <h4 className="font-medium text-appTextTertiary text-sm">Tags</h4>

          <div className="w-full flex flex-col gap-y-50">
            <SearchTagButton tag="Design" />
            <SearchTagButton tag="Design 2" />
            <SearchTagButton tag="Design 3" />
            <SearchTagButton tag="Design 4" />
          </div>
        </div>
      </nav>
    </aside>
  );
}
