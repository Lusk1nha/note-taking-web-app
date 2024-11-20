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
          "w-full h-10 flex items-center justify-between px-3 rounded-8 gap-x-100 overflow-hidden",
          isActive
            ? "bg-appNeutral text-appTextPrimary"
            : "text-appTextNeutral hover:bg-appNeutral hover:text-appTextPrimary",
          className
        )}
        type="button"
      >
        <IconTag
          className={cn("min-w-5 min-h-5", isActive && "text-appPrimary")}
        />

        <div className="w-full flex justify-between items-center gap-x-100">
          <p className="text-left text-ellipsis text-sm font-medium flex-1 max-w-[160px] overflow-hidden whitespace-nowrap">
            {tag}
          </p>

          {isActive && <IconChevronRight className="min-w-6 min-h-6" />}
        </div>
      </button>
    </Link>
  );
}
