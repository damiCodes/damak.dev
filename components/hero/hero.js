import Link from "next/link";
import { motion } from "framer-motion";
import Button from "../ui/button";
import SocialIcons from "../ui/social-icons";
import BackgroundText from "../ui/background-text";
import classes from "./hero.module.scss";

export default function Hero() {
  return (
    <header className={classes.header}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          y: [-300, 0],
          opacity: 1,
        }}
        transition={{
          type: "tween",
          duration: 1,
        }}
      >
        <h4>Hi, I&apos;m</h4>
        <div className={classes.intro}>
          <h1>Damak.</h1>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: 60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
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
        transition={{ duration: 1 }}
        className={classes.sub}
      >
        <h3>I write clean and efficient code.</h3>
      </motion.div>
      <motion.div
        initial={{ x: -250, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Button href="#contact">Contact me!</Button>
      </motion.div>
      <SocialIcons />
      <BackgroundText bgText="hello there!" />
    </header>
  );
}
