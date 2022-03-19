import { useState } from "react";
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
      <nav className={classes.tabs}>
        <button
          style={{
            backgroundColor: activeTab === "all" ? "var(--accent-color)" : null,
          }}
          onClick={() => setActiveTab("all")}
        >
          All
        </button>
        <button
          style={{
            backgroundColor:
              activeTab === "featured" ? "var(--accent-color)" : null,
          }}
          onClick={() => setActiveTab("featured")}
        >
          Featured
        </button>
      </nav>
      {activeTab === "all" && <AllProjects />}
    </Section>
  );
}
