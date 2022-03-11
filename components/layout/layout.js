import Navigation from "../navigation";
import classes from "./layout.module.scss";

export default function Layout({ children }) {
  return (
    <div className={classes.container}>
      <Navigation />
      <main>{children}</main>
      {/* <div className={classes["social-icons"]}>damak.dev@gmail.com</div> */}
    </div>
  );
}
