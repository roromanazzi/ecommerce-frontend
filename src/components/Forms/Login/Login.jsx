import React from "react";
import { Form, useActionData } from "react-router-dom";
import Button from "../../UI/Button";
import Input from "../../UI/Input";
import styles from "./Login.module.scss";

export const LoginForm = () => {
  const errors = useActionData();

  return (
    <Form method="post" className={styles.formContainer}>
      <div className={styles.inputContainer}>
        <Input
          label={"Email"}
          variant={"longInput"}
          name={"email"}
          id={"email"}
          type={"text"}
        />
        {errors?.email && <p className={styles.error}>{errors.email}</p>}
        <Input
          label={"Contraseña"}
          variant={"longInput"}
          name={"password"}
          id={"password"}
          type={"password"}
        />
        {errors?.password && <p className={styles.error}>{errors.password}</p>}
      </div>
      <Button variant={"primary"} type={"submit"}>
        Confirmar
      </Button>
    </Form>
  );
};
