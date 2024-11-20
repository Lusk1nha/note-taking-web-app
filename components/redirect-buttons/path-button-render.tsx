"use client";

import { RouteSchema } from "@/app/routes";
import { useMemo } from "react";
import { MobilePathButton, PathButton } from "../buttons/path-button";

interface IPathButtonRenderProps {
  routes: RouteSchema[];
}

export function PathButtonRender(props: Readonly<IPathButtonRenderProps>) {
  const { routes } = props;
  const paths = useMemo(() => {
    const desktopRoutes = routes.filter(
      (route) => route.type === "both" || route.type === "desktop"
    );

    return desktopRoutes;
  }, [routes]);

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

export function MobilePathButtonRender(
  props: Readonly<IPathButtonRenderProps>
) {
  const { routes } = props;
  const paths = useMemo(() => {
    const mobilePaths = routes.filter(
      (route) => route.type === "both" || route.type === "mobile"
    );

    return mobilePaths;
  }, [routes]);

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
