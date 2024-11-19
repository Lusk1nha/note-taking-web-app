import { Inter, Noto_Serif, Source_Code_Pro } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--sans",
});

export const noto_serif = Noto_Serif({
  subsets: ["latin"],
  display: "swap",
  variable: "--serif",
});

export const source_code_pro = Source_Code_Pro({
  subsets: ["latin"],
  display: "swap",
  variable: "--mono",
});
