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

import { useEffect, useRef } from "react";
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
  ];

  const sorted = [...webSkill].sort((a, b) => b.scale - a.scale);

  const refs = useRef<(SVGCircleElement | null)[]>([]);
  const percentRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    const speed = 1;

    const current = Array(sorted.length).fill(0);
    let raf: number;

    const animate = () => {
      let allDone = true;

      for (let i = 0; i < sorted.length; i++) {
        if (current[i] < sorted[i].scale) {
          allDone = false;
          current[i] = Math.min(sorted[i].scale, current[i] + speed);

          const circle = refs.current[i];
          const percent = percentRefs.current[i];

          if (circle) {
            const offset = circumference - (current[i] / 100) * circumference;
            circle.style.strokeDashoffset = `${offset}`;
          }

          if (percent) percent.textContent = `${current[i]}%`;
        }
      }

      if (!allDone) raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [sorted]);

  return (
    <div className={styles.progressWrapper}>
      {sorted.map((item, i) => (
        <div key={item.name} className={styles.circle}>
          <div className={styles.progress}>
            <svg width="120" height="120">
              <circle
                cx="60"
                cy="60"
                r="45"
                stroke="rgba(101,102,103,0.4)"
                strokeWidth="10"
                fill="none"
              />

              <circle
                ref={(el) => (refs.current[i] = el)}
                cx="60"
                cy="60"
                r="45"
                stroke="rgb(67,54,84)"
                strokeWidth="10"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={2 * Math.PI * 45}
                strokeDashoffset={2 * Math.PI * 45}
                style={{
                  filter:
                    "drop-shadow(0 0 10px rgba(67,54,84,0.8)) drop-shadow(0 0 15px rgba(101,102,103,0.7))",
                }}
              />
            </svg>

            <div className={styles.valueContainer}>
              <p>{item.name}</p>
              <p ref={(el) => (percentRefs.current[i] = el)}>0%</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
