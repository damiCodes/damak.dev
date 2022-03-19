import NavLink from "./nav-link/nav-link";
import HomeIcon from "../../public/svg/home-icon";
import ProfileIcon from "../../public/svg/profile-icon";
import TerminalIcon from "../../public/svg/terminal-icon";
import WorkIcon from "../../public/svg/work-icon";
import ProjectIcon from "../../public/svg/project-icon";
import MailIcon from "../../public/svg/mail-icon";
import classes from "./navigation.module.scss";

export default function Navigation() {
  return (
    <nav className={classes.nav}>
      <div className={classes.logo}>{/* <Link href="/">{`<d/>`}</Link> */}</div>
      <ul>
        <NavLink href="/" active="active">
          <HomeIcon /> Home
        </NavLink>
        <NavLink href="/#about">
          <ProfileIcon /> About
        </NavLink>
        <NavLink href="/#arsenal">
          <TerminalIcon /> Arsenal
        </NavLink>
        <NavLink href="/#experience">
          <WorkIcon /> Experience
        </NavLink>
        <NavLink href="/#playground">
          <ProjectIcon /> Playground
        </NavLink>
        <NavLink href="/#contact">
          <MailIcon /> Contact
        </NavLink>
      </ul>
    </nav>
  );
}
