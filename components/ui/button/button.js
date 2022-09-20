import { motion } from "framer-motion";
import Link from "next/link";
import * as icons from "../../../public/svg/icons";
import classes from "./button.module.scss";

export default function Button({ href, children, target }) {
  return (
    <Link href={href} passHref>
      <a target={target} className={classes.btn}>
        {children}{" "}
        <span>
          <icons.RightArrowCTA />
        </span>
      </a>
    </Link>
  );
}
