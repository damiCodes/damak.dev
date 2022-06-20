import Link from "next/link";
import { motion } from "framer-motion";
import { ScrollRotate } from "react-scroll-rotate";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import NavLink from "./nav-link/nav-link";
import ThemeToggle from "../ui/toggle-button/theme-toggle";
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
    {
      href: "/#about",
      icon: <ProfileIcon />,
      text: width > 480 ? "about" : null,
    },
    {
      href: "/#arsenal",
      icon: <TerminalIcon />,
      text: width > 480 ? "arsenal" : null,
    },
    {
      href: "/#experience",
      icon: <WorkIcon />,

      text: width > 480 ? "experience" : null,
    },
    {
      href: "/#playground",
      icon: <ProjectIcon />,
      text: width > 480 ? "playground" : null,
    },
    {
      href: "/#contact",
      icon: <MailIcon />,
      text: width > 480 ? "contact" : null,
    },
  ];

  return (
    <>
      {width > 480 && (
        <>
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
              <ScrollRotate method="perc">
                <Link href="/">
                  <a>
                    <Logo width="30px" fill="#ffffff" />
                  </a>
                </Link>
              </ScrollRotate>
            </motion.div>
            <ul>
              {links.map((link, index) => {
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
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
            <ThemeToggle />
          </motion.nav>
        </>
      )}

      {width <= 480 && (
        <>
          <motion.nav
            initial={{ y: 10 }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.4,
            }}
            className={classes["mobile-nav"]}
          >
            <motion.div
              initial={{ scale: 0, translateX: "-50%" }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className={classes.logo}
            >
              <ScrollRotate method="perc">
                <Link href="/">
                  <a>
                    <Logo width="20px" fill="#ffffff" />
                  </a>
                </Link>
              </ScrollRotate>
            </motion.div>
            <ThemeToggle
              style={{
                position: "fixed",
                top: "3rem",
                right: "2rem",
                bottom: "auto",
              }}
            />
            <ul>
              {links.map((link, index) => {
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
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
        </>
      )}
    </>
  );
}
