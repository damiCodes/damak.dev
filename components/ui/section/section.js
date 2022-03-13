import classes from "./section.module.scss";

export default function Section({ children, id, heading, tagline }) {
  return (
    <section id={id} className={classes.section}>
      <div className={classes.heading}>
        <h2>{heading}</h2>
        <p>{tagline}</p>
        <hr />
      </div>
      <div className={classes.content}>{children}</div>
    </section>
  );
}
