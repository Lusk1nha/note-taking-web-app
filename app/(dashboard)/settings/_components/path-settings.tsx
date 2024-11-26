import { SETTINGS_ROUTES } from "@/app/routes";
import { PathButton } from "@/components/buttons/path-button";
import IconLogout from "@/components/icons/icon-logout";
import { PathButtonRender } from "@/components/redirect-buttons/path-button-render";

export function PathSettings() {
  return (
    <div className="w-full pb-2 lg:border-b border-border lg:border-r lg:py-5 lg:pl-8 lg:pr-4">
      <div className="border-b pb-2 mb-2">
        <PathButtonRender routes={SETTINGS_ROUTES} />
      </div>

      <PathButton href="/logout" label="Logout" icon={IconLogout} />
    </div>
  );
}
