
import i18n from "i18n-js";

import ko from "./ko.json";
import en from "./en.json";
import zhHans from "./zh-hans.json";

i18n.translations = {
  en,
  ko,
  zhHans,
};


i18n.fallbacks = true;

export default i18n;
