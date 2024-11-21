"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "./theme-provider";
import { Toaster } from "./ui/toaster";
import { queryClient } from "@/shared/helpers/react-query";
import { FontProvider } from "./font-provider";

export function RoutesProvider(props: Readonly<{ children: React.ReactNode }>) {
  const { children } = props;

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <FontProvider>
        <QueryClientProvider client={queryClient}>
          {children}
          <Toaster />
        </QueryClientProvider>
      </FontProvider>
    </ThemeProvider>
  );
}
