/* import React, { useState } from "react";
import styles from "./navigation.module.css";
export default function LanguageDropDown() {
  interface LanguageItem {
    url: string;
    lan: string;
  }
  const langArr: LanguageItem[] = [
    { url: "/foto/svflag.png", lan: "Sv" },
    { url: "/foto/engFlag.png", lan: "Eng" }
  ];
  const [open, setOpen] = useState<boolean>(false);
  const [lang, setLang] = useState<string>("Sv");
  const [selectedFlag, setSelectedFlag] = useState<LanguageItem | null>(
    langArr[0]
  );

  const addClass = open ? styles.openLang : "";
  function handleLang(selectedFlag: LanguageItem) {
    setSelectedFlag(selectedFlag);
    setOpen(false);
  }
  return (
    <div className={styles.dropDownContainer}>
      <div className={styles.dropDownTop} onClick={() => setOpen(!open)}>
        {selectedFlag && <img src={selectedFlag.url} alt={selectedFlag.lan} />}
      </div>
      <div className={`${styles.dropDownBottom} ${addClass}`}>
        {langArr &&
          langArr.map((item, index) => {
            return (
              <div key={index} className={styles.langList}>
                <li onClick={() => handleLang(item)}>
                  <img src={item.url} alt={item.lan} /> <span>{item.lan}</span>
                </li>
              </div>
            );
          })}
      </div>
    </div>
  );
}
 */
/* import React, { useState, useEffect } from "react";
import styles from "./navigation.module.css";
import { useLanguage } from "../../context/LanguageContext";

export default function LanguageDropDown() {
  interface LanguageItem {
    url: string;
    lan: string;
  }

  const langArr: LanguageItem[] = [
    { url: "/foto/svflag.png", lan: "Sv" },
    { url: "/foto/engFlag.png", lan: "Eng" }
  ];

  const { language, setLanguage } = useLanguage();

  const [open, setOpen] = useState<boolean>(false);

  const selectedFlag =
    langArr.find((item) => item.lan === language) || langArr[0]; // Default to 'Sv' if no match

  const addClass = open ? styles.openLang : "";

  // Handle the language selection
  function handleLang(selectedFlag: LanguageItem) {
    setLanguage(selectedFlag.lan); // Update the global language state
    setOpen(false); // Close the dropdown
  }
  return (
    <div className={styles.dropDownContainer}>
      <div className={styles.dropDownTop} onClick={() => setOpen(!open)}>
        {selectedFlag && <img src={selectedFlag.url} alt={selectedFlag.lan} />}
      </div>
      <div className={`${styles.dropDownBottom} ${addClass}`}>
        {langArr.map((item, index) => (
          <div key={index} className={styles.langList}>
            <li onClick={() => handleLang(item)}>
              <img src={item.url} alt={item.lan} /> <span>{item.lan}</span>
            </li>
          </div>
        ))}
      </div>
    </div>
  );
}
 */
// src/components/LanguageDropDown.tsx
import React, { useState } from "react";
import styles from "./navigation.module.css"; // Assuming you have this CSS file
import { useLanguage } from "../../context/LanguageContext";

// Language dropdown component
export default function LanguageDropDown() {
  interface LanguageItem {
    url: string;
    lan: "en" | "sv"; // Language codes
  }

  const langArr: LanguageItem[] = [
    { url: "/foto/sv.jpg", lan: "sv" },
    { url: "/foto/eng.png", lan: "en" }
  ];

  const { language, setLanguage } = useLanguage(); // Use language from context

  const [open, setOpen] = useState<boolean>(false);

  const selectedFlag =
    langArr.find((item) => item.lan === language) || langArr[0]; // Default to 'sv' if no match

  const addClass = open ? styles.openLang : "";

  // Handle language selection
  function handleLang(selectedFlag: LanguageItem) {
    setLanguage(selectedFlag.lan);
    setOpen(false); // Close the dropdown
  }

  return (
    <div className={styles.dropDownContainer}>
      <div className={styles.dropDownTop} onClick={() => setOpen(!open)}>
        {selectedFlag && <img src={selectedFlag.url} alt={selectedFlag.lan} />}
      </div>
      <div className={`${styles.dropDownBottom} ${addClass}`}>
        {langArr.map((item, index) => (
          <div key={index} className={styles.langList}>
            <li onClick={() => handleLang(item)}>
              <img src={item.url} alt={item.lan} />{" "}
              <span>{item.lan.toUpperCase()}</span>
            </li>
          </div>
        ))}
      </div>
    </div>
  );
}
