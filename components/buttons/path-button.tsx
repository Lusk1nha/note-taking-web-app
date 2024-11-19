"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import IconChevronRight from "../icons/icon-chevron-right";
import { usePathname } from "next/navigation";
import {
  ForwardRefExoticComponent,
  MemoExoticComponent,
  RefAttributes,
  SVGProps,
} from "react";

interface IPathButtonProps {
  className?: string;
  href: string;
  label: string;
  icon: MemoExoticComponent<
    ForwardRefExoticComponent<
      Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>
    >
  >;
}

export function PathButton(props: Readonly<IPathButtonProps>) {
  const { className, href, label, icon: Icon } = props;
  const pathname = usePathname();

  const isActive = href === pathname;

  return (
    <Link href={href}>
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
          <Icon
            className={cn(
              "w-5 h-5",
              isActive && "text-appPrimary"
            )}
          />
          <span className="text-sm font-medium">{label}</span>
        </div>

        {isActive && <IconChevronRight className="w-6 h-6" />}
      </button>
    </Link>
  );
}
