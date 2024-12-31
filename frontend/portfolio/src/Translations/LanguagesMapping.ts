import HomeTranslations from "./HomeTranslation";
import NavigationTranslations from "./navigationTranslation";

export const LanguagesMapping: Record<string, { en: string; sv: string }> = {
  ...HomeTranslations,
  ...NavigationTranslations,
};

export type LanguageKeys = keyof typeof LanguagesMapping;
