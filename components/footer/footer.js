import useWindowDimensions from "../../hooks/useWindowDimensions";
import * as icons from "../../public/svg/icons";
import classes from "./footer.module.scss";

export default function Footer() {
  const { width } = useWindowDimensions();
  const year = new Date().getFullYear();

  return (
    <footer className={classes.footer}>
      <div className={classes.logo}>
        <icons.Logo />
      </div>
      <div className={classes.content}>
        <p>
          Designed & built by <span>Damilola Akinlade</span>
        </p>
        <p>Copyright &copy; {year}</p>
      </div>
    </footer>
  );
}
