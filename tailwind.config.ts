import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        0: "var(--app-radius-0)",
        4: "var(--app-radius-4)",
        6: "var(--app-radius-6)",
        8: "var(--app-radius-8)",
        10: "var(--app-radius-10)",
        12: "var(--app-radius-12)",
        16: "var(--app-radius-16)",
        20: "var(--app-radius-20)",
        24: "var(--app-radius-24)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        appBackground: "hsl(var(--app-background))",
        appForeground: "hsl(var(--app-foreground))",
        appPrimary: "hsl(var(--app-primary))",
        appNeutral: "hsl(var(--app-neutral))",
        appTextPrimary: "hsl(var(--app-text-primary))",
        appTextSecondary: "hsl(var(--app-text-secondary))",
        appTextTertiary: "hsl(var(--app-text-tertiary))",
        appTextMuted: "hsl(var(--app-text-muted))",
        appTextNeutral: "hsl(var(--app-text-neutral))",
        appBorder: "hsl(var(--app-border))",
        appTag: "hsl(var(--app-tag))",
        appDanger: "hsl(var(--app-danger))",
      },
      fontFamily: {
        sans: "var(--sans)",
        serif: "var(--serif)",
        mono: "var(--mono)",
      },
      spacing: {
        0: "var(--app-spacing-0)",
        25: "var(--app-spacing-25)",
        50: "var(--app-spacing-50)",
        75: "var(--app-spacing-75)",
        100: "var(--app-spacing-100)",
        150: "var(--app-spacing-150)",
        200: "var(--app-spacing-200)",
        250: "var(--app-spacing-250)",
        300: "var(--app-spacing-300)",
        400: "var(--app-spacing-400)",
        500: "var(--app-spacing-500)",
        600: "var(--app-spacing-600)",
        800: "var(--app-spacing-800)",
        1000: "var(--app-spacing-1000)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
