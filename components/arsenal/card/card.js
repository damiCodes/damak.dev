import classes from "./card.module.scss";

export default function Card({ icon, lists }) {
  if (!lists) {
    return <p>Loading....</p>;
  }

  return (
    <div className={classes.card}>
      <div className={classes.front}>
        <div className={classes.icon}>{icon}</div>
      </div>
      <div className={classes.back}>
        <div className={classes.content}>
          <ul>
            {lists.map((list) => {
              return (
                <li key={list.text}>
                  {list.icon} {list.text}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
