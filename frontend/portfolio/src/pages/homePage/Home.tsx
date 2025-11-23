import AboutUs from "./childComponent/AboutMe";
import SkillSection from "./childComponent/SkillSection";
import ProjectSection from "./childComponent/ProjectSection";
import ContactSection from "./childComponent/ContactSection";
import styles from "./home.module.css";
import Testimonial from "../testimonal/Testimonial";
import DownloadBtn from "../../components/DownloadBtn";
import FrontendSkillSection from "../skills/FrontendSkillSection";
import { ToastContainer } from "react-toastify";
import RunningSkillContainer from "../trackSkillSection/TrackSkillContainer";

export default function Home() {
  return (
    <div className={styles.mainWrapperTwo}>
      <ToastContainer />
      <AboutUs />
      <DownloadBtn />
      <SkillSection />
      <RunningSkillContainer />
      <FrontendSkillSection />
      <ProjectSection />
      <Testimonial />
      <ContactSection />
    </div>
  );
}
