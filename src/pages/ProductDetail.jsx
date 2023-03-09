import React from "react";
import { ProductSelection } from "../components/Forms/ProductSelection/ProductSelection";
import styles from "./ProductDetail.module.scss";
import imgSrc from "../img/with-logo-1.jpg";
import { TitleLayout } from "./Root";

export const ProductDetailPage = () => {
  return (
    <>
      <TitleLayout title={"Seawolf Collection"} />
      <div className={styles.container}>
        <img src={imgSrc} className={styles.productImg} />
        <ProductSelection />
      </div>
    </>
  );
};
