import { cn } from "@/lib/utils";

interface ISettingsWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export function SettingsWrapper(props: Readonly<ISettingsWrapperProps>) {
  const { children, className } = props;

  return (
    <section
      className={cn(
        "lg:max-w-[528px] w-full flex flex-col lg:p-8 gap-400",
        className
      )}
    >
      {children}
    </section>
  );
}
