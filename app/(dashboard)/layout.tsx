import { MobileLogoTop } from "@/components/mobile-logo-top";

import { GlobalSidebar } from "@/components/sidebar/global-sidebar";
import { PathEnum } from "@/shared/enums/path-enum";

export default function Dashboard({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-appBackground w-full h-screen relative flex pb-14 md:pb-[74px] lg:pb-0">
      <GlobalSidebar />

      <div className="w-full min-h-full flex flex-col flex-1">
        <div className="flex lg:hidden z-0">
          <MobileLogoTop path={PathEnum.Home} />
        </div>

        <div className="h-full flex flex-col">{children}</div>
      </div>
    </div>
  );
}
