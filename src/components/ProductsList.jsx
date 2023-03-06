import React from "react";
import { ProductItem } from "./ProductItem";
import styles from "./ProductList.module.scss";

export const ProductsList = () => {
  const data = [
    {
      id: 1,
      title: "Remera Rihanna",
      price: 3400,
      imgSrc:
        "https://i.pinimg.com/564x/29/8f/09/298f09a7d7a1bdd46f7f6ab9d90d5599.jpg",
    },
    {
      id: 2,
      title: "Remera Carlos",
      price: 3200,
      imgSrc:
        "https://images.squarespace-cdn.com/content/v1/583b7c31e58c622c2543bfc4/1481048256483-07N92IKL6IJ1DLM4KK7T/with-logo-1.jpg?format=2500w",
    },
    {
      id: 3,
      title: "Remera Pedro",
      price: 3900,
      imgSrc:
        "https://i.pinimg.com/564x/d7/31/07/d73107f0a851db12fec27c81c863d752.jpg",
    },
    {
      id: 5,
      title: "Remera Carlos",
      price: 3200,
      imgSrc:
        "https://images.squarespace-cdn.com/content/v1/583b7c31e58c622c2543bfc4/1481048256483-07N92IKL6IJ1DLM4KK7T/with-logo-1.jpg?format=2500w",
    },
    {
      id: 4,
      title: "Remera Rihanna",
      price: 3400,
      imgSrc:
        "https://i.pinimg.com/564x/29/8f/09/298f09a7d7a1bdd46f7f6ab9d90d5599.jpg",
    },
    {
      id: 8,
      title: "Remera Rihanna",
      price: 3400,
      imgSrc:
        "https://i.pinimg.com/564x/29/8f/09/298f09a7d7a1bdd46f7f6ab9d90d5599.jpg",
    },
    {
      id: 6,
      title: "Remera Pedro",
      price: 3900,
      imgSrc:
        "https://i.pinimg.com/564x/d7/31/07/d73107f0a851db12fec27c81c863d752.jpg",
    },
  ];

  return (
    <div className={styles.listContainer}>
      {data.map((item) => {
        return (
          <div key={item.id}>
            <ProductItem
              title={item.title}
              price={item.price}
              imgSrc={item.imgSrc}
            ></ProductItem>
          </div>
        );
      })}
    </div>
  );
};
