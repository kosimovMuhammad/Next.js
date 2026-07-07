"use client";

import {
  createContext,
  useContext,
  useEffect,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { dictionaries, type Dictionary, type Locale } from "@/lib/i18n";
import { deriveAccentSecondary } from "@/lib/color";

export type Theme = "light" | "dark" | "system";
/** Any hex color string, e.g. "#7c3aed" — not limited to the presets below. */
export type Accent = string;
export type FontChoice = "sans" | "serif" | "mono";

export const accentPresets: string[] = [
  "#7c3aed",
  "#e11d48",
  "#059669",
  "#2563eb",
  "#d97706",
];

export const STORAGE_KEY = "lumen-settings";

interface StoredSettings {
  theme: Theme;
  locale: Locale;
  accent: Accent;
  font: FontChoice;
}

const defaults: StoredSettings = {
  theme: "dark",
  locale: "en",
  accent: "#7c3aed",
  font: "sans",
};

// Module-level store so reads/writes never require setState-in-effect:
// components subscribe via useSyncExternalStore and writes notify listeners directly.
let currentSettings: StoredSettings = defaults;
let initialized = false;
let listeners: Array<() => void> = [];

function readFromStorage(): StoredSettings {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaults;
    return { ...defaults, ...(JSON.parse(raw) as Partial<StoredSettings>) };
  } catch {
    return defaults;
  }
}

function getSnapshot() {
  if (!initialized) {
    currentSettings = readFromStorage();
    initialized = true;
  }
  return currentSettings;
}

function getServerSnapshot() {
  return defaults;
}

function subscribe(listener: () => void) {
  listeners.push(listener);
  return () => {
    listeners = listeners.filter((l) => l !== listener);
  };
}

function updateSettings(partial: Partial<StoredSettings>) {
  currentSettings = { ...currentSettings, ...partial };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(currentSettings));
  } catch {
    // storage unavailable, keep in-memory only
  }
  listeners.forEach((l) => l());
}

function applyDom(settings: StoredSettings) {
  const root = document.documentElement;
  const resolvedTheme =
    settings.theme === "system"
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
      : settings.theme;

  root.setAttribute("data-theme", resolvedTheme);
  root.setAttribute("data-font", settings.font);
  root.setAttribute("lang", settings.locale);
  root.style.setProperty("--accent", settings.accent);
  root.style.setProperty("--accent-2", deriveAccentSecondary(settings.accent));
}

interface SettingsContextValue extends StoredSettings {
  setTheme: (theme: Theme) => void;
  setLocale: (locale: Locale) => void;
  setAccent: (accent: Accent) => void;
  setFont: (font: FontChoice) => void;
  t: Dictionary;
}

const SettingsContext = createContext<SettingsContextValue | null>(null);

export function SettingsProvider({ children }: { children: ReactNode }) {
  const settings = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    applyDom(settings);
  }, [settings]);

  useEffect(() => {
    if (settings.theme !== "system") return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => applyDom(settings);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [settings]);

  const value: SettingsContextValue = {
    ...settings,
    setTheme: (theme) => updateSettings({ theme }),
    setLocale: (locale) => updateSettings({ locale }),
    setAccent: (accent) => updateSettings({ accent }),
    setFont: (font) => updateSettings({ font }),
    t: dictionaries[settings.locale],
  };

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const ctx = useContext(SettingsContext);
  if (!ctx) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }
  return ctx;
}
