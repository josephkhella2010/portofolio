import { useEffect, useState } from "react";
import DesktopNavigation from "./DesktopNavigation";
import styles from "./navigation.module.css";
import MobileNavigation from "./MobileNavigation";
export default function MainNavigation() {
  const mobileWidth = 720;
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= mobileWidth) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className={styles.mainNav}>
      {isMobile ? <MobileNavigation /> : <DesktopNavigation />}
    </div>
  );
}
