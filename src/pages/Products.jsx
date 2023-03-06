import React from "react";
import { ProductsList } from "../components/Products/ProductsList";
import { TitleLayout } from "./Root";

export const ProductsPage = () => {
  return (
    <TitleLayout
      leftSubtitle="AW 2023"
      title="Seawolf collection"
      rightSubtitle="Pepito pérez"
    >
      <ProductsList />
    </TitleLayout>
  );
};
