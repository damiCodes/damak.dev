import { motion } from "framer-motion";
import ThemeToggle from "../toggle-button/theme-toggle";
import classes from "./pre-loader.module.scss";

export default function PreLoader() {
  const exitVariant = {
    hidden: {
      scale: 0,
      transition: {
        duration: 1,
        delay: 2,
        ease: "easeInOut",
      },
    },
    visible: {
      scale: 1,
    },
  };

  const pathVariant = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const circleVariant = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 1,
        delay: 0.8,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <div style={{ display: "none" }}>
        <ThemeToggle />
      </div>
      <div className={classes.wrapper}>
        <motion.svg
          variants={exitVariant}
          initial="visible"
          animate="hidden"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 146.09 146.09"
          height={80}
          fill="var(--accent-color)"
          stroke="var(--accent-color)"
          style={{ transformOrigin: "50% 50% 0" }}
        >
          <motion.g variants={pathVariant} initial="hidden" animate="visible">
            <path d="M112.37,73.05A38.65,38.65,0,0,0,73.91,34.53H44.21V48.17H73.57v0a24.85,24.85,0,1,1,0,49.69v0H44.21v13.65H73.88A38.65,38.65,0,0,0,112.37,73.05Z" />
            <path d="M91.29,73.05c0-9.67-8.4-17.51-18.81-17.62H33.72V90.67H72.49C82.89,90.55,91.29,82.71,91.29,73.05Zm-19,7.2H44.21V65.84H72.27a7.51,7.51,0,0,1,7.78,7.21C80.05,77,76.57,80.25,72.27,80.25Z" />
          </motion.g>
          <motion.circle
            variants={circleVariant}
            initial="hidden"
            animate="visible"
            fill="none"
            strokeMiterlimit={10}
            strokeWidth={6}
            cx="73.05"
            cy="73.05"
            r="70.55"
          />
        </motion.svg>
      </div>
    </>
  );
}
