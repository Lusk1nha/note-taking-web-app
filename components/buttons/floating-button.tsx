"use client";

import { cn } from "@/lib/utils";
import IconPlus from "../icons/icon-plus";

interface IFloatingButtonProps {
  className?: string;
  onClick?: () => void;
}

export function FloatingButton(props: Readonly<IFloatingButtonProps>) {
  const { className, onClick } = props;

  return (
    <div className="absolute bottom-4 md:bottom-8 right-4 md:right-8">
      <button
        className={cn(
          "bg-appPrimary w-12 md:w-16 h-12 md:h-16 flex items-center justify-center rounded-full hover:bg-",
          className
        )}
        onClick={onClick}
      >
        <IconPlus className="w-8 h-8 text-white" />
      </button>
    </div>
  );
}
