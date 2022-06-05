import { motion } from "framer-motion";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import Section from "../ui/section/";
import Button from "../ui/button";
import Programmer from "../../public/svg/programmer";
import classes from "./about.module.scss";

export default function About() {
  const { width } = useWindowDimensions();

  return (
    <Section
      id="about"
      heading="About"
      tagline="Me, Myself & I"
      bgText="about me"
    >
      <div className={classes.body}>
        <motion.p
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className={classes.text}
        >
          My name is Damilola Akinlade but you can call me Damak. I am a
          Computer Engineer, front-end developer, and Javascript enthusiast,
          based in Lagos, Nigeria. I am very passionate about building things
          for the web. My superpower is building delightful user interfaces with
          good ol’ vanilla CSS.
          <br />
          You can find me at my workspace cackling on my keyboard trying to
          tackle technical problems in the best way possible. Being diligent and
          result-oriented, I work towards achieving the best results on every
          project I partake in.
        </motion.p>
        {width <= 800 && <Button href="/resume">Resume</Button>}
        <div className={classes.image}>
          <Programmer />
        </div>
      </div>
      {width > 800 && <Button href="/resume">Resume</Button>}
    </Section>
  );
}
