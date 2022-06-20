import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import { Left, Right } from "../../../public/svg/direction-icons";
import styles from "./card.module.scss";

export default function Card({ icon, lists }) {
  const [slideIndex, setSlideIndex] = useState(0);
  const [coordinate, setCoordinate] = useState(100);

  function nextSlide() {
    setCoordinate(100);
    if (slideIndex < lists.length) {
      setSlideIndex(slideIndex + 1);
    }
  }

  function prevSlide() {
    setCoordinate(-100);
    if (slideIndex < lists.length && slideIndex !== 0)
      setSlideIndex(slideIndex - 1);
    if (slideIndex === 0) setSlideIndex(lists.length - 1);
  }

  const handlers = useSwipeable({
    onSwipedLeft: prevSlide,
    onSwipedRight: nextSlide,
    swipeDuration: 500,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  useEffect(() => {
    if (slideIndex === lists.length) setSlideIndex(0);
  }, [slideIndex, lists.length]);

  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <div className={styles.icon}>{icon}</div>
      </div>
      <div className={styles.list} {...handlers}>
        {lists.length > 1 && (
          <>
            <Left onClick={prevSlide} />
            <Right onClick={nextSlide} />
            <div className={styles.dots}>
              {Array.apply(null, Array(lists.length)).map((item, index) => (
                <div
                  key={index}
                  onClick={() => setSlideIndex(index)}
                  className={index === slideIndex ? styles.active : null}
                ></div>
              ))}
            </div>
          </>
        )}
        <div className={styles.slider}>
          <AnimatePresence exitBeforeEnter>
            <motion.ul
              key={slideIndex}
              initial={{ opacity: 0, x: coordinate }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
            >
              {lists[slideIndex]?.map((item) => (
                <li key={item.text}>
                  {item.icon} {item.text}
                </li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
