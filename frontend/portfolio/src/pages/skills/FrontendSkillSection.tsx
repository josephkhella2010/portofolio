import React, { useState } from "react";
import styles from "./skill.module.css";
import { FaGreaterThan, FaLessThan } from "react-icons/fa6";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import WebExperienceSection from "./WebExperienceSection";

export default function FrontendSkillSection() {
  const [showList, setShowList] = useState<boolean>(false);
  return (
    <div className={styles.mainContainer} id="itSkill">
      <div className={styles.header}>
        <h1>IT-kunskaper</h1>
        <p>Min tekniska kompetensnivå </p>
      </div>
      <div
        className={styles.skillSection}
        onClick={() => setShowList(!showList)}>
        <div className={styles.leftSection}>
          <div className={styles.iconContainer}>
            <FaLessThan />
            <FaGreaterThan />
          </div>
          <div className={styles.textContent}>
            <h2>Frontend developer</h2>
            <p> 2 Years studies</p>
          </div>
        </div>
        {showList ? (
          <IoIosArrowUp className={styles.arrowIcon} />
        ) : (
          <IoIosArrowDown className={styles.arrowIcon} />
        )}
      </div>
      {showList && (
        <div className={styles.listMenu}>
          <WebExperienceSection />
        </div>
      )}
    </div>
  );
}
