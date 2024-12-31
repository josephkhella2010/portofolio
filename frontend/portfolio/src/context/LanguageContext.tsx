import React, { createContext, useState, useContext, ReactNode } from "react";

interface LanguageContextType {
  language: "en" | "sv";
  setLanguage: React.Dispatch<React.SetStateAction<"en" | "sv">>;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [language, setLanguage] = useState<"en" | "sv">("sv");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
