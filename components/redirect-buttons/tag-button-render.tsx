"use client";

import { MockupHelper } from "@/shared/helpers/mockup-helper";
import { faker } from "@faker-js/faker";
import { useEffect, useMemo, useState } from "react";
import { SearchTagButton } from "../buttons/search-tag-button";
import { cn } from "@/lib/utils";

export type Variant = "desktop" | "mobile";
interface ITagButtonRenderProps {
  variant?: Variant;
  className?: string;
}

export function TagButtonRender(props: Readonly<ITagButtonRenderProps>) {
  const { variant = "desktop", className } = props;

  const [isMounted, setIsMounted] = useState(false);

  const { createArrayByLength } = new MockupHelper();

  const tags = useMemo(() => {
    const response = createArrayByLength(0, () => faker.commerce.product());
    response.sort((a, b) => a.localeCompare(b));

    return response;
  }, []);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  if (tags.length === 0) {
    return (
      <p className="py-4 text-appTextPrimary font-medium text-sm text-center">
        No tags found
      </p>
    );
  }

  return (
    <ul
      className={cn(
        "max-h-[565px] w-full flex flex-col gap-y-50 overflow-auto",
        className
      )}
    >
      {tags.map((tag) => (
        <li
          key={tag}
          className={cn(
            "w-full",
            variant === "mobile" && "border-b border-border last:border-none"
          )}
        >
          <SearchTagButton variant={variant} tag={tag} />
        </li>
      ))}
    </ul>
  );
}
