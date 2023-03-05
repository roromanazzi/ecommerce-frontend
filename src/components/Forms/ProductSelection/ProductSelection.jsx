import RadioInput from "../../UI/RadioInput";
import React from "react";
import Input from "../../UI/Input";
import Button from "../../UI/Button";
import { Form } from "react-router-dom";
import styles from "./ProductSelection.module.scss";

export const ProductSelection = () => {
  const sizes = [
    {
      name: "small",
      symbol: "S",
      isAvailable: false,
    },
    {
      name: "medium",
      symbol: "M",
      isAvailable: true,
    },
    {
      name: "large",
      symbol: "L",
      isAvailable: true,
    },
    {
      name: "extra-large",
      symbol: "XL",
      isAvailable: true,
    },
  ];
  const colors = [
    {
      name: "negro",
      color: "#000",
      isAvailable: true,
    },
    {
      name: "blanco",
      color: "#FFFFFF",
      isAvailable: false,
    },
    {
      name: "verde-militar",
      color: "#5E7461",
      isAvailable: true,
    },
  ];
  return (
    <div className={styles.productDetailContainer}>
      <h3 className={styles.productTitle}>Product title</h3>

      <p className={styles.productDescription}>Product description</p>
      <div>
        <p className={styles.price}>$3400</p>
        <Form className={styles.formContainer}>
          <div className={styles.dataContainer}>
            <RadioInput data={sizes} title={"Talle"} />
            <RadioInput data={colors} title={"Color"} />
          </div>
          <Input
            variant={"noLabelInput"}
            placeholder={"Cantidad"}
            type={"number"}
            name={"amount"}
            id={"amount"}
          />
          <Button variant={"primary"} type={"submit"}>
            Agregar al carrito
          </Button>
        </Form>
      </div>
    </div>
  );
};
