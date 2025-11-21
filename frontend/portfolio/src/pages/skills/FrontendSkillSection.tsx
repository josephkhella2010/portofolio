import { useState } from "react";
import styles from "./skill.module.css";
import { FaGreaterThan, FaLessThan } from "react-icons/fa6";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import WebExperienceSection from "./WebExperienceSection";
import { useText } from "../../utils/translationUtils";

export default function FrontendSkillSection() {
  const [showList, setShowList] = useState<boolean>(false);
  const GetText = useText();

  return (
    <div className={styles.mainContainer} id="itSkill">
      <div className={styles.header}>
        <h1>{GetText("ItExperience/Header")}</h1>
        <p>{GetText("ItExperience/subHeader")} </p>
      </div>
      <div
        className={styles.skillSection}
        onClick={() => setShowList(!showList)}
      >
        <div className={styles.leftSection}>
          <div className={styles.iconContainer}>
            <FaLessThan />
            <FaGreaterThan />
          </div>
          <div className={styles.textContent}>
            <h2>{GetText("ItExperience/skillSectionHeader")}</h2>
            <p>{GetText("ItExperience/skillSectionSubHeader")}</p>
            <p>
              {GetText("ItExperience/skillSectionFirstParagraph")}{" "}
              {showList
                ? GetText("ItExperience/skillSectionShowParagraph")
                : GetText("ItExperience/skillSectionHideParagraph")}{" "}
              {GetText("ItExperience/skillSectionSecondParagraph")}
            </p>
          </div>
        </div>
        <div className={styles.arrowIconContainer}>
          <IoIosArrowDown
            className={styles.arrowIcon}
            style={{
              transform: showList ? "rotate(-180deg)" : "rotate(0deg)",
              transition: "transform 0.3s linear",
            }}
          />
        </div>
      </div>
      {showList && (
        <div className={styles.listMenu}>
          <WebExperienceSection />
        </div>
      )}
    </div>
  );
}
