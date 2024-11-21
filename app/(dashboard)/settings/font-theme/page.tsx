"use client";

import { FontThemeForm } from "@/components/forms/font-theme-form";

export default function Page() {
  return (
    <section className="max-w-[528px] w-full flex flex-col p-8 gap-400">
      <div className="flex flex-col gap-50">
        <h2 className="text-base font-medium text-appTextPrimary">
          Font Theme
        </h2>
        <p className="text-sm text-appTextSecondary">Choose your font theme:</p>
      </div>

      <div className="w-full">
        <FontThemeForm />
      </div>
    </section>
  );
}
