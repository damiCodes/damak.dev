import Link from "next/link";
import ProfileIcon from "../../public/svg/profile-icon";
import TerminalIcon from "../../public/svg/terminal-icon";
import WorkIcon from "../../public/svg/work-icon";
import ProjectIcon from "../../public/svg/project-icon";
import MailIcon from "../../public/svg/mail-icon";
import classes from "./navigation.module.scss";

export default function Navigation() {
  return (
    <nav className={classes.nav}>
      <div className={classes.logo}>
        <Link href="/">{`<d />`}</Link>
      </div>
      <ul>
        <li>
          <Link href="#about">
            <a>
              <ProfileIcon /> About
            </a>
          </Link>
        </li>
        <li>
          <Link href="#arsenal">
            <a>
              <TerminalIcon />
              Arsenal
            </a>
          </Link>
        </li>
        <li>
          <Link href="#experience">
            <a>
              <WorkIcon />
              Experience
            </a>
          </Link>
        </li>
        <li>
          <Link href="#playground">
            <a>
              <ProjectIcon />
              Playground
            </a>
          </Link>
        </li>
        <li>
          <Link href="#contact">
            <a>
              <MailIcon />
              Contact
            </a>
          </Link>
        </li>
      </ul>
      <div className={classes.footer}>
        <span>Lagos, NG </span>
        <span>12:42</span>
      </div>
    </nav>
  );
}
