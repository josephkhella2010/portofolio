
import { useLanguage } from "../context/LanguageContext";
import { LanguageKeys, LanguagesMapping } from "../Translations/LanguagesMapping";

export const GetText = (text: LanguageKeys): string => {
  const { language } = useLanguage();
  const translation = LanguagesMapping[text]; 

  return translation ? translation[language] : text;
};

