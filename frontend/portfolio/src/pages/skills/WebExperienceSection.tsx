import { useEffect, useMemo, useState } from "react";
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

  progress: (data: { deg: number }) => ({
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

function ProgressCircle({
  item,
  progress,
}: {
  item: WebSkillType;
  progress: number;
}) {
  const deg = (progress * 360) / 100;

  // ✅ Hook is called at the top level of a component
  const classes = useStyles({ deg });

  return (
    <div className={classes.circle}>
      <div className={classes.progress}>
        <div className={classes.inner} />

        <div className={classes.valueContainer}>
          <p>{item.name}</p>
          <p>{progress}%</p>
        </div>
      </div>
    </div>
  );
}

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
    { name: "MongoDB", scale: 65 },
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

        if (done) {
          clearInterval(interval);
        }

        return next;
      });
    }, 15);

    return () => clearInterval(interval);
  }, [sorted]);

  // Only need wrapper styles here
  const classes = useStyles({ deg: 0 });

  return (
    <div className={classes.progressWrapper}>
      {sorted.map((item, index) => (
        <ProgressCircle
          key={item.name}
          item={item}
          progress={progressVal[index]}
        />
      ))}
    </div>
  );
}
