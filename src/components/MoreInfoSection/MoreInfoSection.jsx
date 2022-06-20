import React from "react";
import Button from "../Button";
import MORE_INFO from "./constants";
import useStyles from "./styles";

function MoreInfoSection() {
  const styles = useStyles();
  const { section1, section2 } = MORE_INFO;
  return (
    <div className={styles.root}>
      <div className={styles.section}>
        <img alt="" className={styles.leftImage} src={section1.image} />
        <div className={styles.content}>
          <img className={styles.icon} src={section1.icon} alt="drop" />
          <div className={styles.title}>{section1.title}</div>
          <div className={styles.description}>{section1.description}</div>
          <Button className={styles.button}>Learn More</Button>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.leftContent}>
          <img className={styles.icon} src={section2.icon} alt="color-picker" />
          <div className={styles.title}>{section2.title}</div>
          <div className={styles.description}>{section2.description}</div>
          <Button className={styles.button}>Learn More</Button>
        </div>
        <img alt="" className={styles.rightImage} src={section2.image} />
      </div>
    </div>
  );
}

export default MoreInfoSection;
