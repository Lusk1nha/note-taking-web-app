import { cn } from "@/lib/utils";
import { Children } from "react";

interface IPageHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export function PageHeader(props: Readonly<IPageHeaderProps>) {
  const { children, className } = props;

  return (
    <header className={cn("w-full h-fit flex items-center", className)}>
      {children}
    </header>
  );
}
