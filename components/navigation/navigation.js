import useWindowDimensions from "../../hooks/useWindowDimensions";
import { motion } from "framer-motion";
import NavLink from "./nav-link/nav-link";
import HomeIcon from "../../public/svg/home-icon";
import ProfileIcon from "../../public/svg/profile-icon";
import Logo from "../../public/svg/logo";
import TerminalIcon from "../../public/svg/terminal-icon";
import WorkIcon from "../../public/svg/work-icon";
import ProjectIcon from "../../public/svg/project-icon";
import MailIcon from "../../public/svg/mail-icon";
import classes from "./navigation.module.scss";

export default function Navigation() {
  const { width } = useWindowDimensions();

  const links = [
    { href: "/", icon: <HomeIcon />, text: "home" },
    { href: "/#about", icon: <ProfileIcon />, text: "about" },
    { href: "/#arsenal", icon: <TerminalIcon />, text: "arsenal" },
    { href: "/#experience", icon: <WorkIcon />, text: "experience" },
    { href: "/#playground", icon: <ProjectIcon />, text: "playground" },
    { href: "/#contact", icon: <MailIcon />, text: "contact" },
  ];

  return (
    <>
      {width > 480 && (
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.4,
          }}
          className={classes.nav}
        >
          <motion.div
            initial={{ scale: 0, translateX: "-50%" }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className={classes.logo}
          >
            <Logo width="30px" fill="#ffffff" />
          </motion.div>
          <ul>
            {links.map((link, index) => {
              return (
                <motion.div
                  key={link.text}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <NavLink href={link.href}>
                    {link.icon}
                    {link.text}
                  </NavLink>
                </motion.div>
              );
            })}
          </ul>
        </motion.nav>
      )}

      {width <= 480 && (
        <nav className={classes["mobile-nav"]}>
          <motion.div
            initial={{ scale: 0, translateX: "-50%" }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className={classes.logo}
          >
            <Logo width="20px" fill="#ffffff" />
          </motion.div>
          <ul>
            {links.map((link, index) => {
              return (
                <motion.div
                  key={link.text}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <NavLink href={link.href}>
                    {link.icon}
                    {link.text}
                  </NavLink>
                </motion.div>
              );
            })}
          </ul>
        </nav>
      )}
    </>
  );
}
