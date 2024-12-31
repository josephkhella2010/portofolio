import React from "react";
import AboutUs from "./childComponent/AboutMe";
import SkillSection from "./childComponent/SkillSection";
import ProjectSection from "./childComponent/ProjectSection";
import ContactSection from "./childComponent/ContactSection";
import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.mainWrapperTwo}>
      <AboutUs />
      <SkillSection />
      <ProjectSection />
      <ContactSection />
    </div>
  );
}
