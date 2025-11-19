import { useEffect, useState } from "react";
import styles from "../home.module.css";
import { useLanguage } from "../../../context/LanguageContext";
import { useText } from "../../../utils/translationUtils";

export default function AboutUs() {
  const { language } = useLanguage();
  const words =
    language === "sv"
      ? ["Frontend Utvecklare", "Frontend Developer"]
      : ["Frontend Developper", "Frontend Utvecklare"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [, setLoop] = useState(0);
  const GetText = useText();

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const typingSpeed = isDeleting ? 200 : 200;

    const handleTyping = () => {
      if (isDeleting) {
        setDisplayedText((prev) => prev.slice(0, -1));
        if (displayedText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      } else {
        setDisplayedText((prev) => currentWord.slice(0, prev.length + 1));
        if (displayedText === currentWord) {
          setIsDeleting(true);
          setLoop((prev) => prev + 1);
        }
      }
    };

    const timeout = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timeout); // Cleanup timeout
  }, [displayedText, isDeleting, currentWordIndex]);

  return (
    <div className={styles.mainContainer} id="aboutMe">
      <div className={styles.AboutUsText}>
        <h1>Joseph Khella</h1>
        <h2>{displayedText}</h2>
        {/*         <h2>{GetText("home/aboutUs/header")}</h2>
         */}{" "}
        <p>{GetText("home/aboutUs/paragraph")}</p>
      </div>
      <div className={styles.AboutUsimgSection}>
        <img src="/foto/profil.jpg" alt="About Us" />
      </div>
    </div>
  );
}
