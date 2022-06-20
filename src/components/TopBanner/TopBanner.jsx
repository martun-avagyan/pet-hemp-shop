import React from "react";
import cls from "classnames";
import colorPicker from "./../../assets/colorPicker.svg";
import collective from "./../../assets/open-collective.svg";
import dog from "./../../assets/manWithDog.png";
import tree from "./../../assets/tree.svg";
import Button from "../Button";
import useStyles from "./styles";

function TopBanner() {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <div>
        <div className={styles.info}>
          <span className={cls(styles.infoItem, styles.heading)}>
            Set your pet at ease!
          </span>
          <span className={styles.infoItem}>
            <img src={tree} className={styles.icon} alt="tree" />
            <span>Organic & Natural Ingradients</span>
          </span>
          <span className={styles.infoItem}>
            <img src={colorPicker} className={styles.icon} alt="Color Picker" />
            <span>Lab-Tested</span>
          </span>
          <span className={styles.infoItem}>
            <img src={collective} className={styles.icon} alt="Collective" />
            <span>Full-Spectrum</span>
          </span>
        </div>
        <Button>Buy now</Button>
      </div>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={dog} alt="man with dog" />
      </div>
    </div>
  );
}

export default TopBanner;
