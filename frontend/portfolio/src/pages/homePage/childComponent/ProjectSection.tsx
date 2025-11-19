import React, { useEffect, useRef, useState } from "react";
import styles from "../home.module.css";
import { FaUpRightFromSquare } from "react-icons/fa6";
import { projectArr } from "../../../utils/projectArr";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { useText } from "../../../utils/translationUtils";

export default function ProjectSection() {
  const GetText = useText();

  const [currentIndex, setIndex] = useState<number>(0);
  const sliderContainer = useRef<HTMLDivElement>(null);
  const itemRef = useRef<HTMLDivElement>(null);

  const [sliderItemsWidth, setSliderItemsWidth] = useState<number>(0);

  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  useEffect(() => {
    const handleResize = () => {
      if (itemRef.current) {
        setSliderItemsWidth(itemRef.current.offsetWidth);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handlePrev = () => {
    if (window.innerWidth < 500) {
      setIndex((prev) => (prev === 0 ? projectArr.length - 1 : prev - 1));
    } else {
      setIndex((prev) => (prev === 0 ? projectArr.length - 3 : prev - 1));
    }
  };

  const handleNext = () => {
    if (window.innerWidth < 500) {
      setIndex((prev) => (prev === projectArr.length - 1 ? 0 : prev + 1));
    } else {
      setIndex((prev) => (prev === projectArr.length - 3 ? 0 : prev + 1));
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const deltaX = touchEndX.current - touchStartX.current;
    if (deltaX > 50) {
      handlePrev();
    } else if (deltaX < -50) {
      handleNext();
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const scrollLeft = () => {
    handlePrev();
  };

  const scrollRight = () => {
    handleNext();
  };

  return (
    <div className={styles.projectContainer} id="project">
      <h2>{GetText("home/ProjectSection/header")}</h2>
      <div className={styles.btnContainerSlider}>
        <button onClick={scrollLeft}>
          <IoIosArrowDropleft style={{ fill: "white" }} />
        </button>
        <button onClick={scrollRight}>
          <IoIosArrowDropright style={{ fill: "white" }} />
        </button>
      </div>

      <div
        className={styles.projectSection}
        ref={sliderContainer}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
        style={{
          overflowX: "hidden",
        }}
      >
        {projectArr.map((item, i) => {
          const { title, url, name, text, link } = item;
          return (
            <div
              className={styles.cardContent}
              key={i}
              ref={i === 0 ? itemRef : null}
              style={{
                transform: `translateX(-${
                  currentIndex * (sliderItemsWidth + 20)
                }px)`,
                transition: "transform 0.5s ease",
              }}
            >
              <img src={url} alt={name} />
              <a href={link} target="_blank" rel="noopener noreferrer">
                <div className={styles.overlay}>
                  <h4>{title}</h4>
                  <p>{text}</p>
                  <FaUpRightFromSquare style={{ fill: "black" }} />
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
