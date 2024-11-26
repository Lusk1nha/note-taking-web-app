import PageMain from "@/components/page-elements/page-main";
import { PathSettings } from "../_components/path-settings";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <PageMain className="flex flex-col lg:grid grid-cols-[258px_3fr] grid-rows-[repeat(5,1fr)] gap-x-0 gap-y-0">
      <div className="hidden lg:flex col-[1] row-[1_/_6]">
        <PathSettings />
      </div>

      <div>{children}</div>
    </PageMain>
  );
}
