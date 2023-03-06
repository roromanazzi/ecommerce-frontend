import React from "react";
import { LoginForm } from "../components/Forms/Login/Login";
import Header from "../components/Header";
import { PageTitle } from "../components/UI/PageTitle";
import styles from "./Login.module.scss";
import { Link } from "react-router-dom";

const Layout = ({ title, children }) => {
  return (
    <div className={styles.container}>
      <Header />
      <PageTitle title={title} />
      <body className={styles.body}>{children}</body>
    </div>
  );
};

const LoginPage = () => {
  return (
    <Layout title="Ingresar">
      <LoginForm />
      <div className={styles.links}>
        <Link>Olvide mi contraseña</Link>
        <Link>No tengo cuenta</Link>
      </div>
    </Layout>
  );
};

export default LoginPage;
