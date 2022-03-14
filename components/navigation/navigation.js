import Link from "next/link";
import NavLink from "./nav-link/nav-link";
import ProfileIcon from "../../public/svg/profile-icon";
import TerminalIcon from "../../public/svg/terminal-icon";
import WorkIcon from "../../public/svg/work-icon";
import ProjectIcon from "../../public/svg/project-icon";
import MailIcon from "../../public/svg/mail-icon";
import GithubIcon from "../../public/svg/github-icon";
import LinkedinIcon from "../../public/svg/linkedin-icon";
import TwitterIcon from "../../public/svg/twitter-icon";
import InstagramIcon from "../../public/svg/instagram-icon";
import classes from "./navigation.module.scss";

export default function Navigation() {
  return (
    <nav className={classes.nav}>
      <div className={classes.logo}>
        <Link href="/">{`<d />`}</Link>
      </div>
      <ul>
        <NavLink href="about">
          <ProfileIcon /> About
        </NavLink>
        <NavLink href="arsenal">
          <TerminalIcon /> Arsenal
        </NavLink>
        <NavLink href="experience">
          <WorkIcon /> Experience
        </NavLink>
        <NavLink href="playground">
          <ProjectIcon /> Playground
        </NavLink>
        <NavLink href="contact">
          <MailIcon /> Contact
        </NavLink>
      </ul>
      <div className={classes.footer}>
        <Link href="/">
          <a>
            <GithubIcon />
          </a>
        </Link>

        <Link href="/">
          <a>
            <TwitterIcon />
          </a>
        </Link>
        <Link href="/">
          <a>
            <InstagramIcon />
          </a>
        </Link>
        <Link href="/">
          <a>
            <LinkedinIcon />
          </a>
        </Link>
      </div>
    </nav>
  );
}
