import Link from "next/link";
import Section from "../ui/section/";
import classes from "./about.module.scss";

export default function about() {
  return (
    <Section id="about" heading="About" tagline="Me, Myself & I">
      <div className={classes.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
        asperiores inventore ullam nam magnam, rerum ipsum fugiat, totam nisi
        amet, dolore molestiae. Vel iste amet voluptate dignissimos qui ullam?
        Temporibus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Eveniet asperiores inventore ullam nam magnam, rerum ipsum fugiat, totam
        nisi amet, dolore molestiae. Vel iste amet voluptate dignissimos qui
        ullam? Temporibus.
      </div>
      <div className={classes.btn}>
        <Link href="#contact">Resume</Link>
      </div>
    </Section>
  );
}
