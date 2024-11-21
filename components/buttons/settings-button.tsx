import { PathEnum } from "@/shared/enums/path-enum";
import Link from "next/link";
import { Button } from "../ui/button";
import IconSettings from "../icons/icon-settings";
import { cn } from "@/lib/utils";

interface ISettingsButtonProps {
  className?: string;
}

export function SettingsButton(props: Readonly<ISettingsButtonProps>) {
  const { className } = props;

  return (
    <Link href={PathEnum.Settings}>
      <Button
        className={cn("w-11 h-11 text-appTextTertiary", className)}
        type="button"
        variant="ghost"
      >
        <IconSettings className="h-6 w-6" />
      </Button>
    </Link>
  );
}
