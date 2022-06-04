import Link from "next/link";
import classes from "./nav-link.module.scss";

export default function NavLink({ onClick, children, href }) {
  return (
    <li onClick={onClick} className={classes.li}>
      <Link href={href}>
        <a>{children}</a>
      </Link>
    </li>
  );
}
