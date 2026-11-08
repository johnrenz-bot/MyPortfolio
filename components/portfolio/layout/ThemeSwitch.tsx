"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/app/components/theme/ThemeProvider";

const emptySubscribe = () => () => {};

export default function ThemeSwitch({ compact = false }: { compact?: boolean }) {
  const { theme, toggleTheme } = useTheme();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  const isDark = mounted && theme === "dark";
  const label = isDark ? "Dark" : "Light";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`group inline-flex items-center rounded-lg border border-line bg-surface text-muted transition-all duration-300 hover:bg-hover hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-line-strong ${
        compact
          ? "h-9 w-9 justify-center"
          : "w-full gap-3 px-3 py-2.5 text-[11px] font-semibold uppercase tracking-[0.12em]"
      }`}
    >
      <span className="relative flex h-4 w-4 items-center justify-center">
        <Sun
          className={`absolute h-4 w-4 transition-all duration-300 ${
            isDark ? "scale-0 -rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100"
          }`}
          strokeWidth={1.75}
        />
        <Moon
          className={`absolute h-4 w-4 transition-all duration-300 ${
            isDark ? "scale-100 rotate-0 opacity-100" : "scale-0 rotate-90 opacity-0"
          }`}
          strokeWidth={1.75}
        />
      </span>
      {compact ? null : (
        <>
          <span className="flex-1 text-left xl:block">{label} mode</span>
          <span className="hidden xl:inline-flex h-4 w-7 items-center rounded-full border border-line bg-surface-2 p-[2px]">
            <span
              className={`h-2.5 w-2.5 rounded-full bg-ink transition-transform duration-300 ${
                isDark ? "translate-x-3" : "translate-x-0"
              }`}
            />
          </span>
        </>
      )}
    </button>
  );
}
