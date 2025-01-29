import React, { useRef, useState } from "react";
import styles from "./testimonial.module.css";
import { FaStar } from "react-icons/fa6";
export default function Testimonial() {
  const testimonialArr = [
    {
      url: "/foto/anto.jpg",
      name: "Anton Malmgren",
      place: "Klimra",
      jobTitle: "CEO",
      text: "Joseph har alltid varit självständig och ansvarsfull under den tid han gjorde praktik hos oss och har utmärkt sig bland sina kollegor. Han samarbetar på ett bra sätt. Han kunde lösa problemen själv. Jag var jätte nöjd att få honom som praktikant och hoppas att han hittar ett bra ställe där han kan fortsätta jobba som frontendutvecklare",
      stars: 5
    },
    {
      url: "/foto/sameh.jpg",
      name: "Samy Sameh",
      place: "MTR",
      jobTitle: "StationsVärd",
      text: "Joseph är en utmärkt medarbetare; jag har ett mycket gott intryck av honom. Han visar konsekvent ansvar i sina arbetsuppgifter på företaget.",
      stars: 5
    },
    {
      url: "/foto/jerom.jpg",
      name: "Jerom Capino",
      place: "Humanitas Sjukhus",
      jobTitle: "TeamLeader",
      text: "Under sin tid på företaget visade Joseph konsekvent motivation och en positiv attityd. Han uppvisade starka färdigheter i att hantera kunder, särskilt inom kritiska områden som skuldindrivning. Han var högt värderad av sitt team, där samarbete och ömsesidigt stöd var avgörande.",
      stars: 5
    },
    {
      url: "/foto/maria.jpg",
      name: "Maria Johnson",
      place: "Coop",
      jobTitle: "LagerArbetare",
      text: "Joseph har alltid varit en ansvarsfull medarbetare och har utmärkt sig bland sina kollegor. Han arbetade på Coop för att finansiera sina studier. och förtsätta att studera med yreshögskolan med frontend Utvecklare",
      stars: 5
    }
  ];
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  console.log(currentIndex);
  const slider = useRef<HTMLDivElement | null>(null);

  return (
    <div className={styles.TestimonialWrapper}>
      <div className={styles.TopContainer}>
        <h1>Testimonial</h1>
        <p>My employers say</p>
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
                    }px))`
                  }}>
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
          testimonialArr.map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`${
                  currentIndex === index ? styles.active : ""
                }`}></li>
            );
          })}
      </ul>
    </div>
  );
}
