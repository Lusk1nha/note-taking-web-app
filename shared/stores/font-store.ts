import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type FontValues = "sans-serif" | "serif" | "mono";

interface States {
  font: FontValues;
}

interface Actions {
  setFont: (font: FontValues) => void;
}

const localStorage = typeof window !== "undefined" ? window.localStorage : null;

export const useFontStore = create(
  persist<States & Actions>(
    (set) => ({
      font: "sans-serif",
      setFont(font) {
        set({ font });
      },
    }),
    {
      name: "font-store",
      storage: createJSONStorage(
        () =>
          localStorage ?? {
            getItem: () => null,
            setItem: () => null,
            removeItem: () => null,
          }
      ),
    }
  )
);
