import { RedirectLogo } from "@/components/redirect-buttons/redirect-logo";
import { PathEnum } from "@/shared/enums/path-enum";

interface IMobileLogoTopProps {
  path: PathEnum;
}

export function MobileLogoTop(props: Readonly<IMobileLogoTopProps>) {
  return (
    <div className="bg-appNeutral w-full h-24 flex items-center px-4 relative">
      <RedirectLogo path={props.path} />
      <div className="bg-appBackground w-full h-3 rounded-t-12 absolute bottom-0 left-0 z-10" />
    </div>
  );
}
