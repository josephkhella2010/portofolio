import styles from "./TrackContainer.module.css";

const Languages: string[] = [
  "HTML",
  "CSS",
  "SASS",
  "Tailwind",
  "JavaScript",
  "TypeScript",
  "React",
  "Vue",
  "Node.js",
  "Next.js",
  "Python",
  "Django",
];
export default function TrackSkillContainer() {
  const loop = [...Languages, ...Languages, ...Languages];

  return (
    <div className={styles.trackSkillMainContainer}>
      <div className={styles.trackSkillContainer}>
        <div className={styles.trackSkillSection}>
          {loop &&
            loop.map((lang, index) => {
              return (
                <div key={index} className={styles.trackSkillContent}>
                  <p>{lang}</p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
