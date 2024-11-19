import type { Metadata } from "next";

import "./globals.css";
import { inter, noto_serif, source_code_pro } from "./fonts";

export const metadata: Metadata = {
  title: "Note Taking Web App",
  description: "A simple note taking web app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${noto_serif.variable} ${source_code_pro.variable} ${inter.className}`}
      >
        {children}
      </body>
    </html>
  );
}
