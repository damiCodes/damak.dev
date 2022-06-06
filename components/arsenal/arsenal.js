import useWindowDimensions from "../../hooks/useWindowDimensions";
import Section from "../ui/section/";
import Card from "./card";
import HtmlIcon from "../../public/svg/html-icon";
import CssIcon from "../../public/svg/css-icon";
import ScssIcon from "../../public/svg/scss-icon";
import JavascriptIcon from "../../public/svg/javascript-icon";
import TypeScriptIcon from "../../public/svg/typescript-icon";
import ReactIcon from "../../public/svg/react-icon";
import NextjsIcon from "../../public/svg/nextjs-icon";
import Jquery from "../../public/svg/jquery-icon";
import GitIcon from "../../public/svg/git-icon";
import { motion } from "framer-motion";
import FirebaseIcon from "../../public/svg/firebase-icon";
import VercelIcon from "../../public/svg/vercel-icon";
import classes from "./arsenal.module.scss";

export default function Arsenal() {
  const { width } = useWindowDimensions();
  const cards = [
    {
      id: "programming-languages",
      icon: "</>",
      lists: [
        // { icon: <HtmlIcon />, text: "HTML" },
        // { icon: <CssIcon />, text: "CSS" },
        { icon: <ScssIcon />, text: "SCSS" },
        { icon: <JavascriptIcon />, text: width > 380 ? "Javascript" : "JS" },
        { icon: <TypeScriptIcon />, text: width > 380 ? "Typescript" : "TS" },
      ],
    },
    {
      id: "libraries and frameworks",
      icon: "{ }",
      lists: [
        { icon: <ReactIcon />, text: "React" },
        { icon: <NextjsIcon />, text: "Next" },
        // { icon: <Jquery />, text: "Jquery" },
      ],
    },
    {
      id: "tools and platforms",
      icon: "⚒️",
      lists: [
        { icon: <GitIcon />, text: "Git" },
        { icon: <FirebaseIcon />, text: "Firebase" },
        { icon: <VercelIcon />, text: "Vercel" },
      ],
    },
  ];

  return (
    <Section
      id="arsenal"
      heading="Arsenal"
      tagline="My Development Arsenal"
      bgText="arsenal"
    >
      <motion.div
        className={classes.body}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          type: "tween",
          duration: 0.6,
        }}
      >
        {cards.map((card, index) => {
          return (
            <motion.div
              key={card.id}
              initial={{ translateY: 100, opacity: 0 }}
              whileInView={{ translateY: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.2 }}
            >
              <Card {...card} />
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
