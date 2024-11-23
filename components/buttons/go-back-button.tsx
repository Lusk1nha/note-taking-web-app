import { PathEnum } from "@/shared/enums/path-enum";
import { Button } from "../ui/button";
import Link from "next/link";
import IconArrowLeft from "../icons/icon-arrow-left";
import { cn } from "@/lib/utils";

interface IGoBackButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  path: PathEnum;
}

export function GoBackButton(props: Readonly<IGoBackButtonProps>) {
  const { path, className, children, ...rest } = props;
  return (
    <Link href={path}>
      <Button className={cn("gap-100", className)} variant="ghost" {...rest}>
        <IconArrowLeft className="w-4 h-4" />
        {children}
      </Button>
    </Link>
  );
}
