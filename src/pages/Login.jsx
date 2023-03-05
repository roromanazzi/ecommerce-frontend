import React from "react";
import { Login } from "../components/Forms/Login/Login";
import Header from "../components/Header";
import { PageTitle } from "../components/UI/PageTitle";
import styles from "./Login.module.scss";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <PageTitle title={"Ingresar"} />
      <body className={styles.body}>
        <Login />
        <div className={styles.links}>
          <Link>Olvide mi contraseña</Link>
          <Link>No tengo cuenta</Link>
        </div>
      </body>
    </div>
  );
};

export default LoginPage;
