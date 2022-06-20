import React from "react";
import KEY_WAYS from "./constants";
import useStyles from "./style";

function KeyWays() {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <div className={styles.heading}>Key Ways That CBD Can Help</div>
      <div className={styles.wrapper}>
        {KEY_WAYS.map(({ title, article, logo, id }) => (
          <div key={id} className={styles.item}>
            <img className={styles.icon} alt="" src={logo} />
            <div className={styles.title}>{title}</div>
            <div className={styles.article}>{article}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default KeyWays;
