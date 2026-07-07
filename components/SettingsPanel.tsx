"use client";

import { useEffect, useRef, useState } from "react";
import {
  accentPresets,
  useSettings,
  type FontChoice,
  type Theme,
} from "@/lib/settings-context";
import { locales, type Locale } from "@/lib/i18n";

const themeIcons: Record<Theme, string> = {
  light: "☀",
  dark: "☾",
  system: "◐",
};

export default function SettingsPanel() {
  const { theme, locale, accent, font, setTheme, setLocale, setAccent, setFont, t } =
    useSettings();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const themeChoices: Theme[] = ["light", "dark", "system"];
  const fontChoices: FontChoice[] = ["sans", "serif", "mono"];

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={t.settings.title}
        aria-expanded={open}
        className={`flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-sm transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] ${
          open ? "border-[var(--accent)] text-[var(--accent)]" : "text-zinc-600 dark:text-zinc-300"
        }`}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className={`h-4 w-4 transition-transform duration-500 ${open ? "rotate-90" : ""}`}
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </button>

      <div
        className={`absolute right-0 z-50 mt-3 w-72 origin-top-right rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-xl transition-all duration-200 ${
          open
            ? "scale-100 opacity-100"
            : "pointer-events-none scale-95 opacity-0"
        }`}
      >
        <p className="text-sm font-semibold">{t.settings.title}</p>

        {/* Theme */}
        <div className="mt-4">
          <p className="text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
            {t.settings.theme}
          </p>
          <div className="mt-2 grid grid-cols-3 gap-2">
            {themeChoices.map((choice) => (
              <button
                key={choice}
                onClick={() => setTheme(choice)}
                className={`rounded-lg border px-2 py-1.5 text-xs font-medium transition-colors ${
                  theme === choice
                    ? "border-[var(--accent)] bg-[var(--accent)] text-white"
                    : "border-[var(--border)] text-zinc-600 hover:border-[var(--accent)] dark:text-zinc-300"
                }`}
              >
                <span className="mr-1">{themeIcons[choice]}</span>
                {t.settings[choice]}
              </button>
            ))}
          </div>
        </div>

        {/* Language */}
        <div className="mt-4">
          <p className="text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
            {t.settings.language}
          </p>
          <div className="mt-2 grid grid-cols-3 gap-2">
            {locales.map((l: { id: Locale; label: string }) => (
              <button
                key={l.id}
                onClick={() => setLocale(l.id)}
                className={`rounded-lg border px-2 py-1.5 text-xs font-medium transition-colors ${
                  locale === l.id
                    ? "border-[var(--accent)] bg-[var(--accent)] text-white"
                    : "border-[var(--border)] text-zinc-600 hover:border-[var(--accent)] dark:text-zinc-300"
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accent color */}
        <div className="mt-4">
          <p className="text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
            {t.settings.accent}
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            {accentPresets.map((hex) => (
              <button
                key={hex}
                onClick={() => setAccent(hex)}
                aria-label={hex}
                style={{ background: hex }}
                className={`h-7 w-7 rounded-full transition-transform hover:scale-110 ${
                  accent.toLowerCase() === hex.toLowerCase()
                    ? "ring-2 ring-offset-2 ring-[var(--accent)] ring-offset-[var(--card)]"
                    : ""
                }`}
              />
            ))}

            <label
              aria-label={t.settings.customColor}
              className="relative flex h-7 w-7 shrink-0 cursor-pointer items-center justify-center rounded-full border border-dashed border-[var(--border)] text-xs transition-transform hover:scale-110"
              style={
                !accentPresets.some((hex) => hex.toLowerCase() === accent.toLowerCase())
                  ? { background: accent, borderStyle: "solid" }
                  : undefined
              }
            >
              {accentPresets.some((hex) => hex.toLowerCase() === accent.toLowerCase()) && (
                <span aria-hidden>+</span>
              )}
              <input
                type="color"
                value={accent}
                onChange={(e) => setAccent(e.target.value)}
                className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
              />
            </label>
          </div>
        </div>

        {/* Font */}
        <div className="mt-4">
          <p className="text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
            {t.settings.font}
          </p>
          <div className="mt-2 grid grid-cols-3 gap-2">
            {fontChoices.map((choice) => (
              <button
                key={choice}
                onClick={() => setFont(choice)}
                className={`rounded-lg border px-2 py-1.5 text-xs font-medium transition-colors ${
                  font === choice
                    ? "border-[var(--accent)] bg-[var(--accent)] text-white"
                    : "border-[var(--border)] text-zinc-600 hover:border-[var(--accent)] dark:text-zinc-300"
                } ${choice === "serif" ? "font-serif" : choice === "mono" ? "font-mono" : ""}`}
              >
                {t.settings[
                  choice === "sans"
                    ? "fontSans"
                    : choice === "serif"
                      ? "fontSerif"
                      : "fontMono"
                ]}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
