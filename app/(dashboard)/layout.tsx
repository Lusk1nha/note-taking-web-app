import { RedirectLogo } from "@/components/redirect-buttons/redirect-logo";
import { Sidebar } from "@/components/sidebar/sidebar";
import { PathEnum } from "@/shared/enums/path-enum";

export default function Dashboard({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-appBackground w-full h-screen relative flex pb-14 md:pb-[74px] lg:pb-0">
      <Sidebar />

      <div className="w-full min-h-full flex flex-col flex-1">
        <div className="flex lg:hidden z-0">
          <MobileLogoTop />
        </div>

        {children}
      </div>
    </div>
  );
}

function MobileLogoTop() {
  return (
    <div className="bg-appNeutral w-full h-24 flex items-center px-4 relative">
      <RedirectLogo path={PathEnum.Home} />
      <div className="bg-appBackground w-full h-3 rounded-t-12 absolute bottom-0 left-0 z-10" />
    </div>
  );
}
