import { cn } from "@/lib/utils";

interface IPageWrapperProps {
  className?: string;
  children?: React.ReactNode;
}

function PageWrapper(props: Readonly<IPageWrapperProps>) {
  const { children, className } = props;

  return (
    <section
      className={cn(
        "w-full flex flex-col flex-1 relative p-4 pt-2 lg:pt-0 lg:p-0 gap-200",
        className
      )}
    >
      {children}
    </section>
  );
}

export default PageWrapper;
