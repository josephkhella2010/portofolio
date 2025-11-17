import { useRef, useState } from "react";
import styles from "./testimonial.module.css";
import { FaStar } from "react-icons/fa6";
import { GetText } from "../../utils/translationUtils";
export default function Testimonial() {
  const testimonialArr = [
    {
      url: "/foto/anto.jpg",
      name: "Anton Malmgren",
      place: "Klimra",
      jobTitle: "CEO",
      text: GetText("testimonial/firstParagraph"),
      stars: 5,
    },
    {
      url: "/foto/sameh.jpg",
      name: "Samy Sameh",
      place: "MTR",
      jobTitle: GetText("testimonial/secondTitle"),
      text: GetText("testimonial/secondParagraph"),
      stars: 5,
    },
    {
      url: "/foto/jerom.jpg",
      name: "Jerom Capino",
      place: "Humanitas Sjukhus",
      jobTitle: "TeamLeader",
      text: GetText("testimonial/thirdParagraph"),
      stars: 5,
    },
    {
      url: "/foto/maria.jpg",
      name: "Maria Johnson",
      place: "Coop",
      jobTitle: GetText("testimonial/fourTitle"),
      text: GetText("testimonial/fourParagraph"),
      stars: 5,
    },
  ];
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  console.log(currentIndex);
  const slider = useRef<HTMLDivElement | null>(null);

  return (
    <div className={styles.TestimonialWrapper}>
      <div className={styles.TopContainer}>
        <h1>Testimonial</h1>
        <p>{GetText("testimonial/header")}</p>
      </div>
      <div className={styles.bottomContainer}>
        <div className={styles.bottomSection}>
          {testimonialArr &&
            testimonialArr.map((item, index) => {
              const starsArray = Array(item.stars).fill(0);

              return (
                <div
                  key={index}
                  className={styles.sliderContainer}
                  ref={slider}
                  style={{
                    transform: `translateX(calc(-${currentIndex * 100}% - ${
                      currentIndex * 10
                    }px))`,
                  }}
                >
                  <div className={styles.SliderTopSection}>
                    <div className={styles.SliderLeftContent}>
                      <img src={item.url} alt="" />
                      <div className={styles.titleJob}>
                        <p>{item.name}</p>
                        <p>
                          {item.jobTitle}- <span>{item.place}</span>
                        </p>
                      </div>
                    </div>
                    <div>
                      {starsArray.map((_, index) => {
                        return (
                          <FaStar
                            key={index}
                            className={styles.starIcon}
                            style={{ color: "gold !important" }}
                          />
                        );
                      })}
                    </div>
                  </div>
                  <p className={styles.sliderText}>{item.text}</p>
                </div>
              );
            })}
        </div>
      </div>
      <ul className={styles.bulletsContainer}>
        {testimonialArr &&
          testimonialArr.map((_, index) => {
            return (
              <li
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`${currentIndex === index ? styles.active : ""}`}
              ></li>
            );
          })}
      </ul>
    </div>
  );
}
