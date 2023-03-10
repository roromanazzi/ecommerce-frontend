import React from "react";
import { ProductSelection } from "../components/Forms/ProductSelection/ProductSelection";
import styles from "./ProductDetail.module.scss";
import imgSrc from "../img/with-logo-1.jpg";
import { TitleLayout } from "./Root";
import { Link } from "react-router-dom";

export const ProductDetailPage = () => {
  return (
    <>
      <TitleLayout title={"Seawolf Collection"} />
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <img src={imgSrc} className={styles.productImg} />
          <div className={styles.secondaryImgContainer}>
            <img src={imgSrc} className={styles.secondaryImg} />
            <img src={imgSrc} className={styles.secondaryImg} />
          </div>
        </div>
        <ProductSelection />
        <div>
          <Link>
            <div className={styles.sugestion}></div>
          </Link>
          <Link>
            <div className={styles.sugestion}></div>
          </Link>
          <Link>
            <div className={styles.sugestion}></div>
          </Link>
        </div>
      </div>
    </>
  );
};
