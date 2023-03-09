import React from "react";
import { Form, Link, useActionData } from "react-router-dom";
import Button from "../../UI/Button";
import Checkbox from "../../UI/Checkbox";
import Input from "../../UI/Input";
import { AddressForm } from "../Address/AddressForms";
import styles from "./Signup.module.scss";

const SignUpForm = () => {
  const errors = useActionData();

  return (
    <Form method="post" className={styles.form}>
      <div className={styles.formContainer}>
        <div className="requiredInfo">
          <h3 className={styles.formTitle}>Información de usuario</h3>
          <p className={styles.formSubtitle}>Obligatorio</p>
          <Input
            variant={"longInput"}
            label={"Nombre"}
            type={"text"}
            name={"firstName"}
            id={"firstName"}
            // required={"true"}
          />
          {errors?.name && <p className={styles.error}>{errors.name}</p>}
          <Input
            variant={"longInput"}
            label={"Apellido"}
            type={"text"}
            name={"lastName"}
            id={"lastName"}
            // required={"true"}
          />
          {errors?.name && <p className={styles.error}>{errors.name}</p>}
          <Input
            variant={"longInput"}
            label={"Email"}
            type={"email"}
            name={"email"}
            id={"email"}
            // required={"true"}
          />
          {errors?.email && <p className={styles.error}>{errors.email}</p>}
          <div className={styles.shortInputContainer}>
            <Input
              variant={"shortInput"}
              label={"Contraseña"}
              type={"password"}
              name={"password"}
              id={"password"}
              // required={"true"}
            />

            <Input
              variant={"shortInput"}
              label={"Repetir contraseña"}
              type={"password"}
              name={"comparePassword"}
              id={"comparePassword"}
              // required={"true"}
            ></Input>
          </div>
          {errors?.password && (
            <p className={styles.error}>{errors.password}</p>
          )}
          {errors?.password && (
            <p className={styles.error}>{errors.differentPassword}</p>
          )}
        </div>
        <AddressForm />
      </div>
      <div className={styles.footer}>
        <div className={styles.checkboxContainer}>
          <Checkbox
            label={"Acepto términos y condiciones"}
            id={"tyc"}
            name={"tyc"}
          />
          <Checkbox
            label={"Quiero suscribirme al newsletter"}
            id={"newsletter"}
            defaultChecked
            name={"newsletter"}
          />
        </div>
        {errors?.tyc && <p className={styles.error}>{errors.tyc}</p>}
        <Link className={styles.link}>Leer términos y condiciones</Link>
        <Button type={"submit"} variant={"primary"}>
          Aceptar
        </Button>
      </div>
    </Form>
  );
};

export default SignUpForm;
