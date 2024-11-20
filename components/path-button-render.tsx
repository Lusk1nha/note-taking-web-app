"use client";

import { ROUTES } from "@/app/routes";
import { useMemo } from "react";
import { PathButton } from "./buttons/path-button";

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
