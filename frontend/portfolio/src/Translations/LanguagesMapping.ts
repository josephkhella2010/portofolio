import HomeTranslations from "./HomeTranslation";
import ItExperienceTranslations from "./It kunskap translation";
import contactTranslations from "./KontaktTranslation";
import NavigationTranslations from "./NavigationTranslation";
import TestimonialTranslations from "./TestimonalTranslation";

export const LanguagesMapping: Record<string, { en: string; sv: string }> = {
  ...HomeTranslations,
  ...NavigationTranslations,
  ...TestimonialTranslations,
  ...contactTranslations,
  ...ItExperienceTranslations,
};

export type LanguageKeys = keyof typeof LanguagesMapping;
