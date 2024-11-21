"use client";
import { useTheme } from "next-themes";

export default function Page() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="w-full">
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        theme
      </button>
    </div>
  );
}
