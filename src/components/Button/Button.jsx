import React from "react";
import useStyles from "./style";
import cls from "classnames";

function Button({ children, type, className }) {
  const styles = useStyles();
  return (
    <button
      className={cls(
        styles.root,
        { secondary: type === "secondary" },
        className
      )}
    >
      {children}
    </button>
  );
}

export default Button;
