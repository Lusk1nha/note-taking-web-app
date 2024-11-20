import { cn } from "@/lib/utils";

interface IPageMainProps {
  className?: string;
  children?: React.ReactNode;
}

function PageMain(props: Readonly<IPageMainProps>) {
  const { children, className } = props;

  return <main className={cn("w-full h-full", className)}>{children}</main>;
}

export default PageMain;
