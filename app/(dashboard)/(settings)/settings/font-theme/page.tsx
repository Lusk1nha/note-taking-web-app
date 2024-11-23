"use client";

import { FontThemeForm } from "@/components/forms/font-theme-form";
import { SettingsHeader } from "@/components/settings/settings-header";
import { SettingsWrapper } from "@/components/settings/settings-wrapper";

export default function Page() {
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
