import RadioInput from "../../UI/RadioInput";
import React from "react";
import Input from "../../UI/Input";
import Button from "../../UI/Button";
import { Form, useActionData } from "react-router-dom";
import styles from "./ProductSelection.module.scss";

export const ProductSelection = () => {
  const productDescription = `Material: 100% algodón suave y duradero. 
Estilo: Camiseta de manga corta con cuello redondo y corte clásico.
Diseño: Pepito perez.
Cuidado: Lavar a máquina en agua fría con colores similares. Secar en secadora a baja temperatura o dejar secar al aire libre para una vida útil más larga.
`;
  const errors = useActionData();

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
      <p className={styles.productDescription}>{productDescription}</p>
      <div className={styles.wrapper}>
        <p className={styles.price}>$3400</p>

        <Form method="post" className={styles.formContainer}>
          <div className={styles.dataContainer}>
            <div className={styles.checkboxContainer}>
              <RadioInput
                data={sizes}
                title={"Talle"}
                name={"size"}
                defaultChecked={null}
              />
              {errors?.size && <p className={styles.error}>{errors.size}</p>}
            </div>
            <div className={styles.checkboxContainer}>
              <RadioInput
                data={colors}
                title={"Color"}
                name={"color"}
                defaultChecked={null}
              />
              {errors?.color && <p className={styles.error}>{errors.color}</p>}
            </div>
          </div>
          <Input
            variant={"noLabelInput"}
            placeholder={"Cantidad"}
            type={"number"}
            name={"amount"}
            id={"amount"}
          />
          {errors?.amount && <p className={styles.error}>{errors.amount}</p>}
          <Button variant={"primary"} type={"submit"}>
            Agregar al carrito
          </Button>
        </Form>
      </div>
    </div>
  );
};
