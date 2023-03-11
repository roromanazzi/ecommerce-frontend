import React from "react";
import { ProductDetail } from "./ProductDetail";
import { ProductImg } from "./ProductImg";
import styles from "./Product.module.scss";

export const Product = ({ product }) => {
  return (
    <div className={styles.container}>
      <ProductImg product={product} />
      <ProductDetail product={product} />
    </div>
  );
};
