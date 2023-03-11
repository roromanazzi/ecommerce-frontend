import React from "react";
import { ProductSelection } from "../../Forms/ProductSelection/ProductSelection";
import { ProductData } from "./ProductData";

export const ProductDetail = ({ product }) => {
  console.log({ product: product, hola: "hola" });
  return (
    <div>
      <ProductData product={product} />
      <ProductSelection product={product} />
    </div>
  );
};
