/* import React from "react";
import styles from "../home.module.css";
import { GetText } from "../../../utils/translationUtils";
export default function AboutUs() {
  return (
    <div className={styles.mainContainer} id="aboutMe">
      <div className={styles.AboutUsText}>
        <h1>Joseph Khella</h1>
        <h2>{GetText("home/aboutUs/header")}</h2>
        <p>{GetText("home/aboutUs/paragraph")}</p>
      </div>
      <div className={styles.AboutUsimgSection}>
        <img src="https://via.placeholder.com/150" alt="" />
      </div>
    </div>
  );
}
 */
/* import React, { useEffect, useState } from "react";
import styles from "../home.module.css";
import { GetText } from "../../../utils/translationUtils";
export default function AboutUs() {
  const words = ["Frontend Utvecklare", "Frontend Developer"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentWord = words[currentWordIndex];
    const speed = 100; // Speed for both typing and deleting

    if (isDeleting) {
      // Removing characters step by step
      if (displayedText.length > 0) {
        setDisplayedText(currentWord.slice(0, displayedText.length - 1));
        timeout = setTimeout(() => {}, speed);
      } else {
        // Fully deleted, switch to next word
        setIsDeleting(false);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    } else {
      // Adding characters step by step
      const nextWord = words[currentWordIndex];
      if (displayedText.length < nextWord.length) {
        setDisplayedText(nextWord.slice(0, displayedText.length + 1));
        timeout = setTimeout(() => {}, speed);
      } else {
        // Fully typed, pause before deleting
        timeout = setTimeout(() => setIsDeleting(true), 1000);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentWordIndex]);

  return (
    <div className={styles.mainContainer} id="aboutMe">
      <div className={styles.AboutUsText}>
        <h1>Joseph Khella</h1>
        <h1>{displayedText}</h1>
        <h2>{GetText("home/aboutUs/header")}</h2>
        <p>{GetText("home/aboutUs/paragraph")}</p>
      </div>
      <div className={styles.AboutUsimgSection}>
        <img src="https://via.placeholder.com/150" alt="" />
      </div>
    </div>
  );
} */
import React, { useEffect, useState } from "react";
import styles from "../home.module.css";
import { GetText } from "../../../utils/translationUtils";
import { useLanguage } from "../../../context/LanguageContext";

export default function AboutUs() {
  const { language } = useLanguage();
  const words =
    language === "sv"
      ? ["Frontend Utvecklare", "Frontend Developper"]
      : ["Frontend Developper", "Frontend Utvecklare"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0); // Index of the current word
  const [displayedText, setDisplayedText] = useState(""); // Current text being displayed
  const [isDeleting, setIsDeleting] = useState(false); // Whether we are deleting
  const [loop, setLoop] = useState(0); // Loop iteration counter

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
        <img src="/foto/jo.jpg" alt="About Us" />
      </div>
    </div>
  );
}
