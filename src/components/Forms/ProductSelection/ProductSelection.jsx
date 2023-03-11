import RadioInput from "../../UI/RadioInput";
import React from "react";
import Input from "../../UI/Input";
import Button from "../../UI/Button";
import { Form, useActionData, useFetcher } from "react-router-dom";
import styles from "./ProductSelection.module.scss";
import { useCart } from "../../../providers/CartProvider";

export const ProductSelection = ({ product }) => {
  const errors = useActionData();
  const success = useActionData();
  const cart = useCart();

  const { addItem } = cart;

  const handleSubmit = (e) => {
    const data = Object.fromEntries(new FormData(e.currentTarget));
    addItem(data);
  };

  return (
    <Form
      method="post"
      className={styles.formContainer}
      onSubmit={handleSubmit}
    >
      <div className={styles.radioContainer}>
        <div className={styles.radio}>
          <RadioInput
            data={product.sizes}
            title={"Talle"}
            name={"size"}
            defaultChecked={null}
          />
          {errors?.size && <p className={styles.error}>{errors.size}</p>}
        </div>
        <div className={styles.checkboxContainer}>
          <RadioInput
            data={product.colors}
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
      {success && <p className={styles.text}>{success}</p>}
    </Form>
  );
};
