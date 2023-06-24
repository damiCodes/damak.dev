import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "../ui/section/";
import { OneFlare, BluColar, Swirge, Hng, Ris, Dot } from "./items";
import classes from "./experience.module.scss";

const list = [
  { title: "Dot", id: "dot" },
  { title: "One Flare", id: "one" },
  { title: "BluColar", id: "blu" },
  { title: "Swirge", id: "swg" },
  { title: "HNG i8", id: "hng" },
  { title: "Reliance Infosystems", id: "ris" },
];

export default function Experience() {
  const [activeTab, setActiveTab] = useState(list[0].id);

  return (
    <Section
      id="experience"
      heading="experience"
      tagline="the journey so far"
      bgText="experiences"
    >
      <div className={classes.tab}>
        <motion.ul
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className={classes["tab-list"]}
        >
          {list.map((item, index) => (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={activeTab === item.id ? classes.active : null}
              onClick={() => setActiveTab(item.id)}
            >
              {item.title}
            </motion.li>
          ))}
        </motion.ul>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className={classes["tab-content"]}
          >
            {activeTab === "dot" && <Dot />}
            {activeTab === "one" && <OneFlare />}
            {activeTab === "blu" && <BluColar />}
            {activeTab === "swg" && <Swirge />}
            {activeTab === "hng" && <Hng />}
            {activeTab === "ris" && <Ris />}
          </motion.div>
        </AnimatePresence>
      </div>
    </Section>
  );
}
