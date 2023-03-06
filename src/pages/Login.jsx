import React from "react";
import { LoginForm } from "../components/Forms/Login/Login";
import styles from "./Login.module.scss";
import { Link } from "react-router-dom";
import { TitleLayout } from "./Root";
const LoginPage = () => {
  return (
    <TitleLayout title="Ingresar" className={styles.container}>
      <LoginForm />
      <div className={styles.links}>
        <Link>Olvide mi contraseña</Link>
        <Link>No tengo cuenta</Link>
      </div>
    </TitleLayout>
  );
};

export default LoginPage;
