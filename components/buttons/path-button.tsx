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
          <Icon className={cn("w-5 h-5", isActive && "text-appPrimary")} />
          <span className="text-sm font-medium">{label}</span>
        </div>

        {isActive && <IconChevronRight className="w-6 h-6" />}
      </button>
    </Link>
  );
}

export function MobilePathButton(props: Readonly<IPathButtonProps>) {
  const { className, href, label, icon: Icon } = props;
  const pathname = usePathname();

  const isActive = href === pathname;

  return (
    <div className="max-w-16 md:max-w-none w-full h-full flex items-center justify-center md:border-r border-border last:border-none">
      <Link
        className="w-full max-w-16 md:max-w-20 h-full flex flex-1 "
        href={href}
        title={label}
      >
        <button
          className={cn(
            "w-full h-full py-50 rounded-4",
            isActive
              ? "bg-appPrimaryTranslucent text-appPrimary"
              : "text-appTextNeutral",
            className
          )}
          type="button"
        >
          <div className="flex flex-col items-center gap-y-50">
            <Icon className={cn("w-5 h-5", isActive && "text-appPrimary")} />
            <span className="hidden md:block text-xs font-normal text-center">
              {label}
            </span>
          </div>
        </button>
      </Link>
    </div>
  );
}
