import React, { useState } from "react";
import styles from "./skill.module.css";
import { FaGreaterThan, FaLessThan } from "react-icons/fa6";
import { RiArrowDownSLine } from "react-icons/ri";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function FrontendSkillSection() {
  const [showList, setShowList] = useState<boolean>(false);
  return (
    <div className={styles.mainContainer}>
      <div className={styles.header}>
        <h1>Skill</h1>
        <p>My technical level</p>
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
      {showList && <div className={styles.listMenu}></div>}
    </div>
  );
}
