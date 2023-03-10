import React from "react";
import { Form } from "react-router-dom";
import Button from "../../UI/Button";
import { InfoText } from "../../UI/Info";
import Input from "../../UI/Input";
import Select from "../../UI/Select";
import styles from "./PreCheckout.module.scss";

export const PreCheckoutForm = () => {
  const cities = [
    {
      name: "Mar del Plata",
      value: 1,
      shippingPrice: 300,
    },
    {
      name: "Buenos Aires",
      value: 2,
      shippingPrice: 600,
    },
    {
      name: "Santa Teresita",
      value: 3,
      shippingPrice: 400,
    },
  ];

  return (
    <Form method="post" className={styles.form}>
      <Select data={cities} name={"cities"} title={"Elige tu ciudad"} />
      <InfoText title={"Envío"} data={`$${cities[2].shippingPrice}`} />
      <Input variant={"rowInput"} label={"Cupón de descuento"} />
      <InfoText title={"Total"} />
      <div className={styles.actions}>
        <Button variant={"secondary"}>Seguir comprando</Button>
        <Button variant={"primary"}>Finalizar compra</Button>
      </div>
    </Form>
  );
};
