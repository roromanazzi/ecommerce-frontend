import React from "react";
import { Link } from "react-router-dom";
import { ProductItem } from "./ProductItem";
import styles from "./ProductList.module.scss";

export const ProductsList = ({ data }) => {
  const products = data.products;

  return (
    <div className={styles.listContainer}>
      {products.map((product) => {
        return (
          <Link
            key={product.id}
            to={`${product.id}`}
            className={styles.product}
          >
            <ProductItem
              title={product.title}
              price={product.price}
              imgSrc={product.imgSrc}
            />
          </Link>
        );
      })}
    </div>
  );
};
