import Link from "next/link";
import GithubIcon from "../../../public/svg/github-icon";
import LinkedinIcon from "../../../public/svg/linkedin-icon";
import TwitterIcon from "../../../public/svg/twitter-icon";
import InstagramIcon from "../../../public/svg/instagram-icon";
import classes from "./social-icons.module.scss";

export default function SocialIcons() {
  return (
    <div className={classes["social-icons"]}>
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
    </div>
  );
}
