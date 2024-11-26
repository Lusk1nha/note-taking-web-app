import { ColorThemeForm } from "@/components/forms/color-theme-form";
import { SettingsHeader } from "@/app/(dashboard)/settings/_components/settings-header";
import { SettingsWrapper } from "@/app/(dashboard)/settings/_components/settings-wrapper";

export default function ColorTheme() {
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
