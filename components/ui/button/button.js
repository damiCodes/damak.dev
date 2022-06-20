import { motion } from "framer-motion";
import Link from "next/link";
import RightArrow from "../../../public/svg/right-arrow";
import classes from "./button.module.scss";

export default function Button({ href, children, target }) {
  return (
    <Link href={href} passHref>
      <a target={target} className={classes.btn}>
        {children}{" "}
        <span>
          <RightArrow />
        </span>
      </a>
    </Link>
  );
}
