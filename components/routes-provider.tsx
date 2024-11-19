import { ThemeProvider } from "./theme-provider";

export function RoutesProvider(props: Readonly<{ children: React.ReactNode }>) {
  const { children } = props;
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}
