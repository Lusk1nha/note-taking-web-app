import { PathEnum } from "@/shared/enums/path-enum";
import IconLogo from "./icons/logo";
import Link from "next/link";

interface IRedirectLogoProps {
  path: PathEnum;
}

export function RedirectLogo(props: Readonly<IRedirectLogoProps>) {
  const { path } = props;

  return (
    <Link href={path}>
      <IconLogo className="w-[95px] h-7 text-appForeground" />
    </Link>
  );
}
