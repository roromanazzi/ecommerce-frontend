import React from "react";
import Designer from "../components/Collections/Designer";
import { ProductsList } from "../components/Collections/Products/ProductsList";
import { TitleLayout } from "./Root";
import styles from "./Products.module.scss";
import { data } from "../products";

export const ProductsPage = () => {
  const collection = data[0];

  return (
    <TitleLayout
      leftSubtitle={collection.season}
      title={collection.name}
      rightSubtitle={collection.designer}
    >
      <div className={styles.container}>
        <Designer
          name={collection.designer}
          personalInfo={"Diseñador | Mar del Plata, Arg"}
          text={
            "Me inspire en las ballenas y su viaje a través del océano para crear esta colección tan especial."
          }
          social={"@pepito.perez pepitoperez@gmail.com"}
          imgSrc="https://manofmany.com/wp-content/uploads/2021/03/How-to-Look-Good-in-Photos-Master-Your-Smile.jpg"
        />
        <ProductsList data={collection} />
      </div>
    </TitleLayout>
  );
};
