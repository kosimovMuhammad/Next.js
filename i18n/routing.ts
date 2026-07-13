import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["tj", "en", "ru"],
  defaultLocale: "tj",
  localePrefix: "always",
});
