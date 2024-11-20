import { MobilePathButtonRender } from "../redirect-buttons/path-button-render";

export function MobileSidebar() {
  return (
    <div className="bg-appBackground w-full h-14 md:h-[74px] fixed bottom-0 border-t border-border shadow-lg z-40">
      <nav className="w-full h-full flex items-center justify-center md:justify-evenly p-3">
        <MobilePathButtonRender />
      </nav>
    </div>
  );
}