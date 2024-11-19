"use client";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="w-ful">
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        theme
      </button>
    </div>
  );
}
