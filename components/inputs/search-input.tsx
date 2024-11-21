import { cn } from "@/lib/utils";
import IconSearch from "../icons/icon-search";
import { Input } from "../ui/input";

interface ISearchInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export function SearchInput(props: Readonly<ISearchInputProps>) {
  const { className, ...rest } = props;

  return (
    <div className="relative h-fit w-full">
      <IconSearch className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 z-10" />
      <Input
        className={cn(
          "pl-[13%] pr-3 py-2 text-md w-full border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6E23DD] focus:border-transparent",
          className
        )}
        type="text"
        {...rest}
      />
    </div>
  );
}
