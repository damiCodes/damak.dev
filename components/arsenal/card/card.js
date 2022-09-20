import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import * as icons from "../../../public/svg/icons";
import styles from "./card.module.scss";

export default function Card({ icon, lists }) {
  const [slideIndex, setSlideIndex] = useState(0);
  const [coordinate, setCoordinate] = useState(100);

  function nextSlide() {
    setCoordinate(-100);
    if (slideIndex === lists.length - 1) {
      setSlideIndex(0);
      return;
    }
    if (slideIndex < lists.length) {
      setSlideIndex(slideIndex + 1);
    }
  }

  function prevSlide() {
    setCoordinate(100);
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

  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <motion.div
          whileHover={{
            scale: [1, 1.3, 1.4, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["50%", "20%", "30%", "40%", "50%"],
          }}
          className={styles.icon}
        >
          {icon}
        </motion.div>
      </div>
      <div className={styles.list} {...handlers}>
        {lists.length > 1 && (
          <>
            <icons.LeftArrow onClick={prevSlide} />
            <icons.RightArrow onClick={nextSlide} />
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
