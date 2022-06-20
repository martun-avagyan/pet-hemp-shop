import React from "react";
import cls from "classnames";
import useStyles from "./styles";

function Pagination({ stepsCount, activeStep }) {
  const steps = Array(stepsCount);
  const styles = useStyles();

  console.log(
    "Log :::  {steps.map((item, index) => (<div className={cls(styles.bullet, { active: index === activeStep })} />))} ::: ",
    steps.map((item, index) => (
      <div className={cls(styles.bullet, { active: index === activeStep })} />
    ))
  );
  return (
    <div className={styles.root}>
      {steps.map((item, index) => (
        <div className={cls(styles.bullet, { active: index === activeStep })} />
      ))}
    </div>
  );
}

export default Pagination;
