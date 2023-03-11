import React from "react";
import { Form, Link, useActionData } from "react-router-dom";
import Button from "../../UI/Button";
import Checkbox from "../../UI/Checkbox";
import Input from "../../UI/Input";
import styles from "./Signup.module.scss";

const SignUpForm = () => {
  const errors = useActionData();

  return (
    <Form method="post" className={styles.form}>
      <div className={styles.formContainer}>
        <Input
          variant={"longInput"}
          label={"Email"}
          type={"email"}
          name={"email"}
          id={"email"}
        />
        {errors?.email && <p className={styles.error}>{errors.email}</p>}
        <Input
          variant={"longInput"}
          label={"Contraseña"}
          type={"password"}
          name={"password"}
          id={"password"}
        />
        {errors?.password && <p className={styles.error}>{errors.password}</p>}
      </div>
      <div className={styles.footer}>
        <div className={styles.checkboxContainer}>
          <Checkbox
            label={"Acepto términos y condiciones"}
            id={"termsAndConditions"}
            name={"termsAndConditions"}
          />
          <Checkbox
            label={"Quiero suscribirme al newsletter"}
            id={"newsletter"}
            defaultChecked
            name={"newsletter"}
          />
        </div>
        {errors?.termsAndConditions && (
          <p className={styles.error}>{errors.termsAndConditions}</p>
        )}
        <Link className={styles.link}>Leer términos y condiciones</Link>
        <Button type={"submit"} variant={"primary"}>
          Aceptar
        </Button>
      </div>
    </Form>
  );
};

export default SignUpForm;
