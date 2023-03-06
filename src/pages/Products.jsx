import React from "react";
import { ProductsList } from "../components/ProductsList";
import { PageTitle } from "../components/UI/PageTitle";
import { TitleLayout } from "./Root";

export const ProductsPage = () => {
  return (
    <TitleLayout
      leftSubtitle="AW 2023"
      title="Seawolf colection"
      rightSubtitle="Pepito pérez"
    >
      <ProductsList />
    </TitleLayout>
  );
};
