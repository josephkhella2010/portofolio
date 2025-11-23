import { useSelector } from "react-redux";
import styles from "./sendingEmail.module.css";
import { RootState } from "../../store";
import { useEffect } from "react";
import { useText } from "../../utils/translationUtils";
export default function SendingEmailContainer() {
  const dots = Array.from({ length: 6 }, (_, i) => i + 1);
  const { isSending } = useSelector((state: RootState) => state.SendingSlice);
  const GetText = useText();
  useEffect(() => {
    if (isSending) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isSending]);
  return (
    <div className={styles.SendingEmailContainer}>
      <div className={styles.SendingEmailSection}>
        <div className={styles.SendingEmailUpperContent}>
          <p> {GetText("home/contactSection/sendingSection")}</p>
        </div>
        <div className={styles.SendingEmailLowerContent}>
          {dots &&
            dots.map((_, index) => {
              return (
                <p
                  key={index}
                  className={styles.dots}
                  style={{
                    animationDelay: `${index * 0.2}s`,
                  }}
                ></p>
              );
            })}
        </div>
      </div>
    </div>
  );
}
