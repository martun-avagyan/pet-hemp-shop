import React from "react";
import useStyles from "./styles";
import ProductItem from "../ProductItem";
import PRODUCTS from "./products";

function PopularProducts() {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>Our Most Popular Products </h1>
      <div className={styles.products}>
        {PRODUCTS.map((props) => (
          <ProductItem key={props.id} {...props} />
        ))}
      </div>
    </div>
  );
}

export default PopularProducts;
