import Link from "next/link";
import classes from "./hero.module.scss";

export default function Hero() {
  return (
    <header>
      <div className={classes.intro}>
        <h1>
          Hi, <br />
          I&apos;m Damak.
        </h1>
      </div>
      <div className={classes["tag-line"]}>
        <h2>Creative Front-end developer.</h2>
      </div>
      <div className={classes.sub}>
        <p>I write clean and efficient code.</p>
      </div>
      <div className={classes.btn}>
        <Link href="#contact">Contact me!</Link>
      </div>
      {/* <div className={classes["background-text"]}>Hello There</div> */}
    </header>
  );
}
