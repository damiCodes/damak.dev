import classes from "./footer.module.scss";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={classes.footer}>
      <div className={classes.content}>
        <p>
          Designed & built by <span>Damilola Akinlade</span>
        </p>
        <p>Copyright &copy; {year}</p>
      </div>
    </footer>
    // <div></div>
  );
}
