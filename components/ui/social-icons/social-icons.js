import Link from "next/link";
import { motion } from "framer-motion";
import GithubIcon from "../../../public/svg/github-icon";
import LinkedinIcon from "../../../public/svg/linkedin-icon";
import TwitterIcon from "../../../public/svg/twitter-icon";
import InstagramIcon from "../../../public/svg/instagram-icon";
import classes from "./social-icons.module.scss";

export default function SocialIcons({ delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: delay,
      }}
      className={classes["social-icons"]}
    >
      <Link href="https://github.com/damiCodes">
        <a target="_blank">
          <GithubIcon />
        </a>
      </Link>

      <Link href="https://twitter.com/__damak">
        <a target="_blank">
          <TwitterIcon />
        </a>
      </Link>
      <Link href="https://www.instagram.com/damak.eth/">
        <a target="_blank">
          <InstagramIcon />
        </a>
      </Link>
      <Link href="https://www.linkedin.com/in/damilola-akinlade-059037189/">
        <a target="_blank">
          <LinkedinIcon />
        </a>
      </Link>
    </motion.div>
  );
}
