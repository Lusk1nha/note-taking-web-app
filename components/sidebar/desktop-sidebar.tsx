import { TagButtonRender } from "../redirect-buttons/tag-button-render";

import { RedirectLogo } from "../redirect-buttons/redirect-logo";
import { PathEnum } from "@/shared/enums/path-enum";
import { PathButtonRender } from "../redirect-buttons/path-button-render";

export function DesktopSidebar() {
  return (
    <aside className="w-[272px] min-h-full flex flex-col border-r border-appBorder gap-y-4 pb-4">
      <div className="py-6 px-4">
        <RedirectLogo path={PathEnum.Home} />
      </div>

      <nav className="w-full h-full flex flex-col flex-1 gap-y-2 px-4">
        <PathButtonRender />

        <div className="w-full flex flex-col border-t border-border gap-y-100">
          <section>
            <h4 className="font-medium text-appTextTertiary text-sm p-100">
              Tags
            </h4>

            <TagButtonRender />
          </section>
        </div>
      </nav>
    </aside>
  );
}
