import { motion } from "framer-motion";
import Button from "../ui/button";
import SocialIcons from "../ui/social-icons";
import classes from "./hero.module.scss";

export default function Hero() {
  return (
    <header id="home" className={classes.header}>
      <h4>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 0, 1],
          }}
          transition={{
            type: "tween",
            duration: 2,
            delay: 1,
          }}
        >
          Hi,
        </motion.span>{" "}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.7,
            delay: 2.7,
          }}
        >
          I&apos;m
        </motion.span>
      </h4>
      <div className={classes.intro}>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            type: "tween",
            duration: 0.7,
            delay: 2.7,
          }}
        >
          <span>Damak</span>
          <span>.</span>
        </motion.h1>
      </div>
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 2.9 }}
        className={classes["tag-line"]}
      >
        <h1>
          Creative <span style={{ whiteSpace: "nowrap" }}>Front-end</span>
          <br />
          developer.
        </h1>
      </motion.div>
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 3.1 }}
        className={classes.sub}
      >
        <h3>I create amazing user experience.</h3>
        {/* <h3>I write clean and efficient code.</h3> */}
      </motion.div>
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 3.3 }}
      >
        <Button href="#contact">Contact me!</Button>
      </motion.div>
      <SocialIcons delay={3.3} />
    </header>
  );
}
