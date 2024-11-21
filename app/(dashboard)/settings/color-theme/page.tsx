import { ColorThemeForm } from "@/components/forms/color-theme-form";

export default function Page() {
  return (
    <section className="max-w-[528px] w-full flex flex-col p-8 gap-400">
      <div className="flex flex-col gap-50">
        <h2 className="text-base font-medium text-appTextPrimary">
          Color Theme
        </h2>
        <p className="text-sm text-appTextSecondary">
          Choose your color theme:
        </p>
      </div>

      <div className="w-full">
        <ColorThemeForm />
      </div>
    </section>
  );
}
