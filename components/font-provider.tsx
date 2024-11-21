"use client";

import { getFontBasedOnValue } from "@/shared/helpers/font-helper";
import { useFontStore } from "@/shared/stores/font-store";

interface IFontProviderProps {
  children: React.ReactNode;
}

export function FontProvider(props: Readonly<IFontProviderProps>) {
  const { children } = props;

  const { font } = useFontStore((state) => state);
  const { className } = getFontBasedOnValue(font);

  return <div className={className}>{children}</div>;
}
