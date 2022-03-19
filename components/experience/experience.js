import { useState } from "react";
import Section from "../ui/section/";
import classes from "./experience.module.scss";

export default function Experience() {
  const [activeTab, setActiveTab] = useState("swg");

  const swg = (
    <>
      <h3>Front-end Developer</h3>
      <p>August - December 2021</p>
      <ul>
        <li>
          Built beautiful user interfaces for the Swirge social platform using
          ReactJS.
        </li>
        <li>
          Worked in an agile environment to receive design requirements, and
          test ih applications.
        </li>
      </ul>
    </>
  );

  const hng = (
    <>
      <h3>Intern</h3>
      <p>August - October 2021</p>
      <ul>
        <li>
          Built responsive user Interfaces for the Zuri Chat App using ReactJS
        </li>
        <li>
          Collaborated with my team to build a File Manager plugin for Zuri Chat
        </li>
        <li>Completed the internship and emerged a finalist</li>
      </ul>
    </>
  );

  const ris = (
    <>
      <h3>Intern</h3>
      <p>August - November 2019</p>
      <ul>
        <li>Built company webpages with wordpress</li>
        <li>UI Design</li>
        <li>Graphics Design for social media posts</li>
      </ul>
    </>
  );

  const gni = (
    <>
      <h3>Intern</h3>
      <p>October 2018 - March 2019</p>
      <ul>
        <li>Hardware maintenance and repair</li>
        <li> Network troubleshooting and configuration</li>
        <li>Database Management</li>
      </ul>
    </>
  );

  return (
    <Section
      id="experience"
      heading="experience"
      tagline="the journey so far"
      bgText="experiences"
    >
      <div className={classes.tab}>
        <ul className={classes["tab-list"]}>
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
        </ul>
        <div className={classes["tab-content"]}>
          {activeTab === "swg" && swg}
          {activeTab === "hng" && hng}
          {activeTab === "ris" && ris}
          {activeTab === "gni" && gni}
        </div>
      </div>
    </Section>
  );
}
