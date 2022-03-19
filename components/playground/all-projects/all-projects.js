import RotatingCard from "../rotating-card";
import classes from "./all-projects.module.scss";

export default function AllProjects() {
  return (
    <div className={classes["all-projects"]}>
      <RotatingCard>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, rem
        tenetur. Excepturi beatae, nobis placeat vitae, labore sequi dolores
        tenetur. Labore sequi dolores
      </RotatingCard>
      <RotatingCard>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, rem
        tenetur. Excepturi beatae, nobis placeat vitae.
      </RotatingCard>
      <RotatingCard>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, rem
        tenetur. Excepturi beatae, nobis placeat vitae, labore sequi dolores
      </RotatingCard>
      <RotatingCard>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, rem
        tenetur. Excepturi beatae, nobis placeat vitae, labore sequi dolores
      </RotatingCard>
    </div>
  );
}
