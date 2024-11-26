import { SETTINGS_ROUTES } from "@/app/routes";

import { PathButton } from "@/components/buttons/path-button";
import IconLogout from "@/components/icons/icon-logout";
import PageMain from "@/components/page-elements/page-main";
import { PathButtonRender } from "@/components/redirect-buttons/path-button-render";

export default function Page() {
  return (
    <PageMain className="flex flex-col lg:grid grid-cols-[258px_3fr] grid-rows-[repeat(5,1fr)] gap-x-0 gap-y-0">
      <div className="hidden lg:block w-full pb-2 lg:border-b border-border col-[1] row-[1_/_6] lg:border-r lg:py-5 lg:pl-8 lg:pr-4">
        <div className="border-b pb-2 mb-2">
          <PathButtonRender routes={SETTINGS_ROUTES} />
        </div>

        <PathButton href="/logout" label="Logout" icon={IconLogout} />
      </div>
    </PageMain>
  );
}
