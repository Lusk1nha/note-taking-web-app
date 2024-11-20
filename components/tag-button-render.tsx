"use client";

import { MockupHelper } from "@/shared/helpers/mockup-helper";
import { faker } from "@faker-js/faker";
import { useEffect, useMemo, useState } from "react";
import { SearchTagButton } from "./buttons/search-tag-button";

interface ISearchTagButtonProps {
  label: string;
}

export function TagButtonRender(props: Readonly<ISearchTagButtonProps>) {
  const { label } = props;

  const [isMounted, setIsMounted] = useState(false);

  const { createArrayByLength } = new MockupHelper();

  const tags = useMemo(() => {
    const response = createArrayByLength(10, () => faker.commerce.product());
    response.sort((a, b) => a.localeCompare(b));

    return response;
  }, []);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <section>
      <h4 className="font-medium text-appTextTertiary text-sm p-100">
        {label}
      </h4>

      <ul className="max-h-[565px] w-full flex flex-col gap-y-50 overflow-auto">
        {tags.map((tag) => (
          <li key={tag} className="w-full">
            <SearchTagButton tag={tag} />
          </li>
        ))}
      </ul>
    </section>
  );
}
