import { useState } from "react";
import styles from "./navigation.module.css";
import { useLanguage } from "../../context/LanguageContext";

export default function LanguageDropDown() {
  interface LanguageItem {
    url: string;
    lan: "en" | "sv"; // Language codes
  }

  const langArr: LanguageItem[] = [
    { url: "/foto/sv.jpg", lan: "sv" },
    { url: "/foto/eng.png", lan: "en" },
  ];

  const { language, setLanguage } = useLanguage();

  const [open, setOpen] = useState<boolean>(false);

  const selectedFlag =
    langArr.find((item) => item.lan === language) || langArr[0];

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
