import { motion, AnimatePresence } from "framer-motion";
import RotatingCard from "../rotating-card";
import classes from "./all-projects.module.scss";

export default function AllProjects() {
  const projects = [
    {
      text: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, rem
    tenetur. Excepturi beatae vitae, labore sequi dolores
    tenetur. Labore sequi dolores`,
    },
    {
      text: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, rem
    tenetur. Excepturi beatae, nobis placeat vitae, sequi dolores
    tenetur. Labore sequi dolores`,
    },
    {
      text: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, rem
    tenetur. Excepturi beatae, nobis placeat vitae, labore sequi dolores. Labore sequi dolores`,
    },
    {
      text: ` Lorem dolor sit amet consectetur adipisicing elit. Ipsum, rem
    tenetur. Excepturi beatae, nobis placeat vitae, labore sequi dolores
    tenetur. Labore sequi dolores`,
    },
    {
      text: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, rem
    tenetur. Excepturi beatae, nobis placeat vitae, labore sequi dolores
    tenetur. Labore dolores`,
    },
    // {
    //   text: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, rem
    // tenetur. Excepturi placeat vitae, labore sequi dolores
    // tenetur. Labore sequi dolores`,
    // },
  ];
  return (
    <AnimatePresence>
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.5 }}
        className={classes["all-projects"]}
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.text}
            initial={{ translateY: 100, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <RotatingCard>{project.text}</RotatingCard>
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
}
