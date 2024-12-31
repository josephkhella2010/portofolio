/* import React, { useEffect, useRef, useState } from "react";
import styles from "../home.module.css";
import { FaUpRightFromSquare } from "react-icons/fa6";
import { GetText } from "../../../utils/translationUtils";
import { projectArr } from "../../../utils/projectArr";

export default function ProjectSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderContainer = useRef<HTMLDivElement | null>(null);
  const sliderItem = useRef<HTMLDivElement | null>(null);
  const [sliderContainerWidth, setSliderContainerWidth] = useState<
    number | null
  >(null);
  const [sliderItemsWidth, setSliderItemsWidth] = useState<number | null>(null);

  const totalItems = projectArr.length;

  useEffect(() => {
    const handleResize = () => {
      if (sliderContainer.current) {
        const offsetWidth = sliderContainer.current.offsetWidth;
        setSliderContainerWidth(offsetWidth);
      }
      if (sliderItem.current) {
        const offsetWidth = sliderItem.current.offsetWidth;
        setSliderItemsWidth(offsetWidth);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [sliderContainerWidth, sliderItemsWidth]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalItems - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalItems - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={styles.projectContainer} id="project">
      <h2>{GetText("home/ProjectSection/header")}</h2>
      <div className={styles.btnContainerSlider}>
        <button onClick={handlePrev}>previous</button>
        <button onClick={handleNext}>next</button>
      </div>

      <div className={styles.projectSection} ref={sliderContainer}>
        {projectArr.map((item, index) => {
          const { title, url, name, text, link } = item;
          return (
            <div
              className={styles.cardContent}
              key={index}
              ref={sliderItem}
              style={{
                transform: `translateX(-${
                  currentIndex * (sliderItemsWidth + 20) + 10
                }px)`,
                transition: "transform 0.5s ease"
              }}
            >
              <img src={url} alt={name} />
              <div className={styles.overlay}>
                <h4>{title}</h4>
                <p>{text}</p>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <FaUpRightFromSquare style={{ fill: "black" }} />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
 */
/* import React, { useEffect, useRef, useState } from "react";
import styles from "../home.module.css";
import { FaUpRightFromSquare } from "react-icons/fa6";
import { GetText } from "../../../utils/translationUtils";
import { projectArr } from "../../../utils/projectArr";

export default function ProjectSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderContainer = useRef<HTMLDivElement | null>(null);
  const sliderItem = useRef<HTMLDivElement | null>(null);
  const [sliderContainerWidth, setSliderContainerWidth] = useState<
    number | null
  >(null);
  const [sliderItemsWidth, setSliderItemsWidth] = useState<number | null>(null);

  const totalItems = projectArr.length;

  useEffect(() => {
    const handleResize = () => {
      if (sliderContainer.current) {
        setSliderContainerWidth(sliderContainer.current.offsetWidth);
      }
      if (sliderItem.current) {
        setSliderItemsWidth(sliderItem.current.offsetWidth);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalItems - 1 : prevIndex - 1
    );
    if (sliderContainer.current && sliderItemsWidth) {
      sliderContainer.current.scrollTo({
        left: sliderContainer.current.scrollLeft - (sliderItemsWidth + 20),
        behavior: "smooth"
      });
    }
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalItems - 1 ? 0 : prevIndex + 1
    );
    if (sliderContainer.current && sliderItemsWidth) {
      sliderContainer.current.scrollTo({
        left: sliderContainer.current.scrollLeft + (sliderItemsWidth + 20),
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    if (sliderContainer.current && sliderItemsWidth !== null) {
      sliderContainer.current.scrollTo({
        left: currentIndex * (sliderItemsWidth + 20),
        behavior: "smooth"
      });
    }
  }, [currentIndex, sliderItemsWidth]);

  return (
    <div className={styles.projectContainer} id="project">
      <h2>{GetText("home/ProjectSection/header")}</h2>
      <div className={styles.btnContainerSlider}>
        <button onClick={handlePrev}>previous</button>
        <button onClick={handleNext}>next</button>
      </div>

      <div className={styles.projectSection} ref={sliderContainer}>
        {projectArr.map((item, index) => {
          const { title, url, name, text, link } = item;
          return (
            <div
              className={styles.cardContent}
              key={index}
              ref={index === 0 ? sliderItem : null} // Only set ref for the first item
              style={{
                transform: `translateX(0)` // No transform, scroll handles positioning
              }}
            >
              <img src={url} alt={name} />
              <div className={styles.overlay}>
                <h4>{title}</h4>
                <p>{text}</p>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <FaUpRightFromSquare style={{ fill: "black" }} />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
} */
/*
// it is right
import React, { useEffect, useRef, useState } from "react";
import styles from "../home.module.css";
import { FaUpRightFromSquare } from "react-icons/fa6";
import { GetText } from "../../../utils/translationUtils";
import { projectArr } from "../../../utils/projectArr";

export default function ProjectSection() {
  const [index, setIndex] = useState<number>(0);
  const sliderContainer = useRef<HTMLDivElement | null>(null);
  const sliderItem = useRef<HTMLDivElement | null>(null);
  const [sliderItemsWidth, setSliderItemsWidth] = useState<number | null>(null);

  const totalItems = projectArr.length;

  // Function to get the width of the slider item for scroll calculation
  const getItemWidth = (): number => {
    return sliderItem.current ? sliderItem.current.offsetWidth : 0;
  };

  useEffect(() => {
    // Set the width of the items on initial load or resize
    const itemWidth = getItemWidth();
    setSliderItemsWidth(itemWidth);
  }, []);

  // Scroll left with smooth transition
  const scrollLeft = () => {
    if (sliderContainer.current && sliderItemsWidth !== null) {
      sliderContainer.current.scrollBy({
        left: -(sliderItemsWidth + 20), // Scroll left with item width
        behavior: "smooth"
      });
    }
    setIndex((prev) => Math.max(prev - 1, 0)); // Update the index
  };

  // Scroll right with smooth transition
  const scrollRight = () => {
    if (sliderContainer.current && sliderItemsWidth !== null) {
      sliderContainer.current.scrollBy({
        left: sliderItemsWidth + 20, // Scroll right with item width
        behavior: "smooth"
      });
    }
    setIndex((prev) => (prev === totalItems - 1 ? 0 : prev + 1)); // Loop back to first item when reaching the last
  };

  return (
    <div className={styles.projectContainer} id="project">
      <h2>{GetText("home/ProjectSection/header")}</h2>
      <div className={styles.btnContainerSlider}>
        <button onClick={scrollLeft}>previous</button>
        <button onClick={scrollRight}>next</button>
      </div>

      <div className={styles.projectSection} ref={sliderContainer}>
        {projectArr.map((item, index) => {
          const { title, url, name, text, link } = item;
          return (
            <div
              className={styles.cardContent}
              key={index}
              ref={index === 0 ? sliderItem : null} // Only reference the first item for width calculation
              style={{
                transform: `translateX(0)` // This will be managed by the scroll
              }}
            >
              <img src={url} alt={name} />
              <div className={styles.overlay}>
                <h4>{title}</h4>
                <p>{text}</p>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <FaUpRightFromSquare style={{ fill: "black" }} />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
 */
/* 
// right
import React, { useEffect, useRef, useState } from "react";
import styles from "../home.module.css";
import { FaUpRightFromSquare } from "react-icons/fa6";
import { GetText } from "../../../utils/translationUtils";
import { projectArr } from "../../../utils/projectArr";

export default function ProjectSection() {
  const [index, setIndex] = useState<number>(0);
  const sliderContainer = useRef<HTMLDivElement | null>(null);
  const sliderItem = useRef<HTMLDivElement | null>(null);
  const [sliderItemsWidth, setSliderItemsWidth] = useState<number>(0); // Set initial width to 0

  const totalItems = projectArr.length;

  // This function calculates and sets the width of the items.
  const getItemWidth = (): number => {
    return sliderItem.current ? sliderItem.current.offsetWidth : 0;
  };

  // Resize listener to update item width on window resize
  useEffect(() => {
    const handleResize = () => {
      const itemWidth = getItemWidth();
      setSliderItemsWidth(itemWidth);
    };

    handleResize(); // Call the resize function once on mount
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Scroll to the left (previous item)
  const scrollLeft = () => {
    if (window.innerWidth < 500) {
      setIndex((prev) => (prev === 0 ? totalItems - 1 : prev - 1));
    } else {
      setIndex((prev) => (prev === 0 ? totalItems - 3 : prev - 1));
    }
  };

  // Scroll to the right (next item)
  const scrollRight = () => {
    if (window.innerWidth < 500) {
      setIndex((prev) => (prev === totalItems - 1 ? 0 : prev + 1));
    } else {
      setIndex((prev) => (prev === totalItems - 3 ? 0 : prev + 1));
    }
  };

  return (
    <div className={styles.projectContainer} id="project">
      <h2>{GetText("home/ProjectSection/header")}</h2>
      <div className={styles.btnContainerSlider}>
        <button onClick={scrollLeft}>previous</button>
        <button onClick={scrollRight}>next</button>
      </div>

      <div className={styles.projectSection} ref={sliderContainer}>
        {projectArr.map((item, i) => {
          const { title, url, name, text, link } = item;
          return (
            <div
              className={styles.cardContent}
              key={i}
              ref={i === 0 ? sliderItem : null} // Only get width from the first item
              style={{
                transform: `translateX(-${index * (sliderItemsWidth + 20)}px)`,
                transition: "transform 0.5s ease" // Smooth transition for scrolling
              }}
            >
              <img src={url} alt={name} />
              <div className={styles.overlay}>
                <h4>{title}</h4>
                <p>{text}</p>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <FaUpRightFromSquare style={{ fill: "black" }} />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
 */

import React, { useEffect, useRef, useState } from "react";
import styles from "../home.module.css";
import { FaUpRightFromSquare } from "react-icons/fa6";
import { GetText } from "../../../utils/translationUtils";
import { projectArr } from "../../../utils/projectArr";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

export default function ProjectSection() {
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
          overflowX: "hidden"
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
                transition: "transform 0.5s ease"
              }}
            >
              <img src={url} alt={name} />
              <div className={styles.overlay}>
                <h4>{title}</h4>
                <p>{text}</p>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <FaUpRightFromSquare style={{ fill: "black" }} />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
