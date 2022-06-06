import { motion } from "framer-motion";

export function Swg() {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.5 }}
    >
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
    </motion.div>
  );
}

export function Hng() {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.5 }}
    >
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
    </motion.div>
  );
}

export function Ris() {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.5 }}
    >
      <h3>Intern</h3>
      <p>August - November 2019</p>
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
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.5 }}
    >
      <h3>Intern</h3>
      <p>October 2018 - March 2019</p>
      <ul>
        <li>Hardware maintenance and repair</li>
        <li> Network troubleshooting and configuration</li>
        <li>Database Management</li>
      </ul>
    </motion.div>
  );
}
