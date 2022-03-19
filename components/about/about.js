import Link from "next/link";
import Image from "next/image";
import Section from "../ui/section/";
import Button from "../ui/button";
import AboutImage from "../../public/images/about-section-image.png";
import classes from "./about.module.scss";

export default function about() {
  return (
    <Section
      id="about"
      heading="About"
      tagline="Me, Myself & I"
      bgText="about me"
    >
      <div className={classes.body}>
        <div className={classes.text}>
          My name is Damilola Akinlade but you can call me Damak. I am a
          Computer Engineer, front-end developer, and Javascript enthusiast,
          based in Lagos, Nigeria. I am very passionate about building things
          for the web. My superpower is building delightful user interfaces with
          good ol’ vanilla CSS.
          {/* <br /> */}
          <br />
          You can find me at my workspace cackling on my keyboard trying to
          tackle technical problems in the best way possible. Being diligent and
          result-oriented, I work towards achieving the best results on every
          project I partake in.
          <Button href="resume">Resume</Button>
        </div>
        <div className={classes.image}>
          {/* <Image src={AboutImage} alt="about" height={1800} width={2000} /> */}
          <img src={AboutImage.src} alt="about" />
        </div>
      </div>
    </Section>
  );
}
