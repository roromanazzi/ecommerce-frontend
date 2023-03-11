import React from "react";
import styles from "./ProductData.module.scss";

export const ProductData = ({ product }) => {
  console.log({ product: product, chau: "chau" });
  return (
    <div className={styles.container}>
      <h3 className={styles.productTitle}>{product.title}</h3>
      <p className={styles.productDescription}>{product.description}</p>
      <p className={styles.productPrice}>${product.price}</p>
    </div>
  );
};
