import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  const [messages, defaultMessages] = await Promise.all([
    import(`../messages/${locale}.json`).then((mod) => mod.default),
    locale === routing.defaultLocale
      ? Promise.resolve(undefined)
      : import(`../messages/${routing.defaultLocale}.json`).then(
          (mod) => mod.default
        ),
  ]);

  return {
    locale,
    messages: defaultMessages ? { ...defaultMessages, ...messages } : messages,
  };
});
