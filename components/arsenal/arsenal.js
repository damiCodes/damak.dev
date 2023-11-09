import { motion } from "framer-motion";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import Section from "../ui/section/";
import Card from "./card";
import * as icons from "../../public/svg/icons";
import classes from "./arsenal.module.scss";

export default function Arsenal() {
  const { width } = useWindowDimensions();
  const cards = [
    {
      id: "programming-languages",
      icon: <icons.XML />,
      lists: [
        [
          { icon: <icons.Html />, text: "HTML" },
          { icon: <icons.CSS />, text: "CSS" },
          { icon: <icons.SCSS />, text: "SCSS" },
        ],
        [
          {
            icon: <icons.Javascript />,
            text: width > 380 ? "Javascript" : "JS",
          },
          {
            icon: <icons.Typescript />,
            text: width > 380 ? "Typescript" : "TS",
          },
        ],
      ],
    },

    {
      id: "libraries and frameworks",
      icon: <icons.JSON />,
      lists: [
        [
          { icon: <icons.Angular />, text: "Angular" },
          { icon: <icons.React />, text: "React" },
          { icon: <icons.NextJS />, text: "Next" },
        ],
        [
          { icon: <icons.ElectronJS />, text: "Electron" },
          { icon: <icons.Astro />, text: "Astro" },
        ],
      ],
    },

    {
      id: "tools and platforms",
      icon: <icons.Tools />,
      lists: [
        [
          { icon: <icons.Git />, text: "Git" },
          { icon: <icons.Firebase />, text: "Firebase" },
          { icon: <icons.Vercel />, text: "Vercel" },
        ],
        [
          { icon: <icons.Redux />, text: "Redux" },
          {
            icon: <icons.Framer />,
            text: width > 870 ? "Framer Motion" : "Framer",
          },
          { icon: <icons.Tailwind />, text: "Tailwind" },
        ],
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
