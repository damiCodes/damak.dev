import Link from "next/link";
import RightArrow from "../../../public/svg/right-arrow";
import classes from "./button.module.scss";

export default function Button({ href, children }) {
  return (
    <div className={classes.btn}>
      <Link href={`#${href}`}>
        <a>
          {children}{" "}
          <span>
            <RightArrow />
          </span>
        </a>
      </Link>
    </div>
  );
}
