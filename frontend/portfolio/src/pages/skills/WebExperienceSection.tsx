/* import { useEffect, useMemo, useState } from "react";
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
      { name: "TS", scale: 90 },
      { name: "React", scale: 85 },
      { name: "Rest Api", scale: 86 },
      { name: "Sass", scale: 87 },
      { name: "AWS", scale: 70 },
      { name: "Nodejs", scale: 75 },
      { name: "Figma", scale: 72 },
      { name: "Python", scale: 60 },
      { name: "NextJs", scale: 65 },
      { name: "DynamoDB", scale: 65 },
      { name: "Sqlite,", scale: 65 },
      { name: "Docker", scale: 65 },
      { name: "Vue", scale: 65 },
    ],
    []
  );

  const [progressVal, setProgressVal] = useState<number[]>(
    Array(webSkill.length).fill(0)
  );

  // Sort skills once (non-mutating)
  const sortSkill = useMemo(
    () => [...webSkill].sort((a, b) => b.scale - a.scale),
    [webSkill]
  );
  // Animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setProgressVal((prev) => {
        const next = prev.map((val, i) =>
          val < webSkill[i].scale ? val + 1 : val
        );

        // Stop interval automatically when done
        const done = next.every((v, i) => v === webSkill[i].scale);
        if (done) clearInterval(interval);

        return next;
      });
    }, 12);

    return () => clearInterval(interval);
  }, [webSkill]);
    const sortSkill = webSkill.sort((a, b) => {
    return b.scale - a.scale;
  }); 
  useEffect(() => {
    const interval = setTimeout(() => {
      const upgradeValue = [...progressVal];
      for (let i = 0; i < webSkill.length; i++) {
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
      {sortSkill.map((item, index) => (
        <div key={index} className={styles.circle}>
          <div
            className={styles.progress}
                       style={{
              background: `conic-gradient(rgb(67 54 84) ${
                (progressVal[index] * 360) / 100
              }deg,rgb(101 102 103 / 94%) ${
                (progressVal[index] * 360) / 100
              }deg)`,
            }}
  style={{
              background: `conic-gradient(
    rgb(67 54 84) ${(progressVal[index] * 360) / 100}deg,
    rgb(101 102 103 / 94%) ${(progressVal[index] * 360) / 100}deg
  )`,
              boxShadow: `
    0 0 25px rgba(67,54,84,0.9),
    0 0 30px rgba(101,102,103,0.6),
    inset 0 0 25px rgba(67,54,84,0.7),
    inset 0 0 30px rgba(101,102,103,0.6)
  `,
              filter: "brightness(1.35) saturate(1.45)",
              borderRadius: "50%",
            }}
          >
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
 */
/*
 import { useEffect, useMemo, useState } from "react";
import styles from "./skill.module.css";

interface WebSkillType {
  name: string;
  scale: number;
}

export default function WebExperienceSection() {
  // Skill data (memoized)
  const webSkill: WebSkillType[] = useMemo(
    () => [
      { name: "HTML", scale: 100 },
      { name: "CSS", scale: 95 },
      { name: "JS", scale: 90 },
      { name: "TS", scale: 90 },
      { name: "React", scale: 85 },
      { name: "Rest Api", scale: 86 },
      { name: "Sass", scale: 87 },
      { name: "AWS", scale: 70 },
      { name: "Nodejs", scale: 75 },
      { name: "Figma", scale: 72 },
      { name: "Python", scale: 60 },
      { name: "NextJs", scale: 65 },
      { name: "DynamoDB", scale: 65 },
      { name: "Sqlite", scale: 65 },
      { name: "Docker", scale: 65 },
      { name: "Vue", scale: 65 },
    ],
    []
  );

  // Progress state
  const [progressVal, setProgressVal] = useState<number[]>(
    Array(webSkill.length).fill(0)
  );

  // Sort skills once (non-mutating)
  const sortedSkill = useMemo(
    () => [...webSkill].sort((a, b) => b.scale - a.scale),
    [webSkill]
  );

  // Animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setProgressVal((prev) => {
        const next = prev.map((val, i) =>
          val < webSkill[i].scale ? val + 1 : val
        );

        // Stop interval automatically when done
        const done = next.every((v, i) => v === webSkill[i].scale);
        if (done) clearInterval(interval);

        return next;
      });
    }, 12);

    return () => clearInterval(interval);
  }, [webSkill]);

  return (
    <div className={styles.progressWrapper}>
      {sortedSkill.map((item, index) => (
        <div key={index} className={styles.circle}>
          <div
            className={styles.progress}
            style={{
              background: `conic-gradient(
                rgb(67 54 84) ${(progressVal[index] * 360) / 100}deg,
                rgb(101 102 103 / 94%) ${(progressVal[index] * 360) / 100}deg
              )`,
              boxShadow: `
                0 0 25px rgba(67,54,84,0.9),
                0 0 30px rgba(101,102,103,0.6),
                inset 0 0 25px rgba(67,54,84,0.7),
                inset 0 0 30px rgba(101,102,103,0.6)
              `,
              filter: "brightness(1.35) saturate(1.45)",
              borderRadius: "50%",
            }}
          >
            <div className={styles.valueContainer}>
              <p>{item.name}</p>
              <p>{progressVal[index]}%</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} */

import { useEffect, useState, useMemo } from "react";
import { createUseStyles } from "react-jss";

interface WebSkillType {
  name: string;
  scale: number;
}

const useStyles = createUseStyles({
  progressWrapper: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 20,
    width: "100%",
    justifyContent: "center",
    justifyItems: "center",
    padding: "20px",

    "@media (max-width: 1100px)": {
      gridTemplateColumns: "repeat(3, 1fr)",
    },

    "@media (max-width: 850px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },

    "@media (max-width: 550px)": {
      gridTemplateColumns: "repeat(1, 1fr)",
      gap: 30,
    },
  },

  circle: {
    height: 200,
    width: 200,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    position: "relative",
  },

  progress: (data: any) => ({
    height: "100%",
    width: "100%",
    borderRadius: "50%",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    boxShadow:
      "0 0 25px rgba(67,54,84,0.9), 0 0 30px rgba(101,102,103,0.6), inset 0 0 20px rgba(67,54,84,0.7), inset 0 0 25px rgba(101,102,103,0.6)",
    filter: "brightness(1.3) saturate(1.3)",

    background: `conic-gradient(
      rgb(67 54 84) ${data.deg}deg,
      rgb(101 102 103 / 94%) ${data.deg}deg
    )`,
  }),

  inner: {
    position: "absolute",
    width: "75%",
    height: "75%",
    background: "rgb(114,114,114)",
    borderRadius: "50%",
  },

  valueContainer: {
    position: "absolute",
    textAlign: "center",

    "& p:nth-child(1)": {
      fontSize: 18,
      fontWeight: 600,
    },
    "& p:nth-child(2)": {
      fontSize: 16,
      marginTop: 5,
    },
  },
});

export default function WebExperienceSection() {
  const webSkill: WebSkillType[] = [
    { name: "HTML", scale: 100 },
    { name: "CSS", scale: 95 },
    { name: "Sass", scale: 87 },
    { name: "JS", scale: 90 },
    { name: "TS", scale: 90 },
    { name: "Python", scale: 65 },
    { name: "NextJs", scale: 65 },
    { name: "React", scale: 85 },
    { name: "Vue", scale: 65 },
    { name: "Rest Api", scale: 86 },
    { name: "Nodejs", scale: 75 },
    { name: "Django", scale: 65 },
    { name: "AWS", scale: 70 },
    { name: "DynamoDB", scale: 65 },
    { name: "Sqlite", scale: 65 },
    { name: "Docker", scale: 65 },
    { name: "Figma", scale: 70 },
    { name: " MongoDB", scale: 65 },
  ];

  const sorted = useMemo(
    () => [...webSkill].sort((a, b) => b.scale - a.scale),
    [],
  );

  const [progressVal, setProgressVal] = useState(sorted.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setProgressVal((prev) => {
        let done = true;

        const next = prev.map((v, i) => {
          if (v < sorted[i].scale) {
            done = false;
            return v + 1;
          }
          return v;
        });

        if (done) clearInterval(interval);
        return next;
      });
    }, 15);

    return () => clearInterval(interval);
  }, [sorted]);

  // ❗ Call useStyles only ONCE
  const classes = useStyles({ deg: 0 });

  return (
    <div className={classes.progressWrapper}>
      {sorted.map((item, index) => {
        const deg = (progressVal[index] * 360) / 100;

        // ❗ Generate dynamic styles
        const dynamic = useStyles({ deg });

        return (
          <div key={item.name} className={classes.circle}>
            <div className={dynamic.progress}>
              <div className={classes.inner}></div>

              <div className={classes.valueContainer}>
                <p>{item.name}</p>
                <p>{progressVal[index]}%</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
