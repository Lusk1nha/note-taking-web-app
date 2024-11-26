import { FontThemeForm } from "@/components/forms/font-theme-form";
import { SettingsHeader } from "@/app/(dashboard)/settings/_components/settings-header";
import { SettingsWrapper } from "@/app/(dashboard)/settings/_components/settings-wrapper";

export default function FontTheme() {
  return (
    <SettingsWrapper>
      <SettingsHeader
        title="Font Theme"
        description="Choose your font theme:"
      />

      <div className="w-full">
        <FontThemeForm />
      </div>
    </SettingsWrapper>
  );
}
