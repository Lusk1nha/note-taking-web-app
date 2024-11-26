import IconLogo from "@/components/icons/logo";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="w-full min-h-screen p-2 flex flex-col gap-200 items-center justify-center">
      <IconLogo className="w-32 h-20" />
      {children}
    </div>
  );
}
