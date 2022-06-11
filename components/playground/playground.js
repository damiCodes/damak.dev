import { useState } from "react";
import { motion } from "framer-motion";
import Section from "../ui/section/";
import AllProjects from "./all-projects";
import classes from "./playground.module.scss";

export default function Playground() {
  const [activeTab, setActiveTab] = useState("all");

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
        <button
          style={{
            backgroundColor: activeTab === "all" ? "var(--accent-color)" : null,
            color: activeTab === "all" ? "var(--btn-text-color)" : null,
          }}
          onClick={() => setActiveTab("all")}
        >
          All
        </button>
        <button
          style={{
            backgroundColor:
              activeTab === "featured" ? "var(--accent-color)" : null,
            color: activeTab === "featured" ? "var(--btn-text-color)" : null,
          }}
          onClick={() => setActiveTab("featured")}
        >
          Featured
        </button>
      </motion.nav>
      {activeTab === "all" && <AllProjects />}
    </Section>
  );
}
