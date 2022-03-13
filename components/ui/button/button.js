import Link from "next/link";
import classes from "./button.module.scss";

export default function Button({ href, children }) {
  return (
    <div className={classes.btn}>
      <Link href={`#${href}`}>
        <a>{children}</a>
      </Link>
    </div>
  );
}
