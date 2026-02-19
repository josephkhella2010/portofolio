import { useState } from "react";
import styles from "../home.module.css";
import { useText } from "../../../utils/translationUtils";

export default function SkillSection() {
  const [skills, setSkills] = useState<string>("skill");
  const GetText = useText();

  function handleSkill(val: string) {
    setSkills(val);
  }

  return (
    <div className={styles.skillWrapper} id="skill">
      <div className={styles.skillFirstSection}>
        <ul>
          <li onClick={() => handleSkill("skill")}>
            {GetText("home/skillSection/listOne")}
          </li>
          <li onClick={() => handleSkill("education")}>
            {GetText("home/skillSection/listTwo")}
          </li>
          <li onClick={() => handleSkill("experience")}>
            {GetText("home/skillSection/listThree")}
          </li>
        </ul>
      </div>

      {skills === "skill" && (
        <div className={styles.skillContent}>
          <div className={styles.skillContentText}>
            <h3>{GetText("home/skillSection/headerOne")}</h3>
            <p>{GetText("home/skillSection/paragraphOne")}</p>
            <h3>{GetText("home/skillSection/headerTwo")}</h3>
            <p>{GetText("home/skillSection/paragraphTwo")}</p>
            <h3>{GetText("home/skillSection/headerThree")}</h3>
            <p>{GetText("home/skillSection/paragraphThree")}</p>
            <h3>{GetText("home/skillSection/headerFour")}</h3>
            <p>
              HTML, CSS, SCSS, Bootstrap , JavaScript, TS , Python , React , Vue
              , node.js, Django , Next.js , CMS Strapi , Flask , MongoDB, SQlite
              , Docker , Prisma.
            </p>
            <h3>{GetText("home/skillSection/headerFive")}</h3>
            <p>VSCode, Git/GitHub, Figma,Trello</p>
          </div>
        </div>
      )}

      {skills === "education" && (
        <div className={styles.skillContent}>
          <h3>2023 - 2025</h3>
          <p>
            {GetText("home/skillSection/paragraphFour")},{" "}
            <span>Nackademin</span>
          </p>
          <h3>2021-2023</h3>
          <p>SFI-SVA-SAS</p>
          <h3>2004-2008</h3>
          <p> {GetText("home/skillSection/paragraphFive")}</p>
        </div>
      )}

      {skills === "experience" && (
        <div className={styles.skillContent}>
          <h3>2025- {GetText("home/skillSection/headerSix")}</h3>
          <p>{GetText("home/skillSection/paragraphFreelancer")}</p>

          <h3>2023- {GetText("home/skillSection/headerSix")}</h3>
          <p>{GetText("home/skillSection/paragraphSeven")}</p>
          <h3>2022-2023</h3>
          <p>{GetText("home/skillSection/paragraphEight")}</p>
          <h3>2019-2022</h3>
          <p>{GetText("home/skillSection/paragraphNine")}</p>
          <h3>2015-2019</h3>
          <p>{GetText("home/skillSection/paragraphTen")}</p>
          <h3>2010-2015</h3>
          <p>{GetText("home/skillSection/paragraphEleven")}</p>
          <h3>2009-2010</h3>
          <p>{GetText("home/skillSection/paragraphTwelve")}</p>
        </div>
      )}
    </div>
  );
}
