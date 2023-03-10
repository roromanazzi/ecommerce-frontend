import React from "react";
import styles from "./ProductItem.module.scss";

export const ProductItem = ({ imgSrc, title, price }) => {
  return (
    <div className={styles.productContainer}>
      <div className={styles.imgContainer}>
        <img src={imgSrc} className={styles.productImg} />
      </div>
      <h2 className={styles.productTitle}>
        {title}
        <span className={styles.productPrice}>| ${price}</span>
      </h2>
    </div>
  );
};
