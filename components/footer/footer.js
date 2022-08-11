import useWindowDimensions from "../../hooks/useWindowDimensions";
import Logo from "../../public/svg/logo";
import classes from "./footer.module.scss";

export default function Footer() {
  const { width } = useWindowDimensions();
  const year = new Date().getFullYear();

  return (
    <footer className={classes.footer}>
      <div className={classes.logo}>
        <Logo />
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
