"use client";

import { DesktopSidebar } from "./desktop-sidebar";
import { MobileSidebar } from "./mobile-sidebar";

export function Sidebar() {
  return (
    <>
      <div id="mobile-bottom-sidebar" className="lg:hidden">
        <MobileSidebar />
      </div>

      <div id="desktop-sidebar" className="relative hidden lg:block">
        <DesktopSidebar />
      </div>
    </>
  );
}
