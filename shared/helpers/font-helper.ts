import { NextFontWithVariable } from "next/dist/compiled/@next/font";
import { FontValues } from "../stores/font-store";
import { inter, noto_serif, source_code_pro } from "@/app/fonts";

export function getFontBasedOnValue(value: FontValues): NextFontWithVariable {
  switch (value) {
    case "sans-serif":
      return inter;
    case "serif":
      return noto_serif;
    case "mono":
      return source_code_pro;

    default:
      return inter;
  }
}
