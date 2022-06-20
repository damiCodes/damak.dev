import { useState } from "react";
import { motion } from "framer-motion";
import Section from "../ui/section/";
import AllProjects from "./all-projects";
import classes from "./playground.module.scss";

export default function Playground() {
  const [activeTab, setActiveTab] = useState("all");
  const buttons = [{ title: "all" }, { title: "featured" }];

  return (
    <Section
      id="playground"
      heading="playground"
      tagline="what i have done so far"
      bgText="projects"
    >
      <motion.nav
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={classes.tabs}
      >
        {buttons.map((item) => (
          <motion.button
            key={item.title}
            onClick={() => setActiveTab(item.title)}
          >
            <span>{item.title}</span>
            {activeTab === item.title && (
              <motion.div
                layoutId="activeTab"
                transition={{ duration: 0.6 }}
              ></motion.div>
            )}
          </motion.button>
        ))}
      </motion.nav>
      {activeTab === "all" && <AllProjects />}
    </Section>
  );
}
