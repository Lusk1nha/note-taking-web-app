import { cn } from "@/lib/utils";

interface IPageHeaderProps {
  title: string;
  className?: string;
}

export function PageHeader(props: Readonly<IPageHeaderProps>) {
  const { title, className } = props;

  return (
    <header
      className={cn(
        "w-full lg:h-20 flex items-center lg:px-8 lg:border-b border-border",
        className
      )}
    >
      <h1 title={title} className="text-2xl font-bold">
        {title}
      </h1>
    </header>
  );
}
