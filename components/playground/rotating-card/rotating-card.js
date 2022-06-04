import Link from "next/link";
import Logo from "../../../public/svg/logo";
import classes from "./rotating-card.module.scss";

export default function RotatingCard({ children }) {
  return (
    <div className={classes.body}>
      <div className={classes.front}>
        <Logo />
        <div className={classes.image}></div>
        <div className={classes.stack}>
          <h3>Sample Project</h3>
          <span>React</span>
          <span>CSS</span>
          <span>React</span>
          <span>Firebase</span>
          {/* <span>Firebase</span> */}
        </div>
      </div>
      <div className={classes.back}>
        <div className={classes.description}>
          <h3>About</h3>
          <hr />
          <p>{children}</p>
        </div>
        <div className={classes.btn}>
          <Link href="/">Go to Github</Link>
          <Link href="/">Go to App</Link>
        </div>
      </div>
    </div>
  );
}
