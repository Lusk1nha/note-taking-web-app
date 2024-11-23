"use client";

import { getFontBasedOnValue } from "@/shared/helpers/font-helper";
import { useFontStore } from "@/shared/stores/font-store";
import { useEffect, useState } from "react";

interface IFontProviderProps {
  children: React.ReactNode;
}

export function FontProvider(props: Readonly<IFontProviderProps>) {
  const { children } = props;

  const [isMounted, setIsMounted] = useState(false);

  const { font } = useFontStore((state) => state);
  const { className } = getFontBasedOnValue(font);

  useEffect(() => {
    setIsMounted(true);
  }, [])

  if (!isMounted) {
    return null;
  }

  return <div className={className}>{children}</div>;
}
