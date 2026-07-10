import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import en from "@/locales/en/translation.json";
import ru from "@/locales/ru/translation.json";
import tj from "@/locales/tj/translation.json";

if (!i18next.isInitialized) {
  i18next.use(initReactI18next).init({
    resources: {
      en: { translation: en },
      ru: { translation: ru },
      tj: { translation: tj },
    },
    lng: "tj",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });
}

export default i18next;
