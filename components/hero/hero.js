import Link from "next/link";
import { motion } from "framer-motion";
import Button from "../ui/button";
import SocialIcons from "../ui/social-icons";
import BackgroundText from "../ui/background-text";
import classes from "./hero.module.scss";

export default function Hero() {
  return (
    <header id="home" className={classes.header}>
      <h4>
        <motion.span
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
            // type: "tween",
            duration: 0.7,
            delay: 3,
          }}
        >
          I&apos;m
        </motion.span>
      </h4>
      <div className={classes.intro}>
        <motion.h1
          initial={{ opacity: 0, x: -300 }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            type: "tween",
            duration: 0.7,
            delay: 3,
          }}
        >
          <span>Damak</span>
          <span>.</span>
        </motion.h1>
      </div>
      <motion.div
        initial={{ x: 60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 3.7 }}
        className={classes["tag-line"]}
      >
        <h1>
          Creative Front-end
          <br />
          developer.
        </h1>
      </motion.div>
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 4.4 }}
        className={classes.sub}
      >
        <h3>I create amazing user experience.</h3>
        {/* <h3>I write clean and efficient code.</h3> */}
      </motion.div>
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 5.1 }}
      >
        <Button href="#contact">Contact me!</Button>
      </motion.div>
      <SocialIcons delay={5.1} />
      <BackgroundText bgText="hello there!" />
    </header>
  );
}
