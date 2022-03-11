import Link from "next/link";
import classes from "./navigation.module.scss";

export default function Navigation() {
  return (
    <nav className={classes.nav}>
      <div className={classes.logo}>
        <Link href="/">{`<d />`}</Link>
      </div>
      <ul>
        <li>
          <Link href="#about">{`<About />`}</Link>
        </li>
        <li>
          <Link href="#arsenal">{`<Arsenal />`}</Link>
        </li>
        <li>
          <Link href="#experience">{`<Experience />`}</Link>
        </li>
        <li>
          <Link href="#playground">{`<Playground />`}</Link>
        </li>
        <li>
          <Link href="#contact">{`<Contact />`}</Link>
        </li>
      </ul>
      <div className={classes.footer}>
        <span>Lagos, NG </span>
        <span>12:42</span>
      </div>
    </nav>
  );
}
