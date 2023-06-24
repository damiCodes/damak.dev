import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Dot() {
  return (
    <motion.div variants={variants} initial="hidden" animate="visible">
      <h3>Front-end Developer</h3>
      <p>Lagos, 2023</p>
      <ul>
        <li>
          Implemented and developed the visual and interactive elements of the
          user interface and logic of a retail application for selling health
          insurance.
        </li>
        <li>
          Developed scalable and efficient web applications using Next JS and
          Angular.
        </li>
        <li>
          Collaborated with other developers to identify and alleviate bugs and
          errors in software.
        </li>
      </ul>
    </motion.div>
  );
}

export function OneFlare() {
  return (
    <motion.div variants={variants} initial="hidden" animate="visible">
      <h3>Front-end Developer</h3>
      <p>Lagos, 2022</p>
      <ul>
        <li>
          Revised and updated old code bases to modern development standards,
          improving functionality.
        </li>
        <li>Wrote clean and efficient codes based on specifications.</li>
        <li>Integrated software components with third-party APIs.</li>
        <li>Troubleshoot, debug and upgrade existing software.</li>
      </ul>
    </motion.div>
  );
}

export function BluColar() {
  return (
    <motion.div variants={variants} initial="hidden" animate="visible">
      <h3>Front-end Developer</h3>
      <p>Lagos, 2022</p>
      <ul>
        <li>
          Wrote modern and performant code for clients and in-house projects.
        </li>
        <li>Integrated software components with third-party API.</li>
        <li>Worked with team members to create responsive user interfaces.</li>
        <li>
          Collaborated on stages of software development lifecycle from
          requirement gathering to production releases.
        </li>
      </ul>
    </motion.div>
  );
}

export function Swirge() {
  return (
    <motion.div variants={variants} initial="hidden" animate="visible">
      <h3>Front-end Developer</h3>
      <p>Abuja, 2021</p>
      <ul>
        <li>
          Built responsive user interfaces for the Swirge social platform.
        </li>
        <li>
          Participated in software field testing to verify the performance of
          developed projects.
        </li>
        <li>Integrated software components with third-party API.</li>
      </ul>
    </motion.div>
  );
}

export function Hng() {
  return (
    <motion.div variants={variants} initial="hidden" animate="visible">
      <h3>Intern</h3>
      <p>Lagos, 2021</p>
      <ul>
        <li>
          Built responsive user Interfaces for the Zuri Chat App, a shared
          workspace platform.
        </li>
        <li>
          Collaborated with a team of developers to build a File Manager plugin
          for the workspace platform.
        </li>
        <li>
          Collaborated with other developers to identify and alleviate bugs and
          errors in software.
        </li>
        <li>Integrated software components with third-party API.</li>
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
