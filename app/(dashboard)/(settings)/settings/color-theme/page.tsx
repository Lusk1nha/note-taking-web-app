import { ColorThemeForm } from "@/components/forms/color-theme-form";
import { SettingsHeader } from "@/components/settings/settings-header";
import { SettingsWrapper } from "@/components/settings/settings-wrapper";

export default function Page() {
  return (
    <SettingsWrapper>
      <SettingsHeader
        title="Color Theme"
        description="Choose your color theme:"
      />

      <div className="w-full">
        <ColorThemeForm />
      </div>
    </SettingsWrapper>
  );
}
