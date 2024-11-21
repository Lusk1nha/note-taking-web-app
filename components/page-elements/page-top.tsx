import { cn } from "@/lib/utils";

interface IPageTopProps {
  className?: string;
  title: string;

  children?: React.ReactNode;
}

export function PageTop(props: Readonly<IPageTopProps>) {
  const { title, className, children } = props;

  return (
    <section
      className={cn(
        "w-full lg:h-20 flex items-center lg:px-8 lg:border-b border-border",
        className
      )}
    >
      <div className="w-full h-full flex justify-between items-center gap-200">
        <h1 title={title} className="text-2xl font-bold">
          {title}
        </h1>

        <div className="hidden lg:flex gap-200">{children}</div>
      </div>
    </section>
  );
}
