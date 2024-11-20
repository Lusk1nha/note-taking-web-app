"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider(
  props: Readonly<React.ComponentProps<typeof NextThemesProvider>>
) {
  const { children } = props;
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
