import { useState } from "react";
import Link from "next/link";
import classes from "./nav-link.module.scss";

export default function NavLink({ children, href, active }) {
  return (
    <li className={`${classes.li} ${classes[active]}`}>
      <Link href={href}>
        <a>{children}</a>
      </Link>
    </li>
  );
}
