import { PathEnum } from "@/shared/enums/path-enum";
import Link from "next/link";

export function ContentSettings({
  children,
}: Readonly<{ children?: React.ReactNode }>) {
  return (
    <>
      <DesktopSettings>{children}</DesktopSettings>
      <MobileSettings>{children}</MobileSettings>
    </>
  );
}

export function DesktopSettings({
  children,
}: Readonly<{ children?: React.ReactNode }>) {
  return <div className="hidden lg:flex">{children}</div>;
}

export function MobileSettings({
  children,
}: Readonly<{ children?: React.ReactNode }>) {
  return (
    <div className="flex flex-col lg:hidden">
      <Link href={PathEnum.Settings}>Settings</Link>
      {children}
    </div>
  );
}
