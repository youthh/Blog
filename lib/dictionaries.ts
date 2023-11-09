import "server-only";
import type { Locale } from "../i18nConfig";

const dictionaries = {
  en: () => import("../languages/en.json").then((module) => module.default),
  ua: () => import("../languages/ua.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
  return locale == "ua" ? dictionaries.ua() : dictionaries.en();
};
