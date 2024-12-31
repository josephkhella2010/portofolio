import React, { useEffect, useState } from "react";
import styles from "../home.module.css";
import { GetText } from "../../../utils/translationUtils";

export default function SkillSection() {
  interface WebSkillType {
    name: string;
    scale: number;
  }

  const [skills, setSkills] = useState<string>("skill");

  const webSkill: WebSkillType[] = [
    { name: "HTML", scale: 100 },
    { name: "CSS", scale: 95 },
    { name: "JS", scale: 90 }
  ];

  const [progressValue, setProgressValue] = useState<number[]>([0, 0, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      let updatedProgress = [...progressValue];
      for (let i = 0; i < webSkill.length; i++) {
        if (updatedProgress[i] < webSkill[i].scale) {
          updatedProgress[i] += 1;
        }
      }
      setProgressValue(updatedProgress);

      if (
        updatedProgress.every(
          (progress, index) => progress >= webSkill[index].scale
        )
      ) {
        clearInterval(interval);
      }
    }, 10);

    return () => clearInterval(interval);
  }, [progressValue, webSkill]);

  function handleSkill(val: string) {
    if (val === "skill") {
      setProgressValue([0, 0, 0]);
    }
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
              JavaScript, React, HTML, CSS, SCSS, Next.js, Bootstrap, React,
              node.js, Python, Flask,,Docker,Prisma,MongoDB,Sqlite.
            </p>
            <h3>{GetText("home/skillSection/headerFive")}</h3>
            <p>VSCode, Git/GitHub, Figma,Trello</p>
          </div>

          <div className={styles.progressWrapper}>
            {webSkill.map((item, index) => (
              <div key={index} className={styles.circle}>
                <div
                  className={styles.progress}
                  style={{
                    background: `conic-gradient(rgba(103, 5, 178, 0.94) ${
                      (progressValue[index] * 360) / 100
                    }deg, rgb(51, 8, 88) ${
                      (progressValue[index] * 360) / 100
                    }deg)`
                  }}
                >
                  <div className={styles.valueContainer}>
                    <p>{item.name}</p>
                    <p>{progressValue[index]}%</p>
                  </div>
                </div>
              </div>
            ))}
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
