import React from "react";
import { ProductSelection } from "../components/Forms/ProductSelection/ProductSelection";
import Header from "../components/Header";
import { PageTitle } from "../components/UI/PageTitle";
import styles from "./ProductDetail.module.scss";
import imgSrc from "../img/with-logo-1.jpg";

export const ProductDetailPage = () => {
  return (
    <>
      <div className={styles.container}>
        <Header />
        <PageTitle
          title={"Seawolf colection"}
          leftSubtitle={"AW 2023"}
          rightSubtitle={"Pepito Perez"}
        />
        <body className={styles.body}>
          <img src={imgSrc} className={styles.productImg} />
          <ProductSelection />
        </body>
      </div>
    </>
  );
};
