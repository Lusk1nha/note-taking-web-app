"use client";

import { ROUTES } from "@/app/routes";
import { useMemo } from "react";
import { MobilePathButton, PathButton } from "../buttons/path-button";

export function PathButtonRender() {
  const paths = useMemo(() => {
    const desktopRoutes = ROUTES.filter(
      (route) => route.type === "both" || route.type === "desktop"
    );

    return desktopRoutes;
  }, [ROUTES]);

  return (
    <div className="w-full flex flex-col gap-y-50">
      {paths.map((route) => (
        <PathButton
          key={route.path}
          href={route.path}
          label={route.fullName}
          icon={route.icon}
        />
      ))}
    </div>
  );
}

export function MobilePathButtonRender() {
  const paths = useMemo(() => {
    const mobilePaths = ROUTES.filter(
      (route) => route.type === "both" || route.type === "mobile"
    );

    return mobilePaths;
  }, [ROUTES]);

  return (
    <>
      {paths.map((route) => (
        <MobilePathButton
          key={route.path}
          href={route.path}
          label={route.name}
          icon={route.icon}
        />
      ))}
    </>
  );
}
