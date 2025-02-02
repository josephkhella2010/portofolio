/* import React, { useEffect, useState } from "react";
import styles from "./skill.module.css";
interface WebSkillType {
  name: string;
  scale: number;
}
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
 */
import React, { useEffect, useMemo, useState } from "react";
import styles from "./skill.module.css";

interface WebSkillType {
  name: string;
  scale: number;
}

export default function WebExperienceSection() {
  const webSkill: WebSkillType[] = useMemo(
    () => [
      { name: "HTML", scale: 100 },
      { name: "CSS", scale: 95 },
      { name: "JS", scale: 90 },
      { name: "React", scale: 85 },
      { name: "Rest Api", scale: 86 },
      { name: "Sass", scale: 87 },
      { name: "Figma", scale: 82 },
      { name: "Nodejs", scale: 65 },
      { name: "NextJs", scale: 65 },
      { name: "Python", scale: 60 }
    ],
    []
  );

  const [progressVal, setProgressVal] = useState<number[]>(
    Array(webSkill.length).fill(0)
  );

  console.log(progressVal);
  useEffect(() => {
    const interval = setTimeout(() => {
      const upgradeValue = [...progressVal];
      for (let i = 0; i < webSkill.length; i++) {
        //console.log(progressVal[i]);
        if (upgradeValue[i] < webSkill[i].scale) {
          upgradeValue[i] += 1;
        } else {
          upgradeValue[i] = webSkill[i].scale;
        }
      }
      setProgressVal(upgradeValue);
    }, 10);

    return () => clearInterval(interval);
  }, [progressVal, webSkill]);

  return (
    <div className={styles.progressWrapper}>
      {webSkill.map((item, index) => (
        <div key={index} className={styles.circle}>
          <div
            className={styles.progress}
            style={{
              background: `conic-gradient(rgb(44 69 85) ${
                (progressVal[index] * 360) / 100
              }deg,rgb(101 102 103 / 94%) ${
                (progressVal[index] * 360) / 100
              }deg)`
            }}>
            <div className={styles.valueContainer}>
              <p>{item.name}</p>
              <p>{progressVal[index]}%</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
