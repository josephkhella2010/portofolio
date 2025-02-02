import React, { useEffect, useState } from "react";
import styles from "./skill.module.css";

export default function WebExperienceSection() {
  const webSkill: WebSkillType[] = [
    { name: "HTML", scale: 100 },
    { name: "CSS", scale: 95 },
    { name: "JS", scale: 90 },
    { name: "React", scale: 85 },
    { name: "Sass", scale: 85 },
    { name: "Figma", scale: 85 },
    { name: "Nodejs", scale: 65 },
    { name: "NextJs", scale: 65 },
    { name: "Python", scale: 60 }
  ];
  const [progressValue, setProgressValue] = useState<number[]>([
    0, 0, 0, 0, 0, 0, 0, 0, 0
  ]);

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

  /*  function handleSkill(val: string) {
    if (val === "skill") {
      setProgressValue([0, 0, 0]);
    }
    setSkills(val);
  } */
  return (
    <div className={styles.progressWrapper}>
      {webSkill.map((item, index) => (
        <div key={index} className={styles.circle}>
          <div
            className={styles.progress}
            style={{
              background: `conic-gradient(rgba(103, 5, 178, 0.94) ${
                (progressValue[index] * 360) / 100
              }deg, rgb(51, 8, 88) ${(progressValue[index] * 360) / 100}deg)`
            }}>
            <div className={styles.valueContainer}>
              <p>{item.name}</p>
              <p>{progressValue[index]}%</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
