import Input from "../../UI/Input";
import styles from "./AddressForm.module.scss";

import React from "react";
import { Form } from "react-router-dom";
import Checkbox from "../../UI/Checkbox";

export const AddressForm = () => {
  return (
    <Form className={styles.form}>
      <div className={styles.formContainer}>
        <h3 className={styles.formTitle}>Datos de envío</h3>
        <p className={styles.formSubtitle}>Podés completar esto luego</p>
        <Input
          variant={"longInput"}
          label={"Dirección"}
          type={"text"}
          name={"address"}
          id={"address"}
        />
        <Input
          variant={"longInput"}
          label={"Ciudad"}
          type={"text"}
          name={"city"}
          id={"city"}
        />
        <div className={styles.shortInputContainer}>
          <Input
            variant={"shortInput"}
            label={"País"}
            type={"text"}
            name={"country"}
            id={"country"}
          />
          <Input
            variant={"shortInput"}
            label={"CP"}
            type={"text"}
            name={"postalCode"}
            id={"postalCode"}
          />
        </div>
        <Input
          variant={"longInput"}
          label={"Teléfono"}
          type={"number"}
          name={"phoneNumber"}
          id={"phoneNumber"}
        />
      </div>
    </Form>
  );
};
