import BackgroundText from "../background-text";
import classes from "./section.module.scss";

export default function Section({ children, id, heading, tagline, bgText }) {
  return (
    <section id={id} className={classes.section}>
      <div className={classes.heading}>
        <h2>{heading}</h2>
        <h3>{tagline}</h3>
        <hr />
      </div>
      <div className={classes.content}>{children}</div>
      <BackgroundText bgText={bgText} />
    </section>
  );
}
