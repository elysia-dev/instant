import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import ko from "./ko.json";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en,
      ko
    },
    lng: "ko",
    fallbackLng: "ko",

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
