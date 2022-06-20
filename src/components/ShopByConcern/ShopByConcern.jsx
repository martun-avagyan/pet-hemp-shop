import React from "react";
import Card from "../Card";
import SHOP_BY_CONCERN from "./constants";
import useStyles from "./styles";

function ShopByConcern() {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>Shop by Concern</h1>
      <div className={styles.cards}>
        {SHOP_BY_CONCERN.map(({ name, icon }) => (
          <Card gap="20px" width="299px" height="175px" key={name}>
            <img className={styles.icon} src={icon} alt={`Icon for ${name}`} />
            <span>{name}</span>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default ShopByConcern;
