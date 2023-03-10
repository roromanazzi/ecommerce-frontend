import React from "react";
import Designer from "../components/Collections/Designer";
import { ProductsList } from "../components/Collections/ProductsList";
import { TitleLayout } from "./Root";
import styles from "./Products.module.scss";
import { Filter } from "../components/UI/Filter";

export const ProductsPage = () => {
  const categories = [
    { name: "Remeras" },
    { name: "Gorritos" },
    { name: "Medias" },
  ];

  return (
    <TitleLayout
      leftSubtitle="AW 2023"
      title="Seawolf collection"
      rightSubtitle="Pepito pérez"
    >
      <div className={styles.container}>
        <Designer
          name="Pepito Perez"
          personalInfo={"Diseñador | Mar del Plata, Arg"}
          text={
            "Me inspire en las ballenas y su viaje a través del océano para crear esta colección tan especial."
          }
          imgSrc="https://manofmany.com/wp-content/uploads/2021/03/How-to-Look-Good-in-Photos-Master-Your-Smile.jpg"
        />
        <ProductsList />
        <Filter data={categories} title={"Filtrar"} />
      </div>
    </TitleLayout>
  );
};
