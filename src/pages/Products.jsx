import React from "react";
import { ProductsList } from "../components/ProductsList";
import { PageTitle } from "../components/UI/PageTitle";
import { TitleLayout } from "./Root";

export const ProductsPage = () => {
  return (
    <TitleLayout
      leftSubtitle="SS (spring summer duh) 2023"
      title="HUUUMAUUUACA Jr."
      rightSubtitle="Pepito pérez sólo"
    >
      <ProductsList />
    </TitleLayout>
  );
};
