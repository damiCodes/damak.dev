import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function MyArtStock() {
  return (
    <motion.div variants={variants} initial="hidden" animate="visible">
      <h3>Front-end Developer</h3>
      <p>Lagos, 2022</p>
      <ul>
        <li>Worked with team members to create responsive user interfaces.</li>
        <li>Integrated software components with third party API.</li>
        <li>Produced clean and efficient codes based on specifications.</li>
      </ul>
    </motion.div>
  );
}

export function Zozo() {
  return (
    <motion.div variants={variants} initial="hidden" animate="visible">
      <h3>Front-end Developer</h3>
      <p>Lagos, 2022</p>
      <ul>
        <li>
          Built beautiful user interfaces for the Zozo bidding platform using
          NextJS.
        </li>
        <li>Troubleshoot, debug and upgrade existing software.</li>
        <li>Integrated software components with third party API.</li>
      </ul>
    </motion.div>
  );
}

export function Swg() {
  return (
    <motion.div variants={variants} initial="hidden" animate="visible">
      <h3>Front-end Developer</h3>
      <p>Abuja, 2021</p>
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
    </motion.div>
  );
}

export function Hng() {
  return (
    <motion.div variants={variants} initial="hidden" animate="visible">
      <h3>Intern</h3>
      <p>Abuja, 2021</p>
      <ul>
        <li>
          Built responsive user Interfaces for the Zuri Chat App using ReactJS
        </li>
        <li>
          Collaborated with my team to build a File Manager plugin for Zuri Chat
        </li>
        <li>Completed the internship and emerged a finalist</li>
      </ul>
    </motion.div>
  );
}

export function Ris() {
  return (
    <motion.div variants={variants} initial="hidden" animate="visible">
      <h3>Intern</h3>
      <p>Lagos, 2019</p>
      <ul>
        <li>Built company webpages with wordpress</li>
        <li>UI Design</li>
        <li>Graphics Design for social media posts</li>
      </ul>
    </motion.div>
  );
}

export function Gni() {
  return (
    <motion.div variants={variants} initial="hidden" animate="visible">
      <h3>Intern</h3>
      <p>Lagos, 2019</p>
      <ul>
        <li>Hardware maintenance and repair</li>
        <li> Network troubleshooting and configuration</li>
        <li>Database Management</li>
      </ul>
    </motion.div>
  );
}
