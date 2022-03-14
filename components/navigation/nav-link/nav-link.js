import Link from "next/link";
import classes from "./nav-link.module.scss";

export default function NavLink({ children, href }) {
  return (
    <li className={classes.li}>
      <Link href={`#${href}`}>
        <a>{children}</a>
      </Link>
    </li>
  );
}
