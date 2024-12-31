import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./navigation.module.css";
import LanguageDropDown from "./LanguageDropDown";
import { GetText } from "../../utils/translationUtils";

export default function DesktopNavigation() {
  const navigate = useNavigate();

  let contact: HTMLElement | null = null;
  let project: HTMLElement | null = null;
  let about: HTMLElement | null = null;
  let skill: HTMLElement | null = null;

  useEffect(() => {
    contact = document.querySelector("#contactMe");
    project = document.querySelector("#project");
    about = document.querySelector("#aboutMe");
    skill = document.querySelector("#skill");
  }, []);

  function handleClick(val: string) {
    if (skill && val === "experience") {
      skill.scrollIntoView({ behavior: "smooth" });
    }
    if (contact && val === "contact") {
      contact.scrollIntoView({ behavior: "smooth" });
    }

    if (project && val === "project") {
      project.scrollIntoView({ behavior: "smooth" });
    }

    if (about && val === "about") {
      about.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <nav className={styles.navBar}>
      <h3 onClick={() => navigate("/")} className={styles.logo}>
        Portfolio
      </h3>

      <ul className={styles.desktopMenu}>
        <LanguageDropDown />
        <li className={styles.link} onClick={() => handleClick("experience")}>
          {GetText("nav/linkOne")}
        </li>
        <li className={styles.link} onClick={() => handleClick("project")}>
          {GetText("nav/linkTwo")}
        </li>
        <li className={styles.link} onClick={() => handleClick("contact")}>
          {GetText("nav/linkThree")}
        </li>
        <li className={styles.link} onClick={() => handleClick("about")}>
          {GetText("nav/linkFour")}
        </li>
      </ul>
    </nav>
  );
}
