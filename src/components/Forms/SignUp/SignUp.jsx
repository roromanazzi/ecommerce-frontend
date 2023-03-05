import React from "react";
import { Form, Link } from "react-router-dom";
import Button from "../../UI/Button";
import Checkbox from "../../UI/Checkbox";
import Input from "../../UI/Input";
import styles from "./Signup.module.scss";

const SignUpForm = () => {
  return (
    <>
      <Form className={styles.form}>
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
              required={"true"}
            ></Input>
            <Input
              variant={"longInput"}
              label={"Apellido"}
              type={"text"}
              name={"lastName"}
              id={"lastName"}
              required={"true"}
            ></Input>
            <Input
              variant={"longInput"}
              label={"Email"}
              type={"email"}
              name={"email"}
              id={"email"}
              required={"true"}
            ></Input>
            <div className={styles.shortInputContainer}>
              <Input
                variant={"shortInput"}
                label={"Contraseña"}
                type={"password"}
                name={"password"}
                id={"password"}
                required={"true"}
              ></Input>
              <Input
                variant={"shortInput"}
                label={"Repetir contraseña"}
                type={"password"}
                name={"comparePassword"}
                id={"comparePassword"}
                required={"true"}
              ></Input>
            </div>
          </div>
          <div className="unrequiredInfo">
            <h3 className={styles.formTitle}>Datos de envío</h3>
            <p className={styles.formSubtitle}>Podés completar esto luego</p>
            <Input
              variant={"longInput"}
              label={"Dirección"}
              type={"text"}
              name={"address"}
              id={"address"}
            ></Input>
            <Input
              variant={"longInput"}
              label={"Ciudad"}
              type={"text"}
              name={"city"}
              id={"city"}
            ></Input>
            <div className={styles.shortInputContainer}>
              <Input
                variant={"shortInput"}
                label={"País"}
                type={"text"}
                name={"country"}
                id={"country"}
              ></Input>
              <Input
                variant={"shortInput"}
                label={"CP"}
                type={"text"}
                name={"postalCode"}
                id={"postalCode"}
              ></Input>
            </div>
            <Input
              variant={"longInput"}
              label={"Teléfono"}
              type={"number"}
              name={"phoneNumber"}
              id={"phoneNumber"}
            ></Input>
          </div>
        </div>
        <div className={styles.checkboxContainer}>
          <Checkbox
            label={"Acepto términos y condiciones"}
            id={"tyc"}
            name={"tyc"}
          />
          <Checkbox
            label={"Quiero suscribirme al newsletter"}
            id={"newsletter"}
            name={"newsletter"}
          />
        </div>
        <Link className={styles.link}>Leer términos y condiciones</Link>
        <Button type={"submit"} variant={"primary"}>
          Aceptar
        </Button>
      </Form>
    </>
  );
};

export default SignUpForm;
