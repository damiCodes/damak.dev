import classes from "./background-text.module.scss";

export default function BackgroundText({ bgText }) {
  return <div className={classes["background-text"]}>{bgText}</div>;
}
