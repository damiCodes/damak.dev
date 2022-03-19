import classes from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.content}>
        <p>
          Designed & built by <span>Damilola Akinlade</span>
        </p>
        <p>Copyright &copy; 2022</p>
      </div>
    </footer>
    // <div></div>
  );
}
