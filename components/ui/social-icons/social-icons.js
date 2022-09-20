import Link from "next/link";
import { motion } from "framer-motion";
import * as icons from "../../../public/svg/icons";
import classes from "./social-icons.module.scss";

export default function SocialIcons({ delay }) {
  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        delay: delay,
      }}
      className={classes["social-icons"]}
    >
      <Link href="https://github.com/damakdev">
        <a target="_blank">
          <icons.Github />
        </a>
      </Link>

      <Link href="https://twitter.com/__damak">
        <a target="_blank">
          <icons.Twitter />
        </a>
      </Link>
      {/* <Link href="https://www.instagram.com/damak.eth/">
        <a target="_blank">
          <icons.Instagram />
        </a>
      </Link> */}
      <Link href="https://www.linkedin.com/in/damilola-akinlade-059037189/">
        <a target="_blank">
          <icons.Linkedin />
        </a>
      </Link>
    </motion.div>
  );
}
