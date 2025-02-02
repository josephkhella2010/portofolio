import React, { useState } from "react";
import styles from "./navigation.module.css";
import { Link, useNavigate } from "react-router-dom";
import { GetText } from "../../utils/translationUtils";
import LanguageDropDown from "./LanguageDropDown";

export default function MobileNavigation() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const addClassActive = isOpen ? styles.active : "";
  const showMenu = isOpen ? styles.showMenu : "";
  const addColor = isOpen ? styles.navOpacity : "";
  const contact = document.querySelector("#contactMe");
  const project = document.querySelector("#project");
  const about = document.querySelector("#aboutMe");
  const skill = document.querySelector("#skill");
  const itSkill = document.querySelector("#itSkill");

  function handleClick(val: string) {
    if (skill && val === "experience") {
      skill.scrollIntoView({ behavior: "smooth" });
    }
    if (itSkill && val === "itSkill") {
      itSkill.scrollIntoView({ behavior: "smooth" });
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
    if (val === "logo") {
      navigate("/");
    }
    setIsOpen(false);
  }
  return (
    <nav className={`${styles.navBarMobile} ${addColor}`}>
      <h3 onClick={() => handleClick("logo")} className={styles.logo}>
        Portfolio
      </h3>
      <div className={styles.rightSection}>
        <LanguageDropDown />
        <div
          className={`${styles.hamburger} ${addClassActive}`}
          onClick={() => setIsOpen(!isOpen)}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <ul className={`${styles.menu} ${showMenu}`}>
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
        <li className={styles.link} onClick={() => handleClick("itSkill")}>
          kunskaper
        </li>
      </ul>
    </nav>
  );
}
