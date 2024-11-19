"use client";

import { DesktopSidebar } from "./desktop-sidebar";

export function Sidebar() {
  return (
    <>
      <div id="mobile-bottom-sidebar" className="lg:hidden">
        Mobile
      </div>

      <div id="desktop-sidebar" className="relative hidden lg:block">
        <DesktopSidebar />
      </div>
    </>
  );
}
