import React from "react";
import useStyles from "./styles";

function ProductItem({ title, category, price, image, id }) {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <div className={styles.imageBlock}>
        <img src={image} alt="" />
      </div>
      <div className={styles.info}>
        <span className={styles.infoWrapper}>
          <span className={styles.title}>{title}</span>
          <span className={styles.category}>{category}</span>
        </span>
        <span className={styles.price}>{price}</span>
      </div>
    </div>
  );
}

export default ProductItem;
