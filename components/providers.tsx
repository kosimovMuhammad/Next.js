"use client";

import { ThemeProvider } from "next-themes";
import { I18nextProvider } from "react-i18next";
import { Provider as ReduxProvider } from "react-redux";

import { Toaster } from "@/components/ui/sonner";
import i18n from "@/lib/i18n";
import { store } from "@/store";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReduxProvider store={store}>
      <I18nextProvider i18n={i18n}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Toaster />
        </ThemeProvider>
      </I18nextProvider>
    </ReduxProvider>
  );
}
