import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "../ui/section/";
import { Swg, Hng, Ris, Gni } from "./items/items";
import classes from "./experience.module.scss";

export default function Experience() {
  const [activeTab, setActiveTab] = useState("swg");

  return (
    <Section
      id="experience"
      heading="experience"
      tagline="the journey so far"
      bgText="experiences"
    >
      <div className={classes.tab}>
        <motion.ul
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className={classes["tab-list"]}
        >
          <li
            className={activeTab === "swg" ? classes.active : null}
            onClick={() => setActiveTab("swg")}
          >
            Swirge
          </li>
          <li
            className={activeTab === "hng" ? classes.active : null}
            onClick={() => setActiveTab("hng")}
          >
            HNG i8
          </li>
          <li
            className={activeTab === "ris" ? classes.active : null}
            onClick={() => setActiveTab("ris")}
          >
            Reliance Infosystems
          </li>
          <li
            className={activeTab === "gni" ? classes.active : null}
            onClick={() => setActiveTab("gni")}
          >
            Great Nigeria Insurance
          </li>
        </motion.ul>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className={classes["tab-content"]}
          >
            {activeTab === "swg" && <Swg />}
            {activeTab === "hng" && <Hng />}
            {activeTab === "ris" && <Ris />}
            {activeTab === "gni" && <Gni />}
          </motion.div>
        </AnimatePresence>
      </div>
    </Section>
  );
}
