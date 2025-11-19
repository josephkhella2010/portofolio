/* import { useLanguage } from "../context/LanguageContext";
import { LanguageKeys, LanguagesMapping } from "../Translations/LanguagesMapping";

export const GetText = (text: LanguageKeys): string => {
  const { language } = useLanguage();
  const translation = LanguagesMapping[text]; 

  return translation ? translation[language] : text;
}; */

import { useLanguage } from "../context/LanguageContext";
import {
  LanguageKeys,
  LanguagesMapping,
} from "../Translations/LanguagesMapping";

export function useText() {
  const { language } = useLanguage();

  return (key: LanguageKeys): string => {
    const translation = LanguagesMapping[key];
    return translation ? translation[language] : key;
  };
}
