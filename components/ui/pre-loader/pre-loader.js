import classes from "./pre-loader.module.scss";

export default function PreLoader() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.loading}></div>
      {/* <div className={classes.logo}>loading</div> */}
    </div>
  );
}
