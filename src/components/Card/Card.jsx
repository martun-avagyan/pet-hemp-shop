import React from "react";
import cls from "classnames";
import useStyles from "./styles";

function Card({ children, isReview, ...props }) {
  const styles = useStyles(props);
  return (
    <div className={cls(styles.root, { review: isReview })}>{children}</div>
  );
}

export default Card;
