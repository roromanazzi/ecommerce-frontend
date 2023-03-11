import React from "react";
import styles from "./ProductImg.module.scss";

export const ProductImg = ({ product }) => {
  return (
    <div className={styles.imgContainer}>
      <img src={product.imgSrc} className={styles.productImg} />
      <div className={styles.secondaryImgContainer}>
        <img src={product.secondImg} className={styles.secondaryImg} />
        <img src={product.thirdImg} className={styles.secondaryImg} />
      </div>
    </div>
  );
};
