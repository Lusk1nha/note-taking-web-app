import Link from "next/link";
import IconTag from "../icons/icon-tag";
import { cn } from "@/lib/utils";
import { useSearchParams } from "next/navigation";
import IconChevronRight from "../icons/icon-chevron-right";

interface ISearchTagButtonProps {
  className?: string;
  tag: string;
}

export function SearchTagButton(props: Readonly<ISearchTagButtonProps>) {
  const { className, tag } = props;

  const searchParams = useSearchParams();
  const query = searchParams.get("tag");

  const isActive = query === tag;

  return (
    <Link
      href={{
        pathname: "/search",
        query: { tag },
      }}
    >
      <button
        className={cn(
          "w-full h-10 flex items-center justify-between px-3 rounded-8 gap-x-50",
          isActive
            ? "bg-appNeutral text-appTextPrimary"
            : "text-appTextNeutral hover:bg-appNeutral hover:text-appTextPrimary",
          className
        )}
        type="button"
      >
        <div className="flex items-center gap-x-100">
          <IconTag className={cn("w-5 h-5", isActive && "text-appPrimary")} />
          <span className="text-sm font-medium">{tag}</span>
        </div>

        {isActive && <IconChevronRight className="w-6 h-6" />}
      </button>
    </Link>
  );
}
